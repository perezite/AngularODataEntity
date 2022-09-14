//#region ODataApiGen ODataImports
import {
  EntityContainerConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NotesServiceEntitySetConfig } from './notes.service.config';
//#endregion

//#region ODataApiGen EntityContainerConfig
export const ContainerContainer = {
  name: 'Container',
  entitySets: [
    NotesServiceEntitySetConfig
  ]
} as EntityContainerConfig;
//#endregion