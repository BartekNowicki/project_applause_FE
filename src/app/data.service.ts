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

  constructor(private http: HttpClient) { }

  getData(type: String) {
      return this.http.get(`${this.getDataApiUrl}/${type}`);
  }

  getMatchingTesters(payload: any) {
      return this.http.post(`${this.getMatchingTestersApiUrl}`, payload, this.httpOptions);
  }
}

