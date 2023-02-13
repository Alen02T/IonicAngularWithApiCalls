import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Driver } from '../models/driver.model';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http:HttpClient) { }

  getDriverData() : Observable<Driver[]> {
    return this.http.get<Driver[]>(environment.API_URL + '/drivers');
  }

  getDriverById(id : number) : Observable<Driver>{
    return this.http.get<Driver>(environment.API_URL + '/drivers/'+id);
  }

}
