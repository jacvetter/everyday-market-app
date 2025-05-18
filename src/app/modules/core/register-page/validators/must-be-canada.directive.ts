import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMustBeCanada]',
  standalone: false,
  providers: [{ provide: NG_VALIDATORS, useExisting: MustBeCanadaValidatorDirective, multi: true }]
})
export class MustBeCanadaValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value === 'CA' ? null : { mustBeCanada: true };
  }
}
