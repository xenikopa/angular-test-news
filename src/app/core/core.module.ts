import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INewsBackendService } from './backend/news/common/INewsBackendService';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { INotification } from './notification/INotification';
import { NewsBackendService } from './backend/news/news-backend.service';
import { NotificationService } from './notification/notification.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: INewsBackendService, useClass: NewsBackendService },
    { provide: INotification, useClass: NotificationService}
  ]
})

export class CoreModule {}
