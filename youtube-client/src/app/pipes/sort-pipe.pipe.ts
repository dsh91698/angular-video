import { Pipe, PipeTransform } from '@angular/core';
import { IYouTubeItem } from '../models/IYouTubeItem';

@Pipe({
  name: 'sortPipe',
})
export class SortPipePipe implements PipeTransform {

  transform(arr:IYouTubeItem[], textInput: string = ''): IYouTubeItem[] {
    console.log('log from pipe->', textInput);
    if (!textInput.trim()) { return arr; }
    const rez = arr.filter(a => a.snippet.description.includes(textInput) || a.snippet.tags.includes(textInput));
    return rez;
  }

}
