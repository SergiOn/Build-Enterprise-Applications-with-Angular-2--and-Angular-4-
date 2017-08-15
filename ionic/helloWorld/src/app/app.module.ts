import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyAppComponent } from './app.component';
import { HomePageComponent } from '../pages/home/home';
import { ItemDetailsComponent } from '../pages/item-details/item-details';

@NgModule({
  declarations: [
    MyAppComponent,
    HomePageComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    HomePageComponent,
    ItemDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
