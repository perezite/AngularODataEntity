﻿import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

export const ScheduleEntityThemeConfig = {
  name: "scheduleEntityTheme",
  members: ScheduleEntityTheme
} as EnumTypeConfig<ScheduleEntityTheme>;