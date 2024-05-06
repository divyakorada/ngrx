import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";
import { getCurrentRouteData } from "src/app/store/router/router.selector";
import { RouterStateUrl } from "src/app/store/router/custom-serializer";

export const pOST_STATE_NAME = 'postXyz';
const getPostsState = createFeatureSelector<PostsState>(pOST_STATE_NAME)

export const getPosts = createSelector(getPostsState, state => {
    return state.postList;
});

/*export const getPostById = createSelector(getPostsState, (state: any, props: any) => {
    return state.postList.find((post:any) => post.id === props.id);
});*/

export const getPostById = createSelector(getPosts, getCurrentRouteData, (posts, route: RouterStateUrl) => {
    return posts.find((post) => post.id === route.params['id']);
});
