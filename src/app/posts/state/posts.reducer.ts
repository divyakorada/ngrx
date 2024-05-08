import { createReducer, on } from "@ngrx/store"
import { initialState, postsAdapter } from "./posts.state"
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess } from "./posts.actions";

const _postReducer = createReducer(initialState, 
    on(addPostSuccess, (state, action) => {
        return postsAdapter.addOne(action.addPost, state);
    }),
    on(updatePostSuccess, (state, action) => {
       return postsAdapter.updateOne(action.post, state);
    }),
    on(deletePostSuccess, (state, action) => {
       return postsAdapter.removeOne(action.id, state);
    }),
    on(loadPostsSuccess, (state, action)=> {
       return postsAdapter.setAll(action.loadPosts, state);
    })
);

export function postsReducer(state:any, action:any) {
    return _postReducer(state, action)
}