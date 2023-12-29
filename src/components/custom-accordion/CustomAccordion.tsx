import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IProject } from "../../mock/projects.ts";
import styles from "./CustomAccrodion.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink, useParams } from "react-router-dom";
import cn from "classnames";

interface ICustomAccordionProps {
  projectName: string;
  projectsList: IProject[];
}

export const CustomAccordion = ({
  projectsList,
  projectName,
}: ICustomAccordionProps) => {
  const { projectId } = useParams();
  return (
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordion-summary"
      >
        <div className={styles.wrapper}>
          <span className={styles.title}>{projectName}</span>
          <span className={styles.postscript}>Аббревиатура</span>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {projectsList.map(({ id, label, path }) => (
          <NavLink
            key={id}
            to={`${path}/${id}`}
            className={cn(styles.item, {
              [styles.active]: id.toString() === projectId,
            })}
          >
            <DashboardIcon />
            <span className={styles.title}>{label}</span>
          </NavLink>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
