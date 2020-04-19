import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { element } from 'protractor';

@Component({
  selector: 'app-analog-calculator-yield',
  templateUrl: './analog-calculator-yield.component.html',
  styleUrls: ['./analog-calculator-yield.component.css']
})
export class AnalogCalculatorYieldComponent implements OnInit {

  calResultCurve: any;
  validateForm: FormGroup;
  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');
  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      minExpectRate: [null, [Validators.required]],
      maxExpectRate: [null, [Validators.required]],
      money: [null, [Validators.required]]
    });
  }

  submitForm() {

    this.httpClient.post(environment.TreasureBaseUrl + 'trial/reachTargetRate', {
      minTargetRate: this.validateForm.controls.minExpectRate.value,
      maxTargetRate:  this.validateForm.controls.maxExpectRate.value,
      money:  this.validateForm.controls.money.value
    }, {})
    .subscribe((returnData: Map<string, Array<AssetExpectRate>>) => {
      if (!returnData || returnData.size <= 0) {
        return;
      }
      const seriesVal = [];
      const legend = [];
      const xAxis = new Set();
      const seriesDataMap = new Map<string, Array<string>>();
      for(let curRate in returnData){
        let curLegend = curRate + '%';
        legend.push(curLegend);
        returnData[curRate].forEach((element: AssetExpectRate) => {
          const key = element.assetDescrible + '(' + element.rate  + '%)';
          if(!xAxis.has(key)){
            xAxis.add(key);
          }
          if (!seriesDataMap.has(curLegend)) {
            seriesDataMap.set(curLegend, []);
          }
          seriesDataMap.get(curLegend).push( element.persent * 100 + '');
        });
      }

      seriesDataMap.forEach((value: Array<string>, key: string) => {
        seriesVal.push({
          name: key,
          type: 'line',
          data: value
        });
      });
      this.calResultCurve = {
        title: {
            text: '收益率-资产分配关系图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legend,
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
            data: Array.from(xAxis)
        },
        yAxis: {
            type: 'value'
        },
        series: seriesVal
    };
    });
    console.log(    this.calResultCurve);
  }
}
export interface AssetExpectRate {
  date: number;

  assetDescrible: string;

  rate: number;

  persent: number;

  money: number;

}
