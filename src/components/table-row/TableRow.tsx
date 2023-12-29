import styles from "./TableRow.module.scss";
import { useAppDispatch } from "../../store/hooks.ts";
import {
  setIsCreatedAction,
  setIsUpdatedAction,
  setOutlayListAction,
  setSelectedIdRowAction,
} from "../../store/actions/outlay.ts";
import { IOutlay } from "../../types/interfaces/entities/outlay.ts";
import { TableCell } from "../table-cell/TableCell.tsx";
import { ControlButtons } from "../control-buttons/ControlButtons.tsx";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import {
  isCreatedSelector,
  isUpdatedSelector,
  outlayListSelector,
  selectedIdRowSelector,
} from "../../store/selectors/outlay.ts";
import { createOutlay, updateRow } from "../../api/outlay.ts";
import { updateObjectById } from "../../utils/updateObjectById.ts";
import { useParams } from "react-router-dom";
import { validationSchema } from "../../config/validationSchema.ts";
import cn from "classnames";
interface ITableRow {
  row: IOutlay;
  parentIndex: number;
  className?: string;
}

export const TableRow = ({ row, parentIndex, className }: ITableRow) => {
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
        console.log("res", values);
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
            className={cn(styles.table_row, className)}
          >
            <ControlButtons idRow={row.id} index={parentIndex} />
            {Object.entries(props.values).map(([key, value]) => {
              return (
                <TableCell
                  handleChange={(val) => props.setFieldValue(key, val)}
                  value={value.toString() || ""}
                  name={key}
                  id={row.id}
                  key={key}
                  error={props.errors[key]}
                />
              );
            })}
            <input style={{ display: "none" }} type="submit" />
          </form>
        );
      }}
    </Formik>
  );
};
