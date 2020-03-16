export interface INewsItem {
  idArticle: number;
  name: string;
  datePublication: Date;
  author: string;
  active: boolean;
  previewText?: string;
}
