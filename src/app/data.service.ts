import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 getDataApiUrl = 'http://localhost:8080/api/data';
 getMatchingTestersApiUrl = 'http://localhost:8080/api/data/match';
 httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
  selectedCountriesDevices = {"countries":[""], "devices": [""]};
  matchedTesters = [{"user": 0}];

  constructor(private http: HttpClient) { }

  getData(type: String) {    
      return this.http.get(`${this.getDataApiUrl}/${type}`);
  }

  getMatchingTesters() {
    const payload = this.selectedCountriesDevices;
    
    // return this.http.post(`${this.getMatchingTestersApiUrl}`, payload, this.httpOptions);
    this.http.post(`${this.getMatchingTestersApiUrl}`, payload, this.httpOptions).subscribe((response) => {
      console.log(response);
    });
  }
}


//{"countries":["US", "JP"], "devices": ["Nexus 4", "iPhone 4"]}

//   this.dataService.getMatchingTesters({"countries":["US", "JP"], "devices": ["Nexus 4", "iPhone 4"]}).subscribe((response) => {
    //   console.log(response);
    // });