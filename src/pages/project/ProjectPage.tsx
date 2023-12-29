import { MainLayout } from "../../layouts/main-layout/MainLayout.tsx";
import { useParams } from "react-router-dom";
import { projectsListMock } from "../../mock/projects.ts";
import styles from "./ProjectPage.module.scss";
import { Table } from "../../components/table/Table.tsx";
import { useEffect } from "react";
import { getOutlayList } from "../../api/outlay.ts";
import { setOutlayListAction } from "../../store/actions/outlay.ts";
import { useAppDispatch } from "../../store/hooks.ts";
import { useSelector } from "react-redux";
import { outlayListSelector } from "../../store/selectors/outlay.ts";

export const ProjectPage = () => {
  const { projectId } = useParams();
  const dispatch = useAppDispatch();
  const outlayList = useSelector(outlayListSelector);

  const { name } = projectsListMock.find(({ id }) => id.toString() === projectId) || {};

  useEffect(() => {
    (async () => {
      if (!projectId) return;
      const data = await getOutlayList({ eID: projectId });
      dispatch(setOutlayListAction(data));
    })();
  }, [projectId]);

  return (
    <MainLayout>
      <div className={styles.top}>
        <h1 className={styles.title}>{name}</h1>
      </div>
      <Table tableRows={outlayList} />
    </MainLayout>
  );
};
