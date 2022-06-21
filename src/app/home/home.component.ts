import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliders:any=[]
  constructor( private _service:ServiceService) { 

    _service.getData().subscribe( data => this.sliders = data.sliders)
    
  }

  ngOnInit(): void {
  }

}
