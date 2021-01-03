import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormContainerComponent } from './containers/profile-form-container/profile-form-container.component';
import { Route, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProfileDbService } from './services/profile-db.service';

const routes: Route[] = [
  {
    path: "",
    redirectTo: "edit"
  },
  {
    path: "edit",
    pathMatch: "full",
    component: ProfileFormContainerComponent
  }
]

@NgModule({
  declarations: [ProfileFormContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFirestoreModule,
    MatSnackBarModule
  ],
  providers: [
    ProfileDbService
  ]
})
export class ProfileModule { }
