import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BranchComponent } from './branch/branch.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'branch',
    children: [
      {
        path: ':name',
        component: BranchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
