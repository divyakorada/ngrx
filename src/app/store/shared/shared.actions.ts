import { createAction, props } from "@ngrx/store";

export const SET_LOADING_ACTION = '[Shared state] set loading spinner';
export const SET_ERROR_MESAGE = '[Shared state] set error message';

export const setLoadingSpinner = createAction(SET_LOADING_ACTION, props<{ status: boolean}>());
export const setErrorMessage = createAction(SET_ERROR_MESAGE, props<{ message: string}>());