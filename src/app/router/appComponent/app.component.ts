import { Component } from '@angular/core';
import { IAppContainerService } from '../common/IAppContainerService';
import { Observable, Subject } from 'rxjs';
import { NotificationService } from 'src/app/core/notificationService/notification.service';
import { INotification } from 'src/app/core/notificationService/INotification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    'app.component.sass'
  ]
})
export class AppComponent {
  public isLogin$: Observable<boolean> =
    this.appService.isAdminLogin$;

  constructor(
    private appService: IAppContainerService,
    private notify: INotification
  ) {}

  public onClickLogin(): void {
    this.appService.onLoginAdmin();
  }

  public onClickLogout(): void {
    this.appService.onLogoutAdmin();
  }

  public onChangeMode(checked: boolean): void {
    this.appService.onChangeAppMode(checked);

    const notifyMessage: string =
      'Режим редактирования ' + (checked ? 'включен' : 'выключен');

    this.notify.openNotification(notifyMessage);
  }
}
