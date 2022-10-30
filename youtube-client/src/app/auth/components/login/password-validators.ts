import { FormControl } from '@angular/forms';

export class PasswordValidators {

  public static isPasswordStrong(password: FormControl): { [key: string]: boolean } | null {
    let hasSpecial = /[$@$!%*?&;,_(:#)]/.test(password.value);
    let hasNumber = /\d/.test(password.value);
    let hasUpper = /[A-Z]/.test(password.value);
    let hasLower = /[a-z]/.test(password.value);
    const isValid = hasNumber && hasUpper && hasLower && hasSpecial;
    if (!isValid) {
      console.log(password.value);
      return { isNotStrong: true };
    }

    return null;
  }


}