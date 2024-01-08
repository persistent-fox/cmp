import { TableHead } from "../table-head/TableHead.tsx";
import { TreeTableItem } from "../tree-table-item/TreeTableItem.tsx";
import { tableTitles } from "../../mock/tableTitles.ts";
import styles from "./Table.module.scss";
import { IOutlay } from "../../types/interfaces/entities/outlay.ts";
import { defaultRow } from "../../mock/defaultRow.ts";
import {findMaxDepth} from "../../utils/findMaxDepth.ts";

interface ITableProps {
  tableRows: IOutlay[] | null;
}

export const Table = ({ tableRows }: ITableProps) => {
  return (
    <div className={styles.table}>
      <TableHead maxDepth={findMaxDepth(tableRows)} tableTitles={tableTitles} />
      <div className={styles.table_body}>
        {(() => {
          switch (true) {
            case !tableRows?.length: {
              return <TreeTableItem maxDepth={1} tableRows={[{ ...defaultRow }]} parentIndex={0} />;
            }
            case !!tableRows?.length:
              return <TreeTableItem maxDepth={findMaxDepth(tableRows)} tableRows={tableRows} parentIndex={0} />;
          }
        })()}
      </div>
    </div>
  );
};
