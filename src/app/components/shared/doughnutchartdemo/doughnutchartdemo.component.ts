import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnutchartdemo',
  templateUrl: './doughnutchartdemo.component.html',
  styleUrls: ['./doughnutchartdemo.component.css']
})
export class DoughnutchartdemoComponent implements OnInit {

  data:any;
  
  constructor() {
    this.data = {
        labels: ['On Time','On Hold','Past Time'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#008000",
                    "#ff3300",
                    "#ff9900"
                ],
                hoverBackgroundColor: [
                    "#008000",
                    "#ff3300",
                    "#ff9900"
                ]
            }]    
        };
}
  ngOnInit() {
  }

  myEvent(event) {
    console.log(this.data.datasets[event.element._datasetIndex].data[event.element._index]);
  }




}
