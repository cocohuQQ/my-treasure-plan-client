import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-money-assert-reg',
  templateUrl: './money-assert-reg.component.html',
  styleUrls: ['./money-assert-reg.component.css']
})
export class MoneyAssertRegComponent implements OnInit {

  validateForms: FormGroup[] = [];

  tabsTitle: string[] = [];

  tabsValue: string[] = [];

  itemsComponentForAllTab: any = [];

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private message: NzMessageService) {
      this.queryForm();
  }

  ngOnInit() {

  }

  queryForm(){
    this.httpClient.post(environment.TreasureBaseUrl + 'assetReg/items', {}, {})
    .subscribe((returnData: Map<string, any>) => {
      if ( !returnData || returnData.size <= 0 ) {
        return;
      }
      // tslint:disable-next-line:forin
      for (const curPeople in returnData) {
         const assetItems: Array<AssetItem> = returnData[curPeople].assets;
         const fromBuilderJson  = {};
         const itemsComponentForCurTab: any = [];
         assetItems.forEach(curAssetItem  => {
          const item = {
            'lableTxt': curAssetItem.assetsTypeDescrible, //应收帐款
            'formControlName': curAssetItem.assetsTypeCod
          }
          itemsComponentForCurTab.push(item);
          fromBuilderJson[curAssetItem.assetsTypeCod] =  [0, [Validators.required]]
         });
         this.tabsTitle.push(returnData[curPeople].peopleName);
         this.tabsValue.push(curPeople);
         this.itemsComponentForAllTab.push(itemsComponentForCurTab);
         this.validateForms.push(this.formBuilder.group(fromBuilderJson));
        }
      });
  }

  save(): void {
    const data  = [];
    this.validateForms.forEach((form, index) => {
      // tslint:disable-next-line:forin
      for  (const key in form.value) {
        data.push({
          peopleCode : this.tabsValue[index],
          assetsTypeCode: key,
          value: form.value[key],
          date : this. getyyyyMMdd()
        });
      }
    });
    this.httpClient.post(environment.TreasureBaseUrl + 'assetReg/regAssetForAllPeople',
    data, {}).subscribe(
      response => {
        this.message.success('保存成功');
      }
    );

  }

  getyyyyMMdd() {
    const d = new Date();
    let curr_date = d.getDate() + '';
    let curr_month = (d.getMonth() + 1) + '';
    const curr_year = d.getFullYear();
    curr_month = String(curr_month).length < 2 ? ("0" + curr_month): curr_month;
    curr_date = String(curr_date).length < 2 ? ("0" + curr_date): curr_date;
    const yyyyMMdd = curr_year + "" + curr_month +""+ curr_date;
    return yyyyMMdd;
}

  isValidForms(): boolean {
    let valide = true;
    this.validateForms.forEach((form) => {
      if ( !form.invalid ) {
        valide =  form.invalid;
      }
    });
    return valide;
  }
}
export interface AssetItem {
  assetsTypeCod: number;

  assetsTypeDescrible: string;

  peopleCode: number;

  peopleName: string;
}
