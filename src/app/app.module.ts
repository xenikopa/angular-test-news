import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './router/appComponent/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RouterModule.forRoot([{
        path: '',
        component: AppComponent,
        loadChildren: './router/app-routing.module#AppRoutingModule'
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
