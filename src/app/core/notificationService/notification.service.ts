import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { INotification } from './INotification';

@Injectable()
class NotificationService extends INotification {
  constructor(
    public notificationBar: MatSnackBar
  ) {
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

export { NotificationService };
