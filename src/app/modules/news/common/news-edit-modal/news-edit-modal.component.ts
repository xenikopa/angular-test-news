import { Component, OnInit, Optional, Inject } from '@angular/core';
import { INewsItem } from 'src/app/core/backend/news/common/INewsItem';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './news-edit-modal.component.html',
})
export class NewsEditModalComponent implements OnInit {
  //#region public values
  public newsData: INewsItem = this.data;

  public isCloseNameError = false;

  public isCloseAuthorError = false;
  //#endregion
  constructor(
    private dialogRef: MatDialogRef<NewsEditModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: INewsItem,
  ) { }

  ngOnInit(): void {
  }
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
