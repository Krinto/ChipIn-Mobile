import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { GroupPage } from '../pages/group/group';
import { MyGroupsPage } from '../pages/my-groups/my-groups';
import { SearchGroupsPage } from '../pages/search-groups/search-groups';
import { ProfilePage } from '../pages/profile/profile';
import { AuthService } from '../providers/auth-service';
import { GroupService } from '../providers/group-service'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    GroupPage,
    MyGroupsPage,
    SearchGroupsPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    GroupPage,
    MyGroupsPage,
    SearchGroupsPage,
    ProfilePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    Events,
    AuthService,
    GroupService
  ]
})
export class AppModule {}
