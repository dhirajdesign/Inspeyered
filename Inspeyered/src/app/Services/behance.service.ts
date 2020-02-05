import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse} from '@angular/common/http';



import 'rxjs/add/operator/map';


@Injectable()
export class unSplashService {

response: any;
  constructor(private http: HttpClient) { }

  getPhotos(query: string){

  	let API_KEY: string = "4ed01fdd5a87047e800a3278923a1c662c364c174a52db1d0e95ef3ee455373e";
		let url: string = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${API_KEY}`;

    return this.http.get(url);

  }

}
