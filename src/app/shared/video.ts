export interface IVideo {
	$key: string;
	id: string;
	title: string;
	body: number;
	rawBody: string;
	created: Date;
	origin: string;
	hasVideo: boolean;
	url: string;
	urls: string[];
}

