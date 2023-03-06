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
export class TesterListComponent {
  testersArray: TesterView[] = [];
  
  constructor(public dataService: DataService) {}  
  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
    
}
