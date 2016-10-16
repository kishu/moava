import { Input, Component, OnInit } from '@angular/core';
import {SafeStyle, DomSanitizer} from '@angular/platform-browser';
import { IVideo, VideoListService } from '../../shared/index';
import { YoutubeUrl } from '../../shared/helpers/index';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

	@Input() private video: IVideo;
	private backgroundStyle: SafeStyle;

  constructor(
	  private sanitizer: DomSanitizer,
  	private videoListService: VideoListService) { }

  ngOnInit() {
	  const youtubeUrl = new YoutubeUrl(this.video.urls[0]);
	  const thumbnailUrl = youtubeUrl.getThumbnailUrl();

	  this.backgroundStyle = this.sanitizer.
		  bypassSecurityTrustStyle(`url(${thumbnailUrl}) center / cover`);
  }
}
