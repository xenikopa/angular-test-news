import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { SortNewsPipe } from './common/sortNews.pipe';
import { PageParserPipe } from './common/pageParser.pipe';
import { NewsEditModalComponent } from './common/news-edit-modal/news-edit-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { INewsListService } from './common/interfaces/INewsListService';
import { NewsPaginationComponent } from './news-pagination/news-pagination.component';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    NewsComponent,
    SortNewsPipe,
    PageParserPipe,
    NewsEditModalComponent,
    NewsPaginationComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: NewsComponent
    //   }
    // ]),
    SharedModule,
    FormsModule,
  ],
  providers: [
    { provide: INewsListService, useClass: NewsService }
  ],
  entryComponents: [
    NewsPaginationComponent
  ]
})
export class NewsModule { }
