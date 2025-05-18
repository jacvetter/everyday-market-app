import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appLettersOnly]',
  standalone: false,
  providers: [{ provide: NG_VALIDATORS, useExisting: LettersOnlyValidatorDirective, multi: true }]
})
export class LettersOnlyValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const valid = /^[A-Za-z\s]+$/.test(value);
    return valid ? null : { lettersOnly: true };
  }
}
