import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {


  //carousel code
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    navText: ['<i class="fa-solid fa-arrow-left">','<i class="fa-solid fa-arrow-right">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  //slides:any = document.getElementsByClassName("slide");
//slideIndex:number = 1;
sliders:Array<any> = []
// code carousel by me
/*
 

 test1:boolean = true
 test2:boolean = false
 test3:boolean = false
 test4:boolean = false
 test5:boolean = false
 test6:boolean = false
 test7:boolean = false
 test8:boolean = false
 */
  constructor( private _service:ServiceService) {

    _service.getNews().subscribe( data => this.sliders = data.sliders)
    console.log(this.sliders)

   }

  
  


  ngOnInit(): void {
    //this.slide(1)
    
  }


  
 


/*
btnNext(){
  if (this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = true
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == true && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = true
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == true && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = true
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == true && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = true
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == true
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = true
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == true && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = true
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == true && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = true
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == true && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = true
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == true)
  {
    this.test1 = true
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
}


btnPrev(){
  if (this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = true
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == true && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = true
  }
  else if(this.test1 == false && this.test2 == true && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = true
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == true && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = true
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == true
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = true
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == true && this.test6 == false && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = true
    this.test5 = false
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == true && this.test7 == false && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = true
    this.test6 = false
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == true && this.test8 == false)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = true
    this.test7 = false
    this.test8 = false
  }
  else if(this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false
    && this.test5 == false && this.test6 == false && this.test7 == false && this.test8 == true)
  {
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.test5 = false
    this.test6 = false
    this.test7 = true
    this.test8 = false
  }
}


*/



}
