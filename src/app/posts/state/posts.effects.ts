import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addPostSuccess, loadPosts, loadPostsSuccess } from "./posts.actions";
import { map, mergeMap } from "rxjs";

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
    })
}