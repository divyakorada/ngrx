import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditpostComponent } from './editpost/editpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';
import { pOST_STATE_NAME } from './state/posts.selectors';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/posts.effects';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditpostComponent },
    ],
  },
];

@NgModule({
  declarations: [PostsListComponent, AddPostComponent, EditpostComponent, SinglePostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(pOST_STATE_NAME, postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ],
})
export class PostsModule {}
