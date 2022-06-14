import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoPageComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
