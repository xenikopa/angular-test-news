import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsListModule } from 'src/app/modules/newsList/newsList.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: NewsComponent,
    }]),
    NewsListModule
  ],
})
export class NewsModule { }
