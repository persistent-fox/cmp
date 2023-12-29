import { EOutlayActions } from "../../enums/outlay.enum.ts";
import { IOutlay } from "../entities/outlay.ts";

export interface IOutlayState {
  isCreated: boolean;
  isUpdated: boolean;
  selectedIdRow: number | null;
  outlayList: IOutlay[] | null;
}

export interface ISetSelectedIdRowAction {
  type: EOutlayActions.SetSelectedIdRow;
  payload: number | null;
}

export interface ISetOutlayListAction {
  type: EOutlayActions.SetOutlayList;
  payload: IOutlay[] | null;
}

export interface ISetIsCreatedAction {
  type: EOutlayActions.SetIsCreated;
  payload: boolean;
}

export interface ISetIsUpdatedAction {
  type: EOutlayActions.SetIsUpdated;
  payload: boolean;
}

export type TOutlayActions = ISetSelectedIdRowAction | ISetOutlayListAction | ISetIsCreatedAction | ISetIsUpdatedAction;
