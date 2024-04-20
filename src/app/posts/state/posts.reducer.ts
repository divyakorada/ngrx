import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPost } from "./posts.actions";

const _postReducer = createReducer(initialState, 
    on(addPost, (state, action) => {
        console.log('post state', state);
        console.log('post action', action);

        let post = {...action.post}
        post.id = (state.postList.length + 1).toString();
        
        return {
            ...state,
            postList: [...state.postList, post]
        }
    })
);

export function postsReducer(state:any, action:any) {
    return _postReducer(state, action)
}