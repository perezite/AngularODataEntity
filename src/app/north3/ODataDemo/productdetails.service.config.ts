﻿import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductDetailsService } from './productdetails.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ProductDetailsServiceEntitySetConfig = {
  name: "ProductDetails",
  entityType: "ODataDemo.ProductDetail",
  service: ProductDetailsService,
  annotations: []
} as EntitySetConfig;
//#endregion