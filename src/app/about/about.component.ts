import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  check:boolean = false;

  constructor( ) { }

  ngOnInit(): void {
  }


  playVideo(){
    
    
    if(this.check)
    {
      this.check = false
    }
    else{
      this.check = true
    }
  }

}
