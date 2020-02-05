import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Inspeyered';
  query: string ="";
  jsonResults: any;
  page: number = 1;
  inspirationList: Array<any>;

  constructor(private http: HttpClient) {

    this.inspirationList = [];

    if (window.localStorage.getItem("inspirationList") === null) {
    window.localStorage.setItem("inspirationList", JSON.stringify(this.inspirationList));
  }
    var storageData = window.localStorage.getItem("inspirationList");
    if (storageData != null) {
      this.inspirationList = JSON.parse(storageData);
    }

  }

  addToList(name, urls): void{
    var newItem = {name :name, url :urls};
    this.inspirationList.push(newItem);
    window.localStorage.setItem("inspirationList", JSON.stringify(this.inspirationList));
    }

    removeItem (index: number) {
      this.inspirationList.splice(index, 1);
      window.localStorage.setItem("inspirationList", JSON.stringify(this.inspirationList));
    }

  nextPage(){
    this.page = this.page +1;
    this.getPhotos(this.query);
    }
  previousPage(){
   if (this.page > 1){
    this.page = this.page - 1;
    this.getPhotos(this.query);
      }
    }
    clearLocalStorage(){
      window.localStorage.clear();
      location.reload();
    }

//The API call  was suppose to be in a service, but there were some issues
//I chose to include the API call into the main component file instead.
  getPhotos(query:string){

  	let API_KEY: string = "4ed01fdd5a87047e800a3278923a1c662c364c174a52db1d0e95ef3ee455373e";
		let url: string = `https://api.unsplash.com/search/photos?page=${this.page}&query=${this.query}&per_page=12&client_id=${API_KEY}`;

    return this.http.get(url)
    .subscribe(data => { this.jsonResults = data['results'];
      console.log(this.jsonResults);
            });

}
}
