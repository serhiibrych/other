import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositorycardComponent } from './components/repositorycard/repositorycard.component';
import { SearchwidgetComponent } from './components/searchwidget/searchwidget.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    RepositorycardComponent,
    SearchwidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
