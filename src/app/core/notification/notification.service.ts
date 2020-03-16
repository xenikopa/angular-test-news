import { Injectable } from '@angular/core';
import { INotification } from './INotification';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService extends INotification {
  constructor(public notificationBar: MatSnackBar) {
    super();
  }

  public openNotification(message: string, action?: string): void {
    this.notificationBar.open(message, action, {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
