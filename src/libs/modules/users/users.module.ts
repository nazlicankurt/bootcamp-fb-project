import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersContainerComponent } from './containers/list-users-container/list-users-container.component';
import { Route, RouterModule } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatListModule } from '@angular/material/list';

const routes: Route[] = [
  {
    path: "",
    redirectTo: "users-list"
  },
  {
    path: "users-list",
    pathMatch: "full",
    component: ListUsersContainerComponent
  }
]


@NgModule({
  declarations: [ListUsersContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFirestoreModule,
    MatListModule
  ]
})
export class UsersModule { }
