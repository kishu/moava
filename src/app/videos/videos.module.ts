import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { VideoListService } from '../shared/index';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
	imports: [CommonModule],
	declarations: [VideosComponent, VideoListComponent, VideoDetailComponent],
	exports: [VideosComponent],
	providers: [VideoListService]
})

export class VideosModule { }