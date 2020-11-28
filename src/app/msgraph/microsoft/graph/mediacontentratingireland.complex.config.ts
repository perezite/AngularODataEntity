﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingIreland } from './mediacontentratingireland.complex';
import { MediaContentRatingIrelandModel } from './mediacontentratingireland.model';
import { MediaContentRatingIrelandCollection } from './mediacontentratingireland.collection';
//#endregion

export const MediaContentRatingIrelandConfig = {
  name: "mediaContentRatingIreland",
  model: MediaContentRatingIrelandModel,
  collection: MediaContentRatingIrelandCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingIrelandMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingIrelandTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingIreland>;