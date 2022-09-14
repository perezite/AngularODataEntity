//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EntitiesSchema } from './ODataTutorial/Entities/entities.schema';
import { DefaultSchema } from './Default/default.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const NotesConfig = {
  serviceRootUrl: 'http://localhost:8000/v1/',
  name: 'Notes',
  version: '4.0',
  creation: new Date('2022-09-14T15:46:49.2529396+00:00'),
  schemas: [
    EntitiesSchema,
    DefaultSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion
