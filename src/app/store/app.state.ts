// import { CounterState } from "../counter/state/counter.state";
// import { PostsState } from "../posts/state/posts.state";
// import { counterReducer } from "../counter/state/counter.reducer";
// import { postsReducer } from "../posts/state/posts.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";
import { sharedReducer } from "./shared/shared.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { AuthReducer } from "../auth/state/auth.reducer";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";

export interface AppState {
    // countXyz: CounterState,
    // postXyz: PostsState
    [SHARED_STATE_NAME]: SharedState;
    [AUTH_STATE_NAME]: AuthState;
    router: RouterReducerState
}

export const appReducer = {
    // countXyz: counterReducer,
    // postXyz: postsReducer
    [SHARED_STATE_NAME]: sharedReducer,
    [AUTH_STATE_NAME]: AuthReducer,
    router: routerReducer
} 