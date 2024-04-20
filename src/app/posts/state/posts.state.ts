import { Post } from "src/app/models/posts.model";

export interface PostsState {
    postList: Post[];
}
export const initialState: PostsState = {
    postList: [
       { id:'1', title: 'Sample Title 1', description: 'Sample Description'},
       { id:'2', title: 'Sample Title 2', description: 'Sample Description'},
       { id:'3', title: 'Sample Title 3', description: 'Sample Description'}
    ]
}