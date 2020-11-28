﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileSystemInfo } from './filesysteminfo.complex';
import { FileSystemInfoModel } from './filesysteminfo.model';
//#endregion

export class FileSystemInfoCollection<E extends FileSystemInfo, M extends FileSystemInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}