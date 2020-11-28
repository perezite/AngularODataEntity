﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.complex';
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export interface OmaSettingDateTime extends OmaSetting {
  //#region ODataApi Properties
  value: Date;
  //#endregion
}