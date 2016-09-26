import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
	imports: [CommonModule],
	declarations: [VideoComponent, VideoListComponent],
	exports: [VideoComponent, VideoListComponent]
})

export class VideosModule { }