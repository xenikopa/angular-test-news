import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';

@Component({
  templateUrl: './editNewsModal.template.html'
})

export class EditNewsModalComponent {
  //#region public values
  public newsData: INewsItem =
    this.data;

  public isCloseNameError = false;

  public isCloseAuthorError = false;
  //#endregion
  constructor(
    private dialogRef: MatDialogRef<EditNewsModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: INewsItem,
  ) {}

  public onClose(): void {
    this.dialogRef.close(null);
  }

  public onSubmit(form: INewsItem): void {
    const result: INewsItem = {
      ...form,
      idArticle: this.newsData.idArticle,
      datePublication: this.newsData.datePublication
    };

    this.dialogRef.close(result);
  }
}
