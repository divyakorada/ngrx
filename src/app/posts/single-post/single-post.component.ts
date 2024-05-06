import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selectors';
import { Observable, filter } from 'rxjs';
import { Post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{

  post: Observable<Post | undefined>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.post = this.store.select(getPostById);
  }

}
