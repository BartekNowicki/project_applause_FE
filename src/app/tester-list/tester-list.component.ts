import { Component, ChangeDetectionStrategy, OnChanges, OnInit } from '@angular/core';  
import { TesterService } from '../tester.service';  
import { Observable, Subject } from "rxjs";  
import { DataService } from '../data.service'; 
import { TesterView } from '../tester';

@Component({
  selector: 'app-tester-list',
  templateUrl: './tester-list.component.html',
  styleUrls: ['./tester-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TesterListComponent implements OnInit {


  constructor(private testerservice:TesterService, private dataService: DataService) { }  
  
  testersArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  // testers: Observable<Tester[]> | undefined;  
  // tester : Tester=new Tester();  
  // testers = [];
  // deleteMessage=false; 
  // testerlist:any;  
  // isupdated = false;      
  
  
  ngOnInit(): void {
      this.dataService.getData("match").subscribe((testerData: any) => {
      testerData.forEach((td: any) => {
        const tv = new TesterView(td.testerId, td.testerId);
        console.log(tv);
        this.testersArray.push(tv);
      })
    });
  }
}
