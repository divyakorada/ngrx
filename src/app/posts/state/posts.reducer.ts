import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPost, addPostSuccess, deletePost, loadPostsSuccess, updatePost } from "./posts.actions";

const _postReducer = createReducer(initialState, 
    on(addPostSuccess, (state, action) => {
        let post = {...action.addPost}
        return {
            ...state,
            postList: [...state.postList, post]
        }
    }),
    on(updatePost, (state, action) => {
        
        const editedPost = state.postList.map(post => {
            return action.updatedPost.id === post.id ? action.updatedPost : post;
        });

        return {
            ...state,
            postList: editedPost
        }
    }),
    on(deletePost, (state, action) => {

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