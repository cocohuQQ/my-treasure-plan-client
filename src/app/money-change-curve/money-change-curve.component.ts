import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-money-change-curve',
  templateUrl: './money-change-curve.component.html',
  styleUrls: ['./money-change-curve.component.css']
})
export class MoneyChangeCurveComponent implements OnInit {

  assetsChangeCurveForEveryOne: any;

  assetsChangeCurve: any;

  assetsChangeCurveForGM: any;

  assetsChangeCurveForKeKe: any;

  assetsChangeCurveForMM: any;

  assetsChangeCurveForBB: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.post(environment.TreasureBaseUrl + 'assetsAllocation/changeCurveForEveryOne', {}, {})
      .subscribe((returnData: any) => {
        if (!returnData && !returnData.datas) {
          return;
        }
        const seriesVal = [];
        // tslint:disable-next-line:forin
        for (const key in returnData.datas) {
          seriesVal.push({
            name: key,
            type: 'line',
            data: returnData.datas[key]
          });
        }
        this.assetsChangeCurveForEveryOne = {
          title: {
              text: '各人总资产趋势图'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: returnData.names,
              top: 30
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '20%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: returnData.dates
          },
          yAxis: {
              type: 'value'
          },
          series: seriesVal
      };
      });

    this.httpClient.post(environment.TreasureBaseUrl + 'assetsAllocation/changeCurve', {}, {})
      .subscribe((returnData: any) => {
        if (!returnData && !returnData.datas) {
          return;
        }
        const seriesVal = [];
        // tslint:disable-next-line:forin
        for (const key in returnData.datas) {
          seriesVal.push({
            name: key,
            type: 'line',
            data: returnData.datas[key]
          });
        }
        this.assetsChangeCurve = {
          title: {
              text: '各类资产汇总趋势图'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: returnData.types,
              top: 30
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '20%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: returnData.dates
          },
          yAxis: {
              type: 'value'
          },
          series: seriesVal
      };
      });

    this.httpClient.post(environment.TreasureBaseUrl + 'assetsAllocation/changeCurve/1', {}, {})
      .subscribe((returnData: any) => {
        if (!returnData && !returnData.datas) {
          return;
        }
        const seriesVal = [];
        // tslint:disable-next-line:forin
        for (const key in returnData.datas) {
          seriesVal.push({
            name: key,
            type: 'line',
            data: returnData.datas[key]
          });
        }
        this.assetsChangeCurveForKeKe = {
          title: {
              text: '可可各类资产趋势图'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: returnData.types,
              top: 30
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '20%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: returnData.dates
          },
          yAxis: {
              type: 'value'
          },
          series: seriesVal
      };
      });

    this.httpClient.post(environment.TreasureBaseUrl + 'assetsAllocation/changeCurve/2', {}, {})
      .subscribe((returnData: any) => {
        if (!returnData && !returnData.datas) {
          return;
        }
        const seriesVal = [];
        // tslint:disable-next-line:forin
        for (const key in returnData.datas) {
          seriesVal.push({
            name: key,
            type: 'line',
            data: returnData.datas[key]
          });
        }
        this.assetsChangeCurveForMM = {
          title: {
              text: '妈妈各类资产趋势图'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: returnData.types,
              top: 30
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '20%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: returnData.dates
          },
          yAxis: {
              type: 'value'
          },
          series: seriesVal
      };
      });

    this.httpClient.post(environment.TreasureBaseUrl + 'assetsAllocation/changeCurve/4', {}, {})
      .subscribe((returnData: any) => {
        if (!returnData && !returnData.datas) {
          return;
        }
        const seriesVal = [];
        // tslint:disable-next-line:forin
        for (const key in returnData.datas) {
          seriesVal.push({
            name: key,
            type: 'line',
            data: returnData.datas[key]
          });
        }
        this.assetsChangeCurveForBB = {
          title: {
              text: '爸爸各类资产趋势图'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: returnData.types,
              top: 30
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '20%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: returnData.dates
          },
          yAxis: {
              type: 'value'
          },
          series: seriesVal
      };
      });

    this.httpClient.post(environment.TreasureBaseUrl + 'assetsAllocation/changeCurve/3', {}, {})
      .subscribe((returnData: any) => {
        if (!returnData && !returnData.datas) {
          return;
        }
        const seriesVal = [];
        // tslint:disable-next-line:forin
        for (const key in returnData.datas) {
          seriesVal.push({
            name: key,
            type: 'line',
            data: returnData.datas[key]
          });
        }
        this.assetsChangeCurveForGM = {
          title: {
              text: '外婆各类资产趋势图'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: returnData.types,
              top: 30
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '20%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: returnData.dates
          },
          yAxis: {
              type: 'value'
          },
          series: seriesVal
      };
      });

  }

}
