import { Component } from '@angular/core';
import { InfiniteScrollService } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private infiniteScrollService: InfiniteScrollService) { }

	private scrolled() {
		this.infiniteScrollService.scrolled();
	}
}
