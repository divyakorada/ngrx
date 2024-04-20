import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

const getPostsState = createFeatureSelector<PostsState>('postXyz')

export const getPosts = createSelector(getPostsState, state => {
    return state.postList;
});

export const getPostById = createSelector(getPostsState, (state: any, props: any) => {
    return state.postList.find((post:any) => post.id === props.id);
});
