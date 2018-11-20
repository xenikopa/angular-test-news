import { Component } from '@angular/core';
import { IAppContainerService } from '../common/IAppContainerService';
import { Observable, Subject } from 'rxjs';

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

  public isEditMode$: Subject<boolean> =
    new Subject();

  constructor(
    private appService: IAppContainerService,
  ) {}

  public onClickLogin(): void {
    this.appService.onLoginAdmin();
  }

  public onClickLogout(): void {
    this.appService.onLogoutAdmin();
  }

  public onChangeMode(checked: boolean): void {
    this.isEditMode$.next(checked);
  }
}
