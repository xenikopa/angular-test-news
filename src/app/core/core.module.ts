import { NgModule } from '@angular/core';
import { NewsBackendService } from './newsBackend/newsBackend.service';
import { CommonModule } from '@angular/common';
import { INewsBackendService } from './newsBackend/common/INewsBackendService';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './notificationService/notification.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { INotification } from './notificationService/INotification';
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
