//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Note } from './note.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NoteEntityConfig = {
  name: 'Note',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    MessageNote: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<Note>;
//#endregion