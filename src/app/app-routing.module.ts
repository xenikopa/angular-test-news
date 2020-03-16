import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './modules/news/news.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NewsComponent
      }
    ]),
  ],
})

export class AppRoutingModule { }
