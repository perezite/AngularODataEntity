﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeSlot } from './timeslot.complex';
import { TimeSlotModel } from './timeslot.model';
import { TimeSlotCollection } from './timeslot.collection';
//#endregion

export const TimeSlotConfig = {
  name: "timeSlot",
  model: TimeSlotModel,
  collection: TimeSlotCollection,
  annotations: [],
  fields: {
    end: {type: 'graph.dateTimeTimeZone', nullable: false},
    start: {type: 'graph.dateTimeTimeZone', nullable: false}
  }
} as StructuredTypeConfig<TimeSlot>;