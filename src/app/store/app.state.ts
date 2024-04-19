import { CounterState } from "../counter/state/counter.state";
import { PostsState } from "../posts/state/posts.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { postsReducer } from "../posts/state/posts.reducer";

export interface AppState {
    countXyz: CounterState,
    postXyz: PostsState
}

export const appReducer = {
    countXyz: counterReducer,
    postXyz: postsReducer
} 