import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../firebase.config';

import { VideosModule } from './videos/videos.module';
import { HeaderComponent, DrawerComponent } from './shared/index';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DrawerComponent],
  imports: [
    BrowserModule,
    //FormsModule,
    //HttpModule
	  RouterModule.forRoot(routes),
	  AngularFireModule.initializeApp(firebaseConfig),
	  VideosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
