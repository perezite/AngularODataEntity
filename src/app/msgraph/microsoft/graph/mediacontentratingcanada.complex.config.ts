﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingCanada } from './mediacontentratingcanada.complex';
import { MediaContentRatingCanadaModel } from './mediacontentratingcanada.model';
import { MediaContentRatingCanadaCollection } from './mediacontentratingcanada.collection';
//#endregion

export const MediaContentRatingCanadaConfig = {
  name: "mediaContentRatingCanada",
  model: MediaContentRatingCanadaModel,
  collection: MediaContentRatingCanadaCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingCanadaMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingCanadaTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingCanada>;