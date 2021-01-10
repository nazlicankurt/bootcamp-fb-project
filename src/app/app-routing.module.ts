import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
import { LoginContainerComponent } from './login-container/login-container.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['profile']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginContainerComponent,
    ...canActivate(redirectLoggedInToProfile)
  },
  {
    path: 'profile',
    loadChildren: () => import('../libs/modules/profile/profile.module').then(m => m.ProfileModule),
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
