﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchResult } from './searchresult.complex';
import { SearchResultModel } from './searchresult.model';
import { SearchResultCollection } from './searchresult.collection';
//#endregion

export const SearchResultConfig = {
  name: "searchResult",
  model: SearchResultModel,
  collection: SearchResultCollection,
  annotations: [],
  fields: {
    onClickTelemetryUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SearchResult>;