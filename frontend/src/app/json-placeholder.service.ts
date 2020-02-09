import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';   
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: Http) { }
  
  gettingDumpData(ip,user,url){
    return this.http.post(ip+'/api/'+url,user)  
    .map((response: Response) =>response)
  }

}
