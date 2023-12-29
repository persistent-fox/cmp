import { PropsWithChildren } from "react";
import Header from "./components/header/Header.tsx";

import { Sidebar } from "./components/sidebar/Sidebar.tsx";
import styles from "./MainLayout.module.scss";

interface IMainLayoutProps extends PropsWithChildren {}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <section className={styles.section}>{children}</section>
      </div>
    </>
  );
};
