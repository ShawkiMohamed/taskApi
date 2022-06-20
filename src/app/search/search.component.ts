import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  check:boolean = false;
  display1:boolean = false
  display2:boolean = false
  display3:boolean = false
  display4:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  show1(){
    this.display1 = true
    this.display2 = false
    this.display3 = false
    this.display4 = false
  }
  show2(){
    this.display2 = true
    this.display1 =false
    this.display3 =false
    this.display4 =false
  }
  show3(){
    this.display3 = true
    this.display1 =false
    this.display2 =false
    this.display4 =false
  }
  show4(){
    this.display4 = true
    this.display1 =false
    this.display2 =false
    this.display3 =false
  }
  toggle(){
    
    
    if(this.check)
    {
      this.check = false
    }
    else{
      this.check = true
    }
  }

}
