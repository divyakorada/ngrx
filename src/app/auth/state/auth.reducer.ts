import { createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.state"
import { loginSuccess } from "./auth.actions";
import { state } from "@angular/animations";

const _authReducer = createReducer(initialState, 
    on(loginSuccess, (state, action) => {
        console.log('state', state);
        console.log('action', action);
        return {
            ...state,
            user: action.userInfo
        }
    })
);

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}