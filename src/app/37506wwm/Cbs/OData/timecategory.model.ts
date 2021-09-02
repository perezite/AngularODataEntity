﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

@Model()
export class TimeCategoryModel<E extends TimeCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Key!: string;
  public $Key() {
    return this.property<string>('Key');
  }
  public getKey(options?: HttpOptions) {
    return this.getValue<string>('Key', options) as Observable<string>;
  }
  
  @ModelField()
  Title?: string;
  public $Title() {
    return this.property<string>('Title');
  }
  public getTitle(options?: HttpOptions) {
    return this.getValue<string>('Title', options) as Observable<string>;
  }
  
  @ModelField()
  Description?: string;
  public $Description() {
    return this.property<string>('Description');
  }
  public getDescription(options?: HttpOptions) {
    return this.getValue<string>('Description', options) as Observable<string>;
  }
  
  @ModelField()
  Status?: string;
  public $Status() {
    return this.property<string>('Status');
  }
  public getStatus(options?: HttpOptions) {
    return this.getValue<string>('Status', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}