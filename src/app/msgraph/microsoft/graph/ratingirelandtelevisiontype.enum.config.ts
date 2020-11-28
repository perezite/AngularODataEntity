﻿import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingIrelandTelevisionType } from './ratingirelandtelevisiontype.enum';
//#endregion

export const RatingIrelandTelevisionTypeConfig = {
  name: "ratingIrelandTelevisionType",
  members: RatingIrelandTelevisionType
} as EnumTypeConfig<RatingIrelandTelevisionType>;