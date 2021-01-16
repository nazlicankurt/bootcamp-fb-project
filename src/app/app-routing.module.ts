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
  },
  {
    path: 'posts',
    loadChildren: () => import('../libs/modules/posts/posts.module').then(m => m.PostsModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'css',
    loadChildren: () => import('../libs/modules/css-example/css-example.module').then(m => m.CssExampleModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
