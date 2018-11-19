import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopNewsComponent } from 'src/app/modules/topNews/topNews.component';
import { NewsListComponent } from 'src/app/modules/newsList/newsList.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NewsComponent,
    }]),
  ],
  entryComponents: [
    TopNewsComponent,
  ],
  declarations: [
    TopNewsComponent,
    NewsComponent,
    NewsListComponent
  ],
})
export class NewsModule { }
