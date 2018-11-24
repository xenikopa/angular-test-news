import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsComponent } from 'src/app/router/news/news.component';
import { ActivityFilterPipe } from './common/activityFilter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { SortNewsPipe } from './common/sortNews.pipe';
import { FormsModule } from '@angular/forms';
import { INewsListService } from './common/INewsListService';
import { NewsListService } from './newsList.service';
import { NewsListComponent } from './newsListComponent/newsList.component';
import { NewsListPaginationComponent } from './newsListPagination/newsListPagination.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    NewsListPaginationComponent,
    NewsComponent,
    NewsListComponent,
    ActivityFilterPipe,
    SortNewsPipe
  ],
  providers: [
    { provide: INewsListService, useClass: NewsListService }
  ]
})

export class NewsListModule {}
