import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState, postsAdapter } from "./posts.state";
import { getCurrentRouteData } from "src/app/store/router/router.selector";
import { RouterStateUrl } from "src/app/store/router/custom-serializer";

export const pOST_STATE_NAME = 'postXyz';
const getPostsState = createFeatureSelector<PostsState>(pOST_STATE_NAME);

export const postsSelectors = postsAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(getPostsState, postsSelectors.selectEntities);


export const getPostById = createSelector(
getPostEntities,
  getCurrentRouteData,
  (posts, route: RouterStateUrl) => {
    return posts[route.params['id']];
  }
);
