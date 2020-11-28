﻿import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppContentFileUploadState } from './mobileappcontentfileuploadstate.enum';
//#endregion

export const MobileAppContentFileUploadStateConfig = {
  name: "mobileAppContentFileUploadState",
  members: MobileAppContentFileUploadState
} as EnumTypeConfig<MobileAppContentFileUploadState>;