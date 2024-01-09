import styles from "./Spinner.module.scss";
import { CircularProgress } from "@mui/material";

interface ISpinnerProps {}

export const Spinner = ({}: ISpinnerProps) => {
  return (
    <div className={styles.wrapper}>
      <CircularProgress color="inherit" />
    </div>
  );
};
