import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { VideosComponent } from './videos.component';
import { VideoListService } from '../shared/index';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
	imports: [CommonModule, InfiniteScrollModule],
	declarations: [VideosComponent, VideoListComponent, VideoDetailComponent],
	exports: [],
	providers: [VideoListService]
})

export class VideosModule { }