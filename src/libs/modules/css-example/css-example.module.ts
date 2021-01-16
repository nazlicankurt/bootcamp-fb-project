import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePageContainerComponent } from './containers/example-page-container/example-page-container.component';
import { SimpleLoaderComponent } from './components/simple-loader/simple-loader.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    redirectTo: "example"
  },
  {
    path: "example",
    pathMatch: "full",
    component: ExamplePageContainerComponent
  }
]



@NgModule({
  declarations: [ExamplePageContainerComponent, SimpleLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CssExampleModule { }
