//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NoteEntityConfig } from './note.entity.config';
//#endregion

//#region ODataApiGen SchemaConfig
export const EntitiesSchema = {
  namespace: 'ODataTutorial.Entities',
  enums: [],
  entities: [NoteEntityConfig],
  callables: [],
  containers: []
} as SchemaConfig;
//#endregion