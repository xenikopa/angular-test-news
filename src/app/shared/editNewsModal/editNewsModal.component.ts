import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './editNewsModal.template.html'
})

export class EditNewsModalComponent {
  public newsData: INewsItem =
    this.data;

  public isCloseNameError = false;

  public isCloseAuthorError = false;

  constructor(
    private dialogRef: MatDialogRef<EditNewsModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: INewsItem,
  ) {}

  public onClose(): void {
    this.dialogRef.close('close');
  }

  public onSubmit(form: NgForm): void {
    console.log(form);
      console.log(
        Object.keys(form.form.controls).filter(key => form.form.controls[key].touched)
      );
  }
}
