﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CurrencyColumn } from './currencycolumn.complex';
import { CurrencyColumnCollection } from './currencycolumn.collection';
//#endregion

export class CurrencyColumnModel<E extends CurrencyColumn> extends ODataModel<E> {
  //#region ODataApi Properties
  locale?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}