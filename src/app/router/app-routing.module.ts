import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  }, {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class AppRoutingModule { }
