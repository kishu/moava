export class  YoutubeUrl {

	private url: string;
	private id: string;

	constructor(url) {
		this.url = url;
		const match = this.url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);

		this.id = (match && match[7].length==11) ?  match[7] : null;
	}

	getId(): string {
		return this.id;
	}

	getThumbnailUrl(): string {
		return `https://img.youtube.com/vi/${this.id}/0.jpg`;
	}

	getContentsUrl(): string {
		return `https://www.youtube.com/watch?v=${this.id}&app=desktop`;
	}

	getEmbededUrl(): string {
		return `https://youtube.com/embed/${this.id}?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1&amp;app=desktop`;
	}

}
