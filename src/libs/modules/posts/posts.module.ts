import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostsContainerComponent } from './containers/list-posts-container/list-posts-container.component';
import { Route, RouterModule } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostsDbService } from './services/posts-db.service';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { MyPostsContainerComponent } from './containers/my-posts-container/my-posts-container.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { StoreModule } from '@ngrx/store';
import * as fromPosts from './+state/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './+state/posts.effects';

const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    component: ListPostsContainerComponent
  },
  {
    path: "my-posts",
    pathMatch: "full",
    component: MyPostsContainerComponent
  }
]


@NgModule({
  declarations: [ListPostsContainerComponent, ListPostsComponent, MyPostsContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [
    PostsDbService
  ]
})
export class PostsModule { }
