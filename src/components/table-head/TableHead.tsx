import styles from "./TableHead.module.scss";
import { ITableTitle } from "../../mock/tableTitles.ts";

interface ITableHeadProps {
  tableTitles: ITableTitle[];
}

export const TableHead = ({ tableTitles }: ITableHeadProps) => {
  return (
    <div className={styles.table_head}>
      {tableTitles.map((item) => (
        <div key={item.id} className={styles.head_item}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
