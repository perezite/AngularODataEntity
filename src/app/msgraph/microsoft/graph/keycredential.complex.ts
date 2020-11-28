﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface KeyCredential {
  //#region ODataApi Properties
  customKeyIdentifier?: ArrayBuffer;
  displayName?: string;
  endDateTime?: Date;
  key?: ArrayBuffer;
  keyId?: string;
  startDateTime?: Date;
  type?: string;
  usage?: string;
  //#endregion
}