﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  Expand, 
  Select,
  HttpOptions} from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.complex';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airportlocation.model';
import { AirportModel } from './airport.model';
import { AirportLocationCollection } from './airportlocation.collection';
import { AirportCollection } from './airport.collection';
//#endregion

@Injectable()
export class AirportsService extends ODataEntitySetService<Airport> {
  constructor(protected client: ODataClient) {
    super(client, 'Airports', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }

  //#region ODataApi Model
  airportModel(attrs?: Partial<Airport>): AirportModel<Airport> {
    return this.entity().asModel<AirportModel<Airport>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  airportCollection(models?: Partial<Airport>[]): AirportCollection<Airport, AirportModel<Airport>> {
    return this.entities().asCollection<AirportModel<Airport>, AirportCollection<Airport, AirportModel<Airport>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getNearestAirport(lat: number, lon: number, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{lat: number, lon: number}, Airport>(
      {lat, lon}, 
      this.client.function<{lat: number, lon: number}, Airport>('Microsoft.OData.SampleService.Models.TripPin.GetNearestAirport'), 
      'entity', {alias, ...options}) as Observable<Airport | null>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
