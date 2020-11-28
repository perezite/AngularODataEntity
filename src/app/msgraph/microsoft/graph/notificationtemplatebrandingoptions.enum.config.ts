﻿import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { NotificationTemplateBrandingOptions } from './notificationtemplatebrandingoptions.enum';
//#endregion

export const NotificationTemplateBrandingOptionsConfig = {
  name: "notificationTemplateBrandingOptions",
  flags: true,
  members: NotificationTemplateBrandingOptions
} as EnumTypeConfig<NotificationTemplateBrandingOptions>;