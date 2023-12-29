import { ERoutes } from "../types/enums/routes.enum.ts";

export interface IProject {
  id: number;
  label: string;
  name: string;
  path: ERoutes;
}

export const projectsListMock: IProject[] = [
  {
    id: 1,
    label: "По проекту",
    name: "По проекту",
    path: ERoutes.Project,
  },
  {
    id: 2,
    label: "Объекту",
    name: "Объекту",
    path: ERoutes.Project,
  },
  {
    id: 3,
    label: "РД",
    name: "Работы дежурного",
    path: ERoutes.Project,
  },
  {
    id: 4,
    label: "МТО",
    name: "Математически-топологические отчеты",
    path: ERoutes.Project,
  },
  {
    id: 116513,
    label: "СМР",
    name: "Строительно-монтажные работы",
    path: ERoutes.Project,
  },
  {
    id: 6,
    label: "График",
    name: "График",
    path: ERoutes.Project,
  },
  {
    id: 7,
    label: "МиМ",
    name: "Математика и Механика",
    path: ERoutes.Project,
  },
  {
    id: 8,
    label: "Рабочие",
    name: "Рабочие",
    path: ERoutes.Project,
  },
  {
    id: 9,
    label: "Капвложения",
    name: "Капвложения",
    path: ERoutes.Project,
  },
  {
    id: 10,
    label: "Бюджет",
    name: "Бюджет",
    path: ERoutes.Project,
  },
  {
    id: 11,
    label: "Финансирование",
    name: "Финансирование",
    path: ERoutes.Project,
  },
  {
    id: 12,
    label: "Панорамы",
    name: "Панорамы",
    path: ERoutes.Project,
  },
  {
    id: 13,
    label: "Камеры",
    name: "Камеры",
    path: ERoutes.Project,
  },
  {
    id: 14,
    label: "Поручения",
    name: "Поручения",
    path: ERoutes.Project,
  },
  {
    id: 16,
    label: "Контрагенты",
    name: "Контрагенты",
    path: ERoutes.Project,
  },
];
