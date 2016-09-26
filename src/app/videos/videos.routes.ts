import { Route } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { VideoListComponent } from './video-list/video-list.component';

export const VideosRoutes: Route[] = [
	{
		path: 'video',
		component: VideoComponent
	},
	{
		path: 'videos',
		component: VideoListComponent
	}
];