import styles from "./TableCell.module.scss";
import { PropsWithChildren } from "react";

interface ITableCellProps extends PropsWithChildren {}

export const TableCell = ({ children }: ITableCellProps) => {
  return <div className={styles.table_cell}>{children}</div>;
};
