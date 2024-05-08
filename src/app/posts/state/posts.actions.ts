import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";


export const ADD_POST_ACTION = '[post page] add post';
export const ADD_POST_SUCCESS = '[post page] add post success'; //API
export const UPDATE_POST_ACTION = '[post page] update post';
export const UPDATE_POST_SUCCESS = '[post page] update post success'; //API
export const DELETE_POST_ACTION = '[post page] delete post';
export const DELETE_POST_SUCCESS = '[post page] delete post success'; //API

export const LOAD_POSTS = '[post page] load posts';
export const LOAD_POSTS_SUCCESS = '[post page] load posts success';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post}> ());
export const addPostSuccess = createAction(ADD_POST_SUCCESS, props<{ addPost: Post }>()); //API
export const updatePost = createAction(UPDATE_POST_ACTION, props<{ updatedPost: Post}>());
export const updatePostSuccess = createAction(UPDATE_POST_SUCCESS, props<{ post: Update<Post> }>()); //API
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id : any}>());
export const deletePostSuccess = createAction(DELETE_POST_SUCCESS, props<{ id: any }>()) //API
export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{ loadPosts: Post[] }>());


// Dummy action
export const dummyAction = createAction('[dummy action]');