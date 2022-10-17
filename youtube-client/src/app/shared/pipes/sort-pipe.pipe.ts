import { Pipe, PipeTransform } from '@angular/core';
import { IYouTubeItem } from '../../models/IYouTubeItem';

@Pipe({
  name: 'sortPipe',
})
export class SortPipePipe implements PipeTransform {

  transform(
    cards:IYouTubeItem[],
    sortType:'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes', 
  ): IYouTubeItem[] {
    let cardsArray = cards;
    
    if (sortType === 'dateDes') {
      cardsArray.sort((a, b) => (new Date(a.snippet.publishedAt).getTime()) - (new Date(b.snippet.publishedAt).getTime())); // desc sort
    } 
    if (sortType === 'dateAsc') {
      cardsArray.sort((a, b) => (new Date(b.snippet.publishedAt).getTime()) - (new Date(a.snippet.publishedAt).getTime())); // desc sort
    }

    if (sortType === 'viewsDes') {
      cardsArray.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)); // desc sort
    }
    if (sortType === 'viewsAsc') {
      cardsArray.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));//asc sort
    }

    return  cardsArray; // final

  }

}
