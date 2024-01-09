import * as Yup from "yup";
export const validationSchema = {
  TableRow: Yup.object().shape({
    rowName: Yup.string(),
    salary: Yup.number().typeError("Введите число").required("Заполните поле"),
    equipmentCosts: Yup.number().typeError("Введите число").required("Заполните поле"),
    overheads: Yup.number().typeError("Введите число").required("Заполните поле"),
    estimatedProfit: Yup.number().typeError("Введите число").required("Заполните поле"),
  }),
};
