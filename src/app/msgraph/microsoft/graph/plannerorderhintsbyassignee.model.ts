﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerOrderHintsByAssignee } from './plannerorderhintsbyassignee.complex';
import { PlannerOrderHintsByAssigneeCollection } from './plannerorderhintsbyassignee.collection';
//#endregion

export class PlannerOrderHintsByAssigneeModel<E extends PlannerOrderHintsByAssignee> extends ODataModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}