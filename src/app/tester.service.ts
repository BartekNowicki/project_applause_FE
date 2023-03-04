import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class TesterService {

  private baseUrl = 'http://localhost:8080/api/';  

  constructor( private http:HttpClient ) {}

    getTesterList(): Observable<any> {  
      return this.http.get(`${this.baseUrl}`+'tester-list');  
    }  
  
    getTester(id: number): Observable<Object> {  
      return this.http.get(`${this.baseUrl}/tester/${id}`);  
    }  
  
}
