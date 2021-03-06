import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserContainerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
