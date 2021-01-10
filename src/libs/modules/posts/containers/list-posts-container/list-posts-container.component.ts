import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter, switchMap, takeWhile } from 'rxjs/operators';
import { PostsDbService } from '../../services/posts-db.service';

@Component({
  selector: 'app-list-posts-container',
  templateUrl: './list-posts-container.component.html',
  styleUrls: ['./list-posts-container.component.scss']
})
export class ListPostsContainerComponent implements OnInit {

  subscriptions: Subscription = new Subscription();

  posts = [];
  filteredProfiles;

  nameFormControl = new FormControl(null);

  getPostsSubject = new Subject();

  constructor(private postsDbService: PostsDbService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.postsDbService.getPosts().subscribe((posts) => {
        this.posts = posts;
      })

    )

    this.subscriptions.add(
      this.getPostsSubject.asObservable().pipe(
        switchMap((userId) => {
          return this.postsDbService.getPostsFromUser(userId)
        })
      ).subscribe((posts) => {
        this.posts = posts;
      })
    )

    this.filteredProfiles = this.nameFormControl.valueChanges.pipe(
      filter(value => typeof(value) == "string"),
      debounceTime(400),
      switchMap((str) => {
        return this.postsDbService.getProfileByNameStartWithStr(str);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  handleAddButtonClicked() {
    this.router.navigate(['my-posts'], { relativeTo: this.route })
  }

  getPosts(user) {
    console.log(user);
    this.getPostsSubject.next(user.userId);
  }

  displayFn(user) {
    return user && user.name ? user.name : '';
  }

}
