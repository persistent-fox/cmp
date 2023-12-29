import { CustomAccordion } from "../../../../components/custom-accordion/CustomAccordion.tsx";
import { projectsListMock } from "../../../../mock/projects.ts";
import styles from "./Sidebar.module.scss";

interface ISidebarProps {}

export const Sidebar = ({}: ISidebarProps) => {
  return (
    <div className={styles.wrapper}>
      <CustomAccordion
        projectName="Название проекта"
        projectsList={projectsListMock}
      />
    </div>
  );
};
