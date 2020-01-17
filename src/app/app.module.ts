import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MoneyCollectOverviewComponent } from './money-collect-overview/money-collect-overview.component';
import { AnalogCalculatorYieldComponent } from './analog-calculator-yield/analog-calculator-yield.component';
import { IncomeExpensesViewComponent } from './income-expenses-view/income-expenses-view.component';

registerLocaleData(zh);

const appRoutes: Routes = [
  { path: 'money-collect-overview', component: MoneyCollectOverviewComponent , data: { title: '资产概览' } },
  { path: 'analog-calculator-yield', component: AnalogCalculatorYieldComponent, data: { title: '收益率试算' } },
  { path: 'income-expenses-view', component: IncomeExpensesViewComponent , data: { title: '收支明细' } },
  { path: '**', component: AnalogCalculatorYieldComponent, data: { title: '收益率试算' } }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MoneyCollectOverviewComponent,
    AnalogCalculatorYieldComponent,
    IncomeExpensesViewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
