import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-money-collect-overview',
  templateUrl: './money-collect-overview.component.html',
  styleUrls: ['./money-collect-overview.component.css']
})
export class MoneyCollectOverviewComponent implements OnInit {

  @ViewChild('myCharts', {static : true}) myCharts: ElementRef;

  options: any;

  constructor() { }

  ngOnInit() {
    const myChart = echarts.init(this.myCharts.nativeElement);

        // 指定图表的配置项和数据
    const option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

}
