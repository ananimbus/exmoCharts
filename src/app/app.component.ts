import { Component, Injectable, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { Exmo } from '../interfaces/exmo.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  exmoData: Exmo.RootObject;

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  });

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get<Exmo.RootObject>('https://exmo.me/ctrl/chartMain?type=0&period=month&para=BTC_USD').subscribe(data => {
      // Read the result field from the JSON response.
       this.exmoData = data;
    });
  }




  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
