import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../models/room';

@Pipe({
  name: 'arraySort'
})
export class ArraySortPipe implements PipeTransform {

  transform(array: Array<Note>): Array<Note> {
    array.sort((a: Note, b: Note) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
