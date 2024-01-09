import { Fragment } from "react";
import { TableRow } from "../table/table-row/TableRow.tsx";
import { IOutlay } from "../../types/interfaces/entities/outlay.ts";
import cn from "classnames";
import { RowForm } from "../row-form/RowForm.tsx";

interface ITreeTableItemProps {
  tableRows: IOutlay[] | null;
  parentIndex: number;
  className?: string;
  maxDepth: number;
}

export const TreeTableItem = ({ tableRows, parentIndex = 0, className, maxDepth }: ITreeTableItemProps) => {
  return (
    <>
      {tableRows?.map((item) => (
        <Fragment key={item.id}>
          <TableRow>
            <RowForm
              maxDepth={maxDepth}
              className={cn(className, { "not-parent": !item.child.length })}
              parentIndex={parentIndex}
              row={item}
            />
          </TableRow>
          {!!item.child.length && (
            <TreeTableItem maxDepth={maxDepth} tableRows={item.child} className="child" parentIndex={parentIndex + 1} />
          )}
        </Fragment>
      ))}
    </>
  );
};
