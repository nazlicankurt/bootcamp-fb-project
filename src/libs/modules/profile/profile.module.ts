import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormContainerComponent } from './containers/profile-form-container/profile-form-container.component';
import { Route, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
