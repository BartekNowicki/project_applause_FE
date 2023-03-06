import { Component, ChangeDetectionStrategy, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';  
import { Subject } from "rxjs";  
import { DataService } from '../data.service'; 
import { TesterView } from '../tester';

@Component({
  selector: 'app-tester-list',
  templateUrl: './tester-list.component.html',
  styleUrls: ['./tester-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TesterListComponent implements OnInit, OnChanges {
  testersArray: TesterView[] = [];
  
  constructor(public dataService: DataService) {}  
  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
     
  ngOnInit(): void {
  }

  ngOnChanges(element: SimpleChanges){
    this.dataService.getData("match").subscribe((testerData: any) => {
      testerData.forEach((td: any) => {
        const tv = new TesterView(td.testerId, td.testerId);
        this.testersArray.push(tv)
      })});
  }
}
