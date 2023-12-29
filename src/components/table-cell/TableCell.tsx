import styles from "./TableCell.module.scss";
import { useSelector } from "react-redux";
import { selectedIdRowSelector } from "../../store/selectors/outlay.ts";

interface ITableCell {
  id: number | null;
  name: string;
  handleChange: (value: string) => void;
  value: string;
  error: string;
}

export const TableCell = ({ value, id, name, handleChange, error }: ITableCell) => {
  const selectedId = useSelector(selectedIdRowSelector);

  return (
    <div className={styles.table_cell}>
      <input
        name={name}
        value={value}
        disabled={selectedId !== id}
        onChange={({ target }) => handleChange(target.value)}
        type="text"
        className={styles.input}
      />
      <div>{error}</div>
    </div>
  );
};
