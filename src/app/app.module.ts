import { HttpModule } from '@angular/http';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { ApiService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

