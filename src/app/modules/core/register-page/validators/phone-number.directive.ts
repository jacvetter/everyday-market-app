import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumber]',
  standalone: false,
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true }]
})
export class PhoneNumberValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const valid = /^\d{10}$/.test(value);
    return valid ? null : { phoneNumber: true };
  }
}
