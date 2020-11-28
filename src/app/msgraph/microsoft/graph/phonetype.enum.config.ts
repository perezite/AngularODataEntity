﻿import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhoneType } from './phonetype.enum';
//#endregion

export const PhoneTypeConfig = {
  name: "phoneType",
  members: PhoneType
} as EnumTypeConfig<PhoneType>;