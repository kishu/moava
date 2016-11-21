import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
// import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
	imports: [CommonModule],
	declarations: [VideoComponent, /*VideoDetailComponent*/],
	exports: []
})

export class VideoModule { }