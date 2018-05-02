import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {FormsModule} from "@angular/forms";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CopyrightComponent} from "../components/copyright/copyright";
import {AuthenticationCodeProvider} from "../providers/authentication-code/authentication-code";
import {ForgotPasswordPage} from "../pages/ForgotPassword/ForgotPassword";
import { ValidationUtilsProvider } from '../providers/validation-utils/validation-utils';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CopyrightComponent,
    ForgotPasswordPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'返回',
      backButtonIcon: 'arrow-back'
    }),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ForgotPasswordPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider,
    AuthenticationCodeProvider,
    ValidationUtilsProvider

  ]
})
export class AppModule {}
