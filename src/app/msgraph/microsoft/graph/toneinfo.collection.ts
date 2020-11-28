﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Tone } from './tone.enum';
import { ToneInfo } from './toneinfo.complex';
import { ToneInfoModel } from './toneinfo.model';
//#endregion

export class ToneInfoCollection<E extends ToneInfo, M extends ToneInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}