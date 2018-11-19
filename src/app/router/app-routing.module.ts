import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IAppContainerService } from './common/IAppContainerService';
import { AppContainerService } from './appContainer.service';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: IAppContainerService, useClass: AppContainerService }
  ]
})

export class AppRoutingModule { }
