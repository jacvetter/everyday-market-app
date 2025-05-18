import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAddress]',
  standalone: false,
  providers: [{ provide: NG_VALIDATORS, useExisting: AddressValidatorDirective, multi: true }]
})
export class AddressValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const valid = /^[A-Za-z0-9\s]+$/.test(value);
    return valid ? null : { address: true };
  }
}
