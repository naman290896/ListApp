import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  collegeList : any;
  allColleges : any;
  ngOnInit() {
    this.httpService.get('./assets/colleges.json').subscribe(
      (data:any) =>{
        this.allColleges = data.colleges;
        this.collegeList = data.colleges.slice(0,10);
      }
    )
  }
  onScroll(){
    if(this.collegeList.length < this.allColleges.length){  
      let len = this.collegeList.length;
      for(let i = len; i <= len+9; i++){
        this.collegeList.push(this.allColleges[i]);
      }
    }
  }

}
