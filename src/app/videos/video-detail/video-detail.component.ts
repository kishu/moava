import { Input, Component, EventEmitter, OnInit, Output } from '@angular/core';
import {SafeStyle, DomSanitizer} from '@angular/platform-browser';
import { IVideo, UserAgentService, VideoListService } from '../../shared/index';
import { YoutubeUrl } from '../../shared/helpers/index';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

	@Input() private video: IVideo;
	@Output() private onPlayed = new EventEmitter<IVideo>();

	private play: boolean = false;
	private playUrl: string;
	private backgroundStyle: SafeStyle;

  constructor(
	  private sanitizer: DomSanitizer,
	  private userAgentService: UserAgentService,
  	private videoListService: VideoListService) { }

  ngOnInit() {
  	this.playUrl = this.video.urls[0];
	  const youtubeUrl = new YoutubeUrl(this.playUrl);
	  const thumbnailUrl = youtubeUrl.getThumbnailUrl();

	  this.backgroundStyle = this.sanitizer.
		  bypassSecurityTrustStyle(`url(${thumbnailUrl}) center / cover`);
  }

  onPlay(e) {
  	e.preventDefault();
	  this.play = true;
	  // this.onPlayed.emit(this.video);
	  // console.log(this.userAgentService.isMobile);
  }
}
