import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsModule } from './modules/news/news.module';
import { IAppContainerService } from './app-component/common/IAppContainerService';
import { AppService } from './app-component/app.service';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NewsModule,
    RouterModule,
  ],
  providers: [
    { provide: IAppContainerService, useClass: AppService },
    { provide: APP_BASE_HREF, useValue: environment.baseHref }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
