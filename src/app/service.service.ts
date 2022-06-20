import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private service:HttpClient) { }

  getNews():Observable<any>
  {
    return this.service.get("http://satafood.codesroots.com:3000/api/branches//homepage")
  }

}
