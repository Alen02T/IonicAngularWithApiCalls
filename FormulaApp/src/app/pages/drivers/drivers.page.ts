import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {

  constructor(private driverService:DriverService) { }

  ngOnInit() {
    this.driverService.getDriverData().subscribe((res)=>{
      console.log(res);
    });
  }

}
