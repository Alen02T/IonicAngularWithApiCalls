import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Driver } from 'src/app/models/driver.model';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {
  drivers:Driver[] | null;
  currentPage=1;

  constructor(private driverService:DriverService,private loadingCtrl:LoadingController) {
    this.drivers=null;
   }

handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

  ngOnInit() {
    this.loadDrivers();
  }

   loadDrivers(){

    // const loading = await this.loadingCtrl.create({
    //   message:'Loading...',
    //   spinner:'bubbles',
    // });
    // await loading.present();

    this.driverService.getDriverData().subscribe(res => (
      this.drivers=res
      ));
  }

}
