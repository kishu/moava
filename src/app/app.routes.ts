import { Routes } from '@angular/router';

import { VideosRoutes, VideosComponent } from './videos';
import { VideoRoutes, VideoComponent } from './video'

export const routes: Routes = [
	{
		path: '',
		component: VideosComponent

	},
	...VideosRoutes,
	...VideoRoutes
];