import { TableHead } from "../table-head/TableHead.tsx";
import { TreeTableItem } from "../tree-table-item/TreeTableItem.tsx";
import { tableTitles } from "../../mock/tableTitles.ts";
import styles from "./Table.module.scss";
import { IOutlay } from "../../types/interfaces/entities/outlay.ts";
import { defaultRow } from "../../mock/defaultRow.ts";

interface ITableProps {
  tableRows: IOutlay[] | null;
}

export const Table = ({ tableRows }: ITableProps) => {
  return (
    <div className={styles.table}>
      <TableHead tableTitles={tableTitles} />
      <div className={styles.table_body}>
        {(() => {
          switch (true) {
            case !tableRows?.length: {
              return <TreeTableItem tableRows={[{ ...defaultRow }]} parentIndex={0} />;
            }
            case !!tableRows?.length:
              return <TreeTableItem tableRows={tableRows} parentIndex={0} />;
          }
        })()}
      </div>
    </div>
  );
};
