import { Pipe, PipeTransform } from '@angular/core';
import { IYouTubeItem } from '../models/IYouTubeItem';

@Pipe({
  name: 'sortPipe',
})
export class SortPipePipe implements PipeTransform {

  transform(
    arr:IYouTubeItem[], 
    textInput: string, 
    sortType:'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' ): IYouTubeItem[] {
    let rez = arr;
    
    if (sortType === 'dateDes') {
      rez.sort((a, b) => (new Date(a.snippet.publishedAt).getTime()) - (new Date(b.snippet.publishedAt).getTime())); // desc sort
    } 
    if (sortType === 'dateAsc') {
      rez.sort((a, b) => (new Date(b.snippet.publishedAt).getTime()) - (new Date(a.snippet.publishedAt).getTime())); // desc sort
    }

    if (sortType === 'viewsDes') {
      rez.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)); // desc sort
    }
    if (sortType === 'viewsAsc') {
      rez.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));//asc sort
    }
    
    if (!textInput.trim()) { return rez; }
    rez = arr.filter(a => 
      a.snippet.description.toLowerCase().includes(textInput.toLowerCase()) 
      || a.snippet.tags.includes(textInput.toLowerCase()));

    return  rez; // final

  }

}
