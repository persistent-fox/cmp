import { PropsWithChildren } from "react";
import styles from "./TableRow.module.scss";

interface ITableRowProps extends PropsWithChildren {}

export const TableRow = ({ children }: ITableRowProps) => {
  return <div className={styles.table_row}>{children}</div>;
};
