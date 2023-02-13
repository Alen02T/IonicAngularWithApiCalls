import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/models/driver.model';
import { DriverService } from 'src/app/services/driver.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.page.html',
  styleUrls: ['./driver-detail.page.scss'],
})
export class DriverDetailPage implements OnInit {

  driver:Driver | null;
  driverId:number;

  constructor(private route:ActivatedRoute,private driverService:DriverService) {
      this.driver=null;
      this.driverId=0;
   }

  ngOnInit() {
    this.route.paramMap.subscribe((parameters: any) => {
      this.driverId = parameters.get('id');
      console.log(this.driverId)
    });
    //const id = this.route.snapshot.paramMap.get('id')


    this.driverService.getDriverById(this.driverId).subscribe(apiDrivers => this.driver=apiDrivers);

    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril']

    const dataset1 = {
        label: "Dataset 1",
        data: [10, 55, 60, 120],
        borderColor: 'rgba(248, 37, 37, 0.8)',
        fill: false,
        tension: 0.1
    };

    const dataset2 = {
        label: "Dataset 2",
        data: [5, 44, 55, 100],
        borderColor: 'rgba(69, 248, 84, 0.8)',
        fill: false,
        tension: 0.1
    };

    const dataset3 = {
        label: "Dataset 3",
        data: [20, 40, 55, 120],
        borderColor: 'rgba(69, 140, 248, 0.8)',
        fill: false,
        tension: 0.1
    };

    const dataset4 = {
        label: "Dataset 4",
        data: [18, 40, 20, 100],
        borderColor: 'rgba(245, 40, 145, 0.8)',
        fill: false,
        tension: 0.1
    };

    var graph = <HTMLCanvasElement> document.getElementById("grafica");

    const data = {
        labels: labels,
        datasets: [dataset1,dataset2,dataset3,dataset4]
    };

    const config = {
        type: 'line',
        data: data,
    };

    new Chart(graph, config as any);
  }

}
