﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Sales_by_Category } from './sales_by_category.entity';
//#endregion

export const Sales_by_CategoryConfig = {
  name: "Sales_by_Category",
  annotations: [],
  fields: {
    CategoryID: {type: 'Number', key: true, ref: 'CategoryID', nullable: false},
    CategoryName: {type: 'String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    ProductName: {type: 'String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    ProductSales: {type: 'Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<Sales_by_Category>;