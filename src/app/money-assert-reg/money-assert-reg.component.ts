import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder) {
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
}
export interface AssetItem {
  assetsTypeCod: number;

  assetsTypeDescrible: string;

  peopleCode: number;

  peopleName: string;
}
