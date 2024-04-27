import { createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.state"
import { autoLogout, loginSuccess, signupSuccess } from "./auth.actions";
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
    }),
    on(autoLogout, (state) => {
        return {
            ...state,
            user: null
        }
    })
);

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}