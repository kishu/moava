import { Routes } from '@angular/router';

import { VideosRoutes, VideosComponent } from './videos/index';

export const routes: Routes = [
	{
		path: '',
		component: VideosComponent

	},
	...VideosRoutes
];