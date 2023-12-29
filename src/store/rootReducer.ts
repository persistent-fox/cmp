import { combineReducers } from "redux";
import { outlayReducer } from "./redusers/outlay.ts";

const rootReducer = combineReducers({
  outlay: outlayReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
