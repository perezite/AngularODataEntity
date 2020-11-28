﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ComplianceStatus } from './compliancestatus.enum';
import { ManagedDeviceMobileAppConfigurationUserStatus } from './manageddevicemobileappconfigurationuserstatus.entity';
import { ManagedDeviceMobileAppConfigurationUserStatusModel } from './manageddevicemobileappconfigurationuserstatus.model';
//#endregion

export class ManagedDeviceMobileAppConfigurationUserStatusCollection<E extends ManagedDeviceMobileAppConfigurationUserStatus, M extends ManagedDeviceMobileAppConfigurationUserStatusModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}