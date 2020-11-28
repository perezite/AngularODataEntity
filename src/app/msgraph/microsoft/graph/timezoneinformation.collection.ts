﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TimeZoneInformation } from './timezoneinformation.complex';
import { TimeZoneInformationModel } from './timezoneinformation.model';
//#endregion

export class TimeZoneInformationCollection<E extends TimeZoneInformation, M extends TimeZoneInformationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}