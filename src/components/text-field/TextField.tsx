import { HTMLProps } from "react";
import styles from "./TextField.module.scss";
import { ErrorBlock } from "../error-block/ErrorBlock.tsx";

interface ITextFieldProps extends HTMLProps<HTMLInputElement> {
  handleChange: (value: string) => void;
  error: string;
  isDisabled: boolean;
  value: string;
  name: string;
}

export const TextField = ({ handleChange, error, isDisabled, value, ...props }: ITextFieldProps) => {
  return (
    <>
      <input
        value={value}
        disabled={isDisabled}
        onChange={({ target }) => handleChange(target.value)}
        type="text"
        className={styles.input}
        {...props}
      />
      <ErrorBlock>{error}</ErrorBlock>
    </>
  );
};
