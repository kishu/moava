import { Routes } from '@angular/router';

import { VideosRoutes, VideoListComponent } from './videos/index';

export const routes: Routes = [
	{
		path: '',
		component: VideoListComponent

	},
	...VideosRoutes
];