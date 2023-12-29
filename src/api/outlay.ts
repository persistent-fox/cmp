import { instance } from "./index.ts";
import {
  ICreateRowInEntityFetch,
  IDeleteRowFetch,
  IGetOutlayListFetch,
  IUpdateRowFetch,
} from "../types/interfaces/api/outlay.ts";

export const getOutlayList = async ({
  eID,
}: IGetOutlayListFetch["request"]): Promise<IGetOutlayListFetch["response"]> => {
  try {
    const { data } = await instance.get(`/outlay-rows/entity/${eID}/row/list`);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createOutlay = async ({
  eID,
  newOutlay,
}: ICreateRowInEntityFetch["request"]): Promise<ICreateRowInEntityFetch["response"]> => {
  try {
    const { data } = await instance.post(`/outlay-rows/entity/${eID}/row/create`, {
      ...newOutlay,
    });
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deleteRow = async ({ eID, rID }: IDeleteRowFetch["request"]): Promise<IDeleteRowFetch["response"]> => {
  try {
    const { data } = await instance.delete(`/outlay-rows/entity/${eID}/row/${rID}/delete`);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const updateRow = async ({
  eID,
  updateOutlay,
  rID,
}: IUpdateRowFetch["request"]): Promise<IUpdateRowFetch["response"]> => {
  try {
    const { data } = await instance.post(`/outlay-rows/entity/${eID}/row/${rID}/update`, {
      ...updateOutlay,
    });
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
