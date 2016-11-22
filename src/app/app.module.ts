import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../firebase.config';

import { VideosModule } from './videos/videos.module';
import { VideoModule } from './video/video.module';
import { HeaderComponent, DrawerComponent } from './shared/index';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DrawerComponent],
  imports: [
    BrowserModule,
    //FormsModule,
    //HttpModule,
	  RouterModule.forRoot(routes),
	  AngularFireModule.initializeApp(firebaseConfig),
	  VideosModule,
	  VideoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
