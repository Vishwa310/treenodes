import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { IndianPipe } from './indian.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TreeviewComponent,
    IndianPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
