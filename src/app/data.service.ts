import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TesterView } from './tester';

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
  matchedTesters = [new TesterView(" ", 0)];

  constructor(private http: HttpClient) { }

  getData(type: String) {    
      return this.http.get(`${this.getDataApiUrl}/${type}`);
  }

  getMatchingTestersSortedByExperienceDesc() {
    this.matchedTesters.length = 0;
    const payload = this.selectedCountriesDevices;
    
    this.http.post(`${this.getMatchingTestersApiUrl}`, payload, this.httpOptions).subscribe((response) => {
      Object.entries(response).forEach(entry => this.matchedTesters.push(new TesterView(entry[0], entry[1])));

      this.matchedTesters = this.matchedTesters.sort((a, b) => a.testerExperience && b.testerExperience ? b.testerExperience - a.testerExperience : 0);

    });
  }
}
