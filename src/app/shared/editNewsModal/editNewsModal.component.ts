import { Component, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { INewsItem } from "src/app/core/newsBackend/common/INewsItem";

@Component({
  templateUrl: './editNewsModal.template.html'
})

export class EditNewsModalComponent {
  public newsData: INewsItem = 
    this.data;
  constructor(
    private dialogRef: MatDialogRef<EditNewsModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: INewsItem,
  ){}

  public onClose(): void {
    this.dialogRef.close('close');
  }

  public onChangeActive(isActive: boolean): void {
    console.log(isActive)
  }
}