import { FormControl } from '@angular/forms';

export class PasswordValidators {

  public static isPasswordStrong(password: FormControl): { [key: string]: boolean } | null {
    let hasSpecial = /[$@$!%*?&;,_(:#)]/.test(password.value);
    let hasNumber = /\d/.test(password.value);
    let hasUpper = /[A-Z]/.test(password.value);
    let hasLower = /[a-z]/.test(password.value);
    const isValid = hasNumber && hasUpper && hasLower && hasSpecial;
    if (!isValid) {
      return { isNotStrong: true };
    }
    return null;
  }

  public static isPasswordContainsNumbers(password: FormControl): { [key: string]: boolean } | null {
    let isValid = /\d/.test(password.value);
    if (!isValid) {
      return { isWithoutNumbers: true };
    }
    return null;
  }

  public static isPasswordContainsSpecials(password: FormControl): { [key: string]: boolean } | null {
    let isValid = /[$@$!%*?&;,_(:#)]/.test(password.value);
    if (!isValid) {
      return { isWithoutSpecials: true };
    }
    return null;
  }

  public static isPasswordContainsUppercase(password: FormControl): { [key: string]: boolean } | null {
    let isValid = /[A-Z]/.test(password.value);
    if (!isValid) {
      return { isWithoutUppercase: true };
    }
    return null;
  }

  public static isPasswordContainsLowercase(password: FormControl): { [key: string]: boolean } | null {
    let isValid = /[a-z]/.test(password.value);
    if (!isValid) {
      return { isWithoutLowercase: true };
    }
    return null;
  }

}