import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostsDbService } from '../../services/posts-db.service';

@Component({
  selector: 'app-my-posts-container',
  templateUrl: './my-posts-container.component.html',
  styleUrls: ['./my-posts-container.component.scss']
})
export class MyPostsContainerComponent implements OnInit {

  myPosts = [];

  postForm = this.formBuilder.group({
    title: this.formBuilder.control(null, [Validators.required]),
    body: this.formBuilder.control(null, [Validators.required])
  })

  subscriptions: Subscription = new Subscription();

  constructor(private postsDbService: PostsDbService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.postsDbService.getMyPosts().subscribe((posts) => {
        this.myPosts = posts;
      })

    )
  }

  handleAddClicked() {
    this.postsDbService.addPost(this.postForm.value);
  }

}
