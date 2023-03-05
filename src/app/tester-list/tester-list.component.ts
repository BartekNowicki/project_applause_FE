import { Component, OnInit } from '@angular/core';  
import { TesterService } from '../tester.service';  
import { Tester } from '../tester';  
import { Observable, Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  

@Component({
  selector: 'app-tester-list',
  templateUrl: './tester-list.component.html',
  styleUrls: ['./tester-list.component.scss']
})
export class TesterListComponent implements OnInit {

  constructor(private testerservice:TesterService) { }  
  
  testersArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  testers: Observable<Tester[]> | undefined;  
  tester : Tester=new Tester();  
  deleteMessage=false;  
  testerlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    // this.isupdated=false;  
    // this.dtOptions = {  
    //   pageLength: 6,  
    //   stateSave:true,  
    //   lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
    //   processing: true  
    // };     
    // this.testerservice.getTesterList().subscribe(data =>{  
    // this.testers =data;  
    // this.dtTrigger.next(void 0);  
    // })

}

}