// Write an ambient file within task_3/js, named crud.d.ts containing the type declarations for each crud function.
// At the top of the file import RowID and RowElement from interface.ts.

import { RowID, RowElement } from './interface.ts';

// create type declarations for each crud function below:

// create
declare function insertRow(row: RowElement): RowID;

// read
declare function readRow(id: RowID): RowElement;

// update
declare function updateRow(id: RowID, row: RowElement): RowID;

// delete
declare function deleteRow(id: RowID): RowID;

export { insertRow, readRow, updateRow, deleteRow };
