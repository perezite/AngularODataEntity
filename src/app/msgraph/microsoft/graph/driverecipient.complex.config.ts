﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DriveRecipient } from './driverecipient.complex';
import { DriveRecipientModel } from './driverecipient.model';
import { DriveRecipientCollection } from './driverecipient.collection';
//#endregion

export const DriveRecipientConfig = {
  name: "driveRecipient",
  model: DriveRecipientModel,
  collection: DriveRecipientCollection,
  annotations: [],
  fields: {
    alias: {type: 'Edm.String'},
    email: {type: 'Edm.String'},
    objectId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DriveRecipient>;