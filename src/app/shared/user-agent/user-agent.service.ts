import { Injectable } from '@angular/core';
import * as useragent from 'useragent';

@Injectable()
export class UserAgentService {
	private _agent: any;
	private _isMobile: boolean = false;

	constructor() {
		this._agent = useragent.parse(window.navigator.userAgent);
		let osFamily = this._agent.os.family;

		if (osFamily === "iOS" || osFamily === "Android") {
			this._isMobile = true;
		}
  }

  get agent() {
  	return this._agent;
  }

  get isMobile() {
  	return this._isMobile;
  }

}
