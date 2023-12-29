import { IOutlayState, TOutlayActions } from "../../types/interfaces/store/outlay.ts";
import { EOutlayActions } from "../../types/enums/outlay.enum.ts";

const initState: IOutlayState = {
  isCreated: false,
  isUpdated: false,
  selectedIdRow: null,
  outlayList: null,
};

const initialState = { ...initState };

export const outlayReducer = (state = initialState, action: TOutlayActions) => {
  switch (action.type) {
    case EOutlayActions.SetSelectedIdRow:
      return { ...state, selectedIdRow: action.payload };
    case EOutlayActions.SetOutlayList:
      return { ...state, outlayList: action.payload };
    case EOutlayActions.SetIsCreated:
      return { ...state, isCreated: action.payload };
    case EOutlayActions.SetIsUpdated:
      return { ...state, isUpdated: action.payload };
    default:
      return { ...state };
  }
};
