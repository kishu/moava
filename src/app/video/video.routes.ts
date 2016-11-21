import { Route } from '@angular/router';
import { VideoComponent } from './video.component';

export const VideoRoutes: Route[] = [
	{
		path: 'videos/:id',
		component: VideoComponent
	}
];