import styles from "./TableHead.module.scss";
import { ITableTitle } from "../../../mock/tableTitles.ts";

interface ITableHeadProps {
  tableTitles: ITableTitle[];
  maxDepth: number;
}

export const TableHead = ({ tableTitles, maxDepth }: ITableHeadProps) => {
  return (
    <div
      className={styles.table_head}
      style={{ gridTemplateColumns: `${60 + maxDepth * 20}px 757px repeat(4, 200px)` }}
    >
      {tableTitles.map((item) => (
        <div key={item.id} className={styles.head_item}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
