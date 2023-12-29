import { IOutlay } from "../entities/outlay.ts";

// получение списка
export interface IGetOutlayListFetch {
  request: IGetOutlayListRequest;
  response: IOutlay[] | null;
}

export interface IGetOutlayListRequest {
  eID: string;
}

export interface INewOutlay extends Omit<IOutlay, "id" | "total" | "child" | "parentId"> {
  parentId: number | null;
}

// создание строки
export interface ICreateRowInEntityFetch {
  request: ICreateRowInEntityRequest;
  response: ICreateRowInEntityResponse | null;
}

export interface ICreateRowInEntityRequest {
  eID: string;
  newOutlay: INewOutlay;
}

export interface ICreateRowInEntityResponse {
  current: IOutlay;
  changed: [];
}

// удаление строки
export interface IDeleteRowFetch {
  request: IDeleteRowRequest;
  response: IDeleteRowResponse | null;
}
export interface IDeleteRowRequest {
  rID: number;
  eID: string;
}

export interface IDeleteRowResponse {
  changed: IOutlay[];
  current: IOutlay;
}

// редактирование строки

export interface IUpdateOutlay extends Omit<IOutlay, "id" | "total" | "child" | "parentId"> {}

export interface IUpdateRowFetch {
  request: IUpdateRowRequest;
  response: IUpdateRowResponse | null;
}
export interface IUpdateRowRequest {
  rID: number;
  eID: string;
  updateOutlay: IUpdateOutlay;
}

export interface IUpdateRowResponse {
  changed: IOutlay[];
  current: IOutlay;
}
