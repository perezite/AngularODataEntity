﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SpecialFolder } from './specialfolder.complex';
import { SpecialFolderCollection } from './specialfolder.collection';
//#endregion

export class SpecialFolderModel<E extends SpecialFolder> extends ODataModel<E> {
  //#region ODataApi Properties
  name?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}