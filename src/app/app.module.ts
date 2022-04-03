import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';
import { SharedModule } from './shared/shared.module';
registerLocaleData(localeCl, 'cl')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-w7nn53is.us.auth0.com',
      //LOCAL
      clientId: 'vxElN6FhcyH3yVESviojk6diYmR2fi4J',
      //GITHUB PAGES: https://github.com/MickHerbivore/Gautama
      // clientId: '3YFoQZdxaYs3Cj3QCZwEsdnYCCfyiQMp',      
      // redirectUri: 'https://mickherbivore.github.io/Gautama/',
    }),
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
