//#region ODataApiGen ODataImports
import {
  NgModule
} from '@angular/core';//#endregion

//#region ODataApiGen Imports
import { ContainerService } from './Default/container.service';
import { NotesService } from './Default/notes.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApiGen Providers
    ContainerService,
    NotesService//#endregion
  ]
})
export class NotesModule { }