//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NotesService } from './notes.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const NotesServiceEntitySetConfig = {
  name: 'Notes',
  entityType: 'ODataTutorial.Entities.Note',
  service: NotesService
} as EntitySetConfig;
//#endregion