
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-money-collect-overview',
  templateUrl: './money-collect-overview.component.html',
  styleUrls: ['./money-collect-overview.component.css']
})
export class MoneyCollectOverviewComponent implements OnInit {
  @ViewChild('myCharts', { static: true }) myCharts: ElementRef;

  assetsByPeopleOptions: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .post(environment.TreasureBaseUrl + 'assetsAllocation/groupByPeople', {}, {})
      .subscribe((returnData: Array<any>) => {
        if (!returnData) {
          return;
        }
        const dataName = [];
        const dataValue = [];
        returnData.forEach(element => {
          const nameVal = element.name + '-' + (element.value / 10000) + 'w';
          dataName.push(nameVal);
          dataValue.push({ value: element.value, name: nameVal });
        });

        this.assetsByPeopleOptions = {
          title: {
            text: '最新资产比例',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: dataName
          },
          series: [
            {
              name: '金额(元)',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: dataValue,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
      });
  }
}
