import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http:HttpClient) { }

  getDriverData() : Observable<Object[]> {
    return this.http.get<Object[]>(environment.API_URL + '/Drivers');
  }

  getDriversById(){}

}
