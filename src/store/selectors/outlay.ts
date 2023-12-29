import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer.ts";

const state = ({ outlay }: RootState) => outlay;

export const selectedIdRowSelector = createSelector(state, ({ selectedIdRow }) => selectedIdRow);

export const outlayListSelector = createSelector(state, ({ outlayList }) => outlayList);

export const isCreatedSelector = createSelector(state, ({ isCreated }) => isCreated);

export const isUpdatedSelector = createSelector(state, ({ isUpdated }) => isUpdated);
