import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess } from "./posts.actions";

const _postReducer = createReducer(initialState, 
    on(addPostSuccess, (state, action) => {
        let post = {...action.addPost}
        return {
            ...state,
            postList: [...state.postList, post]
        }
    }),
    on(updatePostSuccess, (state, action) => {
        const editedPost = state.postList.map(post => {
            return action.post.id === post.id ? action.post : post;
        });
        return {
            ...state,
            postList: editedPost
        }
    }),
    on(deletePostSuccess, (state, action) => {
        const updatedPosts = state.postList.filter(e => e.id !== action.id); 
        return {
            ...state,
            postList: updatedPosts
        }
    }),
    on(loadPostsSuccess, (state, action)=> {
        return {
            ...state,
            postList: action.loadPosts
        }
    })
);

export function postsReducer(state:any, action:any) {
    return _postReducer(state, action)
}