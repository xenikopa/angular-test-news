import { Component, OnInit, Optional, Inject } from '@angular/core';
import { IConfirmData } from './IConfirmData';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.sass']
})
export class ConfirmModalComponent implements OnInit {
  public confirmData: IConfirmData = this.data;

  constructor(
    private dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: IConfirmData
  ) { }

  ngOnInit(): void {
  }

  public onClickConfirm(): void {
    this.dialogRef.close(true);
  }

  public onClickDismiss(): void {
    this.dialogRef.close(false);
  }

}
