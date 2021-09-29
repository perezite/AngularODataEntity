﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
import { GeoDimension } from './geodimension.entity';
import { GeoDimensionModel } from './geodimension.model';
//#endregion

export class GeoDimensionCollection<E extends GeoDimension, M extends GeoDimensionModel<E>> extends DimensionOrTopicCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}