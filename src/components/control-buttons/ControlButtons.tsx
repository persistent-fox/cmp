import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./ControlButtons.module.scss";
import { useAppDispatch } from "../../store/hooks.ts";
import { isCreatedSelector, isUpdatedSelector, outlayListSelector } from "../../store/selectors/outlay.ts";
import { useSelector } from "react-redux";
import { updateObjectById } from "../../utils/updateObjectById.ts";
import { setIsCreatedAction, setOutlayListAction } from "../../store/actions/outlay.ts";
import { deleteRow } from "../../api/outlay.ts";
import { useParams } from "react-router-dom";
import { deleteObjectById } from "../../utils/deleteObjectById.ts";
import { defaultRow } from "../../mock/defaultRow.ts";
import cn from "classnames";
import { countChildrenById } from "../../utils/countChildrenById.ts";
import { useMemo } from "react";

interface IControlButtonsProps {
  index: number;
  idRow: number | null;
}

export const ControlButtons = ({ index, idRow }: IControlButtonsProps) => {
  const dispatch = useAppDispatch();
  const isCreated = useSelector(isCreatedSelector);
  const isUpdated = useSelector(isUpdatedSelector);
  const outlayList = useSelector(outlayListSelector);
  const { projectId } = useParams();
  const countChildren = useMemo(() => {
    if (!outlayList || !idRow) return 0;
    return countChildrenById(outlayList, idRow);
  }, [outlayList, idRow]);

  const handleCreateRowInEntity = () => {
    if (!outlayList || isCreated || isUpdated) return;
    dispatch(setIsCreatedAction(true));
    // if (findObjectById(outlayList, null)) return;
    const currentOutlayList = updateObjectById(
      outlayList,
      idRow,
      {
        ...defaultRow,
        parentId: idRow,
      },
      "create",
    );
    dispatch(setOutlayListAction(currentOutlayList));
  };

  const handleDeleteRow = async () => {
    if (!projectId || !idRow || isCreated || isUpdated) return;
    const data = await deleteRow({ eID: projectId, rID: idRow });
    if (!data || !outlayList) return;
    dispatch(setOutlayListAction(deleteObjectById(outlayList, idRow)));
  };

  return (
    <div className={styles.wrapper} style={{ paddingLeft: `${(index * 20) + 15}px` }}>
      <div className={styles.icons}>
        <button type="button" className={cn(styles.button, "file")} onClick={handleCreateRowInEntity}>
          <span className="line-down" style={{ height: `${countChildren * 52+ ((countChildren - 1 )* 8)}px` }}></span>
          <span className="line-left"></span>
          <DescriptionIcon />
        </button>
        <button onClick={handleDeleteRow} type="button" className={styles.trash}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
