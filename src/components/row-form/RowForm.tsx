import { useAppDispatch } from "../../store/hooks.ts";
import { useSelector } from "react-redux";
import {
  isCreatedSelector,
  isUpdatedSelector,
  outlayListSelector,
  selectedIdRowSelector,
} from "../../store/selectors/outlay.ts";
import { useParams } from "react-router-dom";
import {
  setIsCreatedAction,
  setIsUpdatedAction,
  setOutlayListAction,
  setSelectedIdRowAction,
} from "../../store/actions/outlay.ts";
import { Formik } from "formik";
import { validationSchema } from "../../config/validationSchema.ts";
import { createOutlay, updateRow } from "../../api/outlay.ts";
import { updateObjectById } from "../../utils/updateObjectById.ts";
import cn from "classnames";
import styles from "./RowForm.module.scss";
import { ControlButtons } from "../control-buttons/ControlButtons.tsx";
import { TableCell } from "../table/table-cell/TableCell.tsx";
import { IOutlay } from "../../types/interfaces/entities/outlay.ts";
import { TextField } from "../text-field/TextField.tsx";

interface IRowFormProps {
  row: IOutlay;
  parentIndex: number;
  className?: string;
  maxDepth: number;
}

export const RowForm = ({ row, parentIndex, className, maxDepth }: IRowFormProps) => {
  const dispatch = useAppDispatch();
  const selectedIdRow = useSelector(selectedIdRowSelector);
  const outlayList = useSelector(outlayListSelector);
  const isUpdated = useSelector(isUpdatedSelector);
  const isCreated = useSelector(isCreatedSelector);
  const { projectId } = useParams();

  const handleDoubleClick = () => {
    if (isUpdated || isCreated) return;
    dispatch(setIsUpdatedAction(true));
    dispatch(setSelectedIdRowAction(row.id));
  };

  return (
    <Formik
      initialValues={{
        rowName: row.rowName || "",
        salary: row.salary || 0,
        equipmentCosts: row.equipmentCosts || 0,
        overheads: row.overheads || 0,
        estimatedProfit: row.estimatedProfit || 0,
      }}
      validationSchema={validationSchema.TableRow}
      onSubmit={async (values) => {
        if (!projectId) return;
        dispatch(setSelectedIdRowAction(null));
        const newOutlay = {
          ...values,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          parentId: row.parentId!,
          supportCosts: 0,
        };
        let data;
        if (selectedIdRow) {
          data = await updateRow({ eID: projectId, rID: selectedIdRow, updateOutlay: newOutlay });
          dispatch(setIsUpdatedAction(false));
        } else {
          data = await createOutlay({ eID: projectId, newOutlay });
          dispatch(setIsCreatedAction(false));
        }
        if (!data || !outlayList) return;
        if (!outlayList.length) {
          dispatch(setOutlayListAction([{ ...data.current, child: [] }]));
        } else {
          dispatch(setOutlayListAction(updateObjectById(outlayList, row.parentId!, data.current, "edit")));
        }
      }}
    >
      {(props) => {
        return (
          <form
            onSubmit={props.handleSubmit}
            onDoubleClick={handleDoubleClick}
            className={cn(styles.wrapper, className)}
            style={{ gridTemplateColumns: `${60 + maxDepth * 20}px 757px repeat(4, 200px)` }}
          >
            <ControlButtons idRow={row.id} index={parentIndex} />
            {Object.entries(props.values).map(([key, value]) => {
              return (
                <TableCell key={key}>
                  <TextField
                    isDisabled={selectedIdRow !== row.id}
                    handleChange={(val) => props.setFieldValue(key, val)}
                    value={value.toString() || ""}
                    name={key}
                    //TODO: Нужно правильно описать
                    //@ts-ignore
                    error={props.errors[key]}
                  />
                </TableCell>
              );
            })}
            <input style={{ display: "none" }} type="submit" />
          </form>
        );
      }}
    </Formik>
  );
};
