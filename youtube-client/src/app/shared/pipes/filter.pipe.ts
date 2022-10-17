import { Pipe, PipeTransform } from '@angular/core';
import { IYouTubeItem } from '../../models/IYouTubeItem';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {

  transform(
    cards:IYouTubeItem[], 
    textInput: string, 
  ): IYouTubeItem[] {
    let cardsArray = cards;
      
    if (!textInput.trim()) { return cardsArray; }
    cardsArray = cards.filter(a => 
      a.snippet.description.toLowerCase().includes(textInput.toLowerCase()) 
        || a.snippet.tags.includes(textInput.toLowerCase()));
  
    return  cardsArray; // final
  
  }
  
}
  