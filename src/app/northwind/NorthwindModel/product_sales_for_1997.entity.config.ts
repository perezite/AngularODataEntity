﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Product_Sales_for_1997 } from './product_sales_for_1997.entity';
//#endregion

export const Product_Sales_for_1997Config = {
  name: "Product_Sales_for_1997",
  annotations: [],
  fields: {
    CategoryName: {type: 'String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    ProductName: {type: 'String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    ProductSales: {type: 'Number', scale: 4}
  }
} as EntityConfig<Product_Sales_for_1997>;