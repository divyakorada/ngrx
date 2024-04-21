import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selectors';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{

  postsData: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.postsData = this.store.select(getPosts);
  } 

  onDeletePost(id: any) {
    if(confirm(`Are you sure you want to delete?`)) {
      this.store.dispatch(deletePost({ id }));
    }
  }

}
