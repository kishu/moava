import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class VideoListService {
	private limitToLast: number = 60;
  constructor(private af: AngularFire) { }

  get(endAt: string = null, limitToLast): FirebaseListObservable<any[]> {
  	if (!limitToLast) {
  		limitToLast = this.limitToLast;
	  }

		return this.af.database.list('/videos', {
			query: {
				endAt: endAt,
				limitToLast: limitToLast + 1,
				orderByKey: true
			}
		});
  }
}
