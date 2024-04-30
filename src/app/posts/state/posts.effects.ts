import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess, updatePost, updatePostSuccess } from "./posts.actions";
import { map, mergeMap, switchMap } from "rxjs";

@Injectable()
export class PostsEffects {

    constructor(private actions$: Actions, private postsService: PostsService) {}

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPosts),mergeMap((action => {
                return this.postsService.getPosts().pipe(
                    map((loadPosts) => {
                        return loadPostsSuccess({ loadPosts });
                    })
                )
            }))
        )
    });

    addPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPost),mergeMap((action) => {
                return this.postsService.addPost(action.post).pipe(map((data) => {
                    const addPost = { ...action.post, id: data.name };
                    return addPostSuccess({  addPost });
                }))
            })
        )
    });

    updatePost$ = createEffect(() => {
        return this.actions$.pipe(ofType(updatePost), switchMap((action) => {
            return this.postsService.updatePost(action.updatedPost).pipe(map((data) => {
                return updatePostSuccess({ post: action.updatedPost})
            }))
        }))
    });

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(ofType(deletePost), switchMap((action) => {
            return this.postsService.deletePost(action.id).pipe(map((data) => {
                return deletePostSuccess({ id: action.id })
            }))
        }))
    }); 
}