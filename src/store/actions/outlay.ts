import {
  ISetIsCreatedAction,
  ISetIsUpdatedAction,
  ISetOutlayListAction,
  ISetSelectedIdRowAction,
} from "../../types/interfaces/store/outlay.ts";
import { EOutlayActions } from "../../types/enums/outlay.enum.ts";
import { IOutlay } from "../../types/interfaces/entities/outlay.ts";

export const setSelectedIdRowAction = (payload: number | null): ISetSelectedIdRowAction => ({
  payload,
  type: EOutlayActions.SetSelectedIdRow,
});

export const setOutlayListAction = (payload: IOutlay[] | null): ISetOutlayListAction => ({
  payload,
  type: EOutlayActions.SetOutlayList,
});

export const setIsCreatedAction = (payload: boolean): ISetIsCreatedAction => ({
  payload,
  type: EOutlayActions.SetIsCreated,
});

export const setIsUpdatedAction = (payload: boolean): ISetIsUpdatedAction => ({
  payload,
  type: EOutlayActions.SetIsUpdated,
});
