import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";


export const ADD_POST_ACTION = '[post page] add post';
export const UPDATE_POST_ACTION = '[post page] update post';
export const DELETE_POST_ACTION = '[post page] delete post';

export const LOAD_POSTS = '[post page] load posts';
export const LOAD_POSTS_SUCCESS = '[post page] load posts success';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post}> ());
export const updatePost = createAction(UPDATE_POST_ACTION, props<{ updatedPost: Post}>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id : any}>());
export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{ loadPosts: Post[] }>());