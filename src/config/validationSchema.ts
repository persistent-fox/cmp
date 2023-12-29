import * as Yup from "yup";
export const validationSchema = {
  TableRow: Yup.object().shape({
    rowName: Yup.string(),
    salary: Yup.number().required("Заполните поле"),
    equipmentCosts: Yup.number().required("Заполните поле"),
    overheads: Yup.number().required("Заполните поле"),
    estimatedProfit: Yup.number().required("Заполните поле"),
  }),
};
