﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ManagedAppOperation extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  lastModifiedDateTime: Date;
  state?: string;
  version?: string;
  //#endregion
}