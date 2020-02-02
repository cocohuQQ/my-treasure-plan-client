
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

  assetsByType: any;

  assetsByTypeForKeKe: any;

  assetsByTypeForMM: any;

  assetsByTypeForGM: any;

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
            top: 30,
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

    this.httpClient.post(environment.TreasureBaseUrl + '/assetsAllocation/groupByType', {}, {})
      .subscribe((returnData: Array<any>) => {
        if (!returnData) {
          return;
        }
        const dataName = [];
        const dataValue = [];
        let sumVal = 0;
        returnData.forEach(element => {
          const nameVal = element.assetsTypeDes + '-' + (element.value / 10000) + 'w';
          dataName.push(nameVal);
          dataValue.push({ value: element.value, name: nameVal });
          sumVal += element.value;
        });
        this.assetsByType = {
          title: {
            text: '最新资产分类' + ( sumVal / 10000) + 'w',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            top: 30,
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

    this.httpClient.post(environment.TreasureBaseUrl + '/assetsAllocation/groupByType/1', {}, {})
    .subscribe((returnData: Array<any>) => {
      if (!returnData) {
        return;
      }
      const dataName = [];
      const dataValue = [];
      let sumVal = 0;
      returnData.forEach(element => {
        const nameVal = element.assetsTypeDes + '-' + (element.value / 10000) + 'w';
        dataName.push(nameVal);
        dataValue.push({ value: element.value, name: nameVal });
        sumVal += element.value;
      });

      this.assetsByTypeForKeKe = {
        title: {
          text: '可可的最新资产分类' + ( sumVal / 10000) + 'w',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 30,
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

    this.httpClient.post(environment.TreasureBaseUrl + '/assetsAllocation/groupByType/2', {}, {})
   .subscribe((returnData: Array<any>) => {
    if (!returnData) {
      return;
    }
    const dataName = [];
    const dataValue = [];
    let sumVal = 0;
    returnData.forEach(element => {
      const nameVal = element.assetsTypeDes + '-' + (element.value / 10000) + 'w';
      dataName.push(nameVal);
      dataValue.push({ value: element.value, name: nameVal });
      sumVal += element.value;
    });

    this.assetsByTypeForMM = {
      title: {
        text: '妈妈的最新资产分类' + ( sumVal / 10000) + 'w',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 30,
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


    this.httpClient.post(environment.TreasureBaseUrl + '/assetsAllocation/groupByType/3', {}, {})
   .subscribe((returnData: Array<any>) => {
    if (!returnData) {
      return;
    }
    const dataName = [];
    const dataValue = [];
    let sumVal = 0;
    returnData.forEach(element => {
      const nameVal = element.assetsTypeDes + '-' + (element.value / 10000) + 'w';
      dataName.push(nameVal);
      dataValue.push({ value: element.value, name: nameVal });
      sumVal += element.value;
    });

    this.assetsByTypeForGM = {
      title: {
        text: '外婆的最新资产分类'+ ( sumVal / 10000) + 'w',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 30,
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
