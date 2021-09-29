﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface OrderDetailsExtended {
  //#region ODataApiGen Properties
  OrderID: number;
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  ExtendedPrice?: number;
  //#endregion
}