import { Pipe, PipeTransform } from '@angular/core';
import { IYouTubeItem } from '../models/IYouTubeItem';

@Pipe({
  name: 'sortPipe',
})
export class SortPipePipe implements PipeTransform {

  transform(arr:IYouTubeItem[], textInput: string, sortType:'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' ): IYouTubeItem[] {
    let rez = arr;
    console.log('rez->', rez);
    
    if (sortType === 'dateDes') {
      console.log('date - DES log from pipe->', sortType);
      rez.sort((a, b) => (new Date(a.snippet.publishedAt).getTime()) - (new Date(b.snippet.publishedAt).getTime())); // desc sort
    } 
    if (sortType === 'dateAsc') {
      console.log('date asc log from pipe->', sortType);
      rez.sort((a, b) => (new Date(b.snippet.publishedAt).getTime()) - (new Date(a.snippet.publishedAt).getTime())); // desc sort
    }
    
    if (sortType === 'viewsDes') {
      console.log('views log from pipe->', sortType);
      rez.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)); // desc sort
    }
    if (sortType === 'viewsAsc') {
      console.log('views ASC log from pipe->', sortType);
      rez.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));//asc sort
    }
    
    if (!textInput.trim()) { return rez; }
    rez = arr.filter(a => 
      a.snippet.description.toLowerCase().includes(textInput.toLowerCase()) 
      || a.snippet.tags.includes(textInput.toLowerCase()));

    return rez; // final

  }

}
