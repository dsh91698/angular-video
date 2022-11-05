// admin page castom validators
import { FormControl } from '@angular/forms';

export class AdminPageValidators {

  public static isUrlCorrect(Url: FormControl): { [key: string]: boolean } | null {
    try {
      new URL(Url.value);
      return null;
    } catch (err) {
      return { isNotCorrectUrl: true };
    }
  }

  public static isDateCorrect(createDate: FormControl): { [key: string]: boolean } | null {
    // future date check
    let today: number = new Date().getTime(); // ms
    let videoCreationDate: number = new Date(createDate.value).getTime(); // ms
    let isDateInFuture = videoCreationDate > today;
    if (isDateInFuture) {
      return { isDateInFuture: true };
    }

    // correct date check
    let isDateValid = new Date(createDate.value);
    if (isDateValid.toString() === 'Invalid Date') {
      return { isNotCorrectDate: true };
    }
    return null;
  }

}

