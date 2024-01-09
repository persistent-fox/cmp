import { PropsWithChildren } from "react";
import styles from "./ErrorBlock.module.scss";

interface IErrorBlockProps extends PropsWithChildren {}

export const ErrorBlock = ({ children }: IErrorBlockProps) => {
  return <div className={styles.error}>{children}</div>;
};
