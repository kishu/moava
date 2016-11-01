import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IVideo, VideoListService } from '../../shared/index';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-video-list',
	templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

	private lastVideo: IVideo;

	private videosCount: number = 0;
	private loading: boolean = false;

	private videos$: Observable<IVideo[]>;
	private videosSubject: Subject<IVideo[]> = new Subject();

  constructor(
	  private videoListService: VideoListService) {

  	this.videos$ = this.videosSubject.asObservable().scan((acc, curr) => {
	  	return acc.concat(curr);
	  });
  }

  ngOnInit() {
	  this.appendVideos();
  }

	private appendVideos(endAt: string = null, limitToLast: number = null) {
		if (!this.loading) {
			this.loading = true;
			this.videoListService.get(endAt, limitToLast).first().subscribe(videos => {
				this.lastVideo = videos.shift();
				this.videosSubject.next(videos.reverse());
				this.videosCount += videos.length;
				this.loading = false;
			});
		}
	}

	private onPlayed(video: IVideo) {
		console.log(video);
	}

	private onMore() {
		if (!this.loading) {
			this.appendVideos(this.lastVideo.$key);
		}
	}

}
