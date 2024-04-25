import { createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.state"
import { loginSuccess, signupSuccess } from "./auth.actions";
import { state } from "@angular/animations";

const _authReducer = createReducer(initialState, 
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.userInfo
        }
    }),
    on(signupSuccess, (state, action) => {
        return {
            ...state,
            user: action.userInfo
        }
    })
);

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}