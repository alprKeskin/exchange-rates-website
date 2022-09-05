import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { WalletPageComponent } from './components/wallet-page/wallet-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'wallet-page', component: WalletPageComponent },
  // { path: '**', component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    WalletPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
