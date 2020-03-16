import { Injectable } from '@angular/core';
import { IAppContainerService } from './common/IAppContainerService';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { IConfirmData } from '../shared/confirm-modal/IConfirmData';
import { ConfirmModalComponent } from '../shared/confirm-modal/confirm-modal.component';

@Injectable()
export class AppService extends IAppContainerService {
  public isAdminLogin$: Subject<boolean> =
    new BehaviorSubject(false);

  public isEditMode$: Subject<boolean> =
    new BehaviorSubject(false);
  constructor(
    private confirm: MatDialog
  ) {
    super();
  }

  public onLoginAdmin(): void {
    this.isAdminLogin$.next(true);
  }

  public onLogoutAdmin(): void {
    this.isAdminLogin$.next(false);
  }

  public onChangeAppMode(isEdit: boolean): void {
    this.isEditMode$.next(isEdit);
  }

  public openConfirmModal(data: IConfirmData): Observable<boolean> {
    return this.confirm.open(ConfirmModalComponent, { data }).afterClosed();
  }
}
