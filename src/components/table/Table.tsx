import styles from "./Table.module.scss";
import { PropsWithChildren } from "react";

interface ITableProps extends PropsWithChildren {}

export const Table = ({ children }: ITableProps) => {
  return <div className={styles.table}>{children}</div>;
};
