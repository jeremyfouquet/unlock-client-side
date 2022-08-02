import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChrono'
})
export class GetChronoPipe implements PipeTransform {

  //https://askcodez.com/comment-convertir-les-secondes-en-minutes-et-heures-en-javascript.html
  transform(value: number): string {
    const d = Number(value);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var mDisplay = m;
    var sDisplay = s;
    return mDisplay+':'+sDisplay;
  }

}
