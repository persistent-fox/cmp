import { MainLayout } from "../../layouts/main-layout/MainLayout.tsx";
import { useParams } from "react-router-dom";
import { projectsListMock } from "../../mock/projects.ts";
import styles from "./ProjectPage.module.scss";
import { Table } from "../../components/table/Table.tsx";
import { useEffect, useState } from "react";
import { getOutlayList } from "../../api/outlay.ts";
import { useAppDispatch } from "../../store/hooks.ts";
import { useSelector } from "react-redux";
import { outlayListSelector } from "../../store/selectors/outlay.ts";
import { TableHead } from "../../components/table/table-head/TableHead.tsx";
import { findMaxDepth } from "../../utils/findMaxDepth.ts";
import { tableTitles } from "../../mock/tableTitles.ts";
import { TableBody } from "../../components/table/table-body/tableBody.tsx";
import { TreeTableItem } from "../../components/tree-table-item/TreeTableItem.tsx";
import { defaultRow } from "../../mock/defaultRow.ts";
import { Spinner } from "../../components/spinner/Spinner.tsx";
import { setOutlayListAction } from "../../store/actions/outlay.ts";

export const ProjectPage = () => {
  const { projectId } = useParams();
  const dispatch = useAppDispatch();
  const outlayList = useSelector(outlayListSelector);
  const [isLoading, setIsLoading] = useState(false);

  const { name } = projectsListMock.find(({ id }) => id.toString() === projectId) || {};

  useEffect(() => {
    (async () => {
      if (!projectId) return;
      setIsLoading(true);
      const data = await getOutlayList({ eID: projectId }).finally(() => setIsLoading(false));
      dispatch(setOutlayListAction(data));
    })();
  }, [projectId]);

  return (
    <MainLayout>
      <div className={styles.top}>
        <h1 className={styles.title}>{name}</h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table>
          <TableHead maxDepth={findMaxDepth(outlayList)} tableTitles={tableTitles} />
          <TableBody>
            {(() => {
              switch (true) {
                case !outlayList?.length: {
                  return <TreeTableItem maxDepth={1} tableRows={[{ ...defaultRow }]} parentIndex={0} />;
                }
                case !!outlayList?.length:
                  return <TreeTableItem maxDepth={findMaxDepth(outlayList)} tableRows={outlayList} parentIndex={0} />;
              }
            })()}
          </TableBody>
        </Table>
      )}
    </MainLayout>
  );
};
