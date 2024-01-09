import { PropsWithChildren } from "react";
import styles from "./tableBody.module.scss";

interface ITableBodyProps extends PropsWithChildren {}

export const TableBody = ({ children }: ITableBodyProps) => {
  return <div className={styles.table_body}>{children}</div>;
};
