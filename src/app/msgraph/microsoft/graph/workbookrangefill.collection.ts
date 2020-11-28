﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookRangeFill } from './workbookrangefill.entity';
import { WorkbookRangeFillModel } from './workbookrangefill.model';
//#endregion

export class WorkbookRangeFillCollection<E extends WorkbookRangeFill, M extends WorkbookRangeFillModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}