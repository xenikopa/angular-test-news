import { NgModule } from '@angular/core';
import { NewsBackendService } from './newsBackend/newsBackend.service';
import { CommonModule } from '@angular/common';
import { INewsBackendService } from './newsBackend/common/INewsBackendService';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: INewsBackendService, useClass: NewsBackendService }
  ]
})

export class CoreModule {}
