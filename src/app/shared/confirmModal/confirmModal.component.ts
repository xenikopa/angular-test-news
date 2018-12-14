import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IConfirmData } from './IConfirmData';

@Component({
  templateUrl: './confirmModal.template.html',
  styleUrls: [
    './confirmModal.style.sass'
  ]
})

class ConfirmModalComponent {
  public confirmData: IConfirmData =
    this.data;
  constructor(
    private dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: IConfirmData
  ) {}

  public onClickConfirm(): void {
    this.dialogRef.close(true);
  }

  public onClickDismiss(): void {
    this.dialogRef.close(false);
  }
}

export {ConfirmModalComponent};
