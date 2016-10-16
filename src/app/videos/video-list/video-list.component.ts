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
	private videos$: Observable<IVideo[]>;
	private videosSubject: Subject<IVideo[]> = new Subject();

  constructor(private videoListService: VideoListService) {
	  this.videos$ = this.videosSubject.asObservable().scan((acc, curr) => {
	  	return acc.concat(curr);
	  });
  }

  ngOnInit() {
	  this.getVideos();
  }

	private getVideos(endAt: string = null, limitToLast: number = null) {
		this.videoListService.get(endAt, limitToLast).first().subscribe(videos => {
			this.lastVideo = videos.shift();
			this.videosSubject.next(videos.reverse());
		});
	}

	private getNextVideos() {
		console.log("getNextVideos");
		this.getVideos(this.lastVideo.$key);
	}

}
