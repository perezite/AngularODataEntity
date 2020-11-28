﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { AttendeeAvailability } from './attendeeavailability.complex';
import { Location } from './location.complex';
import { TimeSlot } from './timeslot.complex';
import { AttendeeAvailabilityModel } from './attendeeavailability.model';
import { LocationModel } from './location.model';
import { TimeSlotModel } from './timeslot.model';
import { AttendeeAvailabilityCollection } from './attendeeavailability.collection';
import { LocationCollection } from './location.collection';
import { TimeSlotCollection } from './timeslot.collection';
//#endregion

export interface MeetingTimeSuggestion {
  //#region ODataApi Properties
  attendeeAvailability?: AttendeeAvailability[];
  confidence?: number;
  locations?: Location[];
  meetingTimeSlot?: TimeSlot;
  order?: number;
  organizerAvailability?: FreeBusyStatus;
  suggestionReason?: string;
  //#endregion
}