import { Input, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
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

	private youtubeId: string;
	private backgroundStyle: SafeStyle;

  constructor(
	  private router: Router,
		private sanitizer: DomSanitizer,
	  private userAgentService: UserAgentService,
  	private videoListService: VideoListService) { }

  ngOnInit() {
  	if (this.video.urls.length > 0) {
		  const youtubeUrl = new YoutubeUrl(this.video.urls[0]);
		  const thumbnailUrl = youtubeUrl.getThumbnailUrl();

		  this.youtubeId = youtubeUrl.getId();
		  this.backgroundStyle = this.sanitizer.bypassSecurityTrustStyle(`url(${thumbnailUrl}) center / cover`);
	  }
  }

  goDetail(e) {
  	e.preventDefault();
	  this.router.navigate(['/videos', this.youtubeId]);
  }

}
