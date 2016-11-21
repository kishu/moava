import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

	private src: SafeUrl;

	constructor(
		private route: ActivatedRoute,
		private sanitizer: DomSanitizer
	) { }

  ngOnInit() {
	  this.route.params.subscribe(params => {
	  	let id: string;
	  	id = params['id'];

		  this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
		  	`https://www.youtube.com/embed/${id}?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1`
		  );
	  });
  }

}
