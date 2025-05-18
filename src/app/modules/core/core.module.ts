import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LettersOnlyValidatorDirective } from './register-page/validators/letters-only.directive';
import { PhoneNumberValidatorDirective } from './register-page/validators/phone-number.directive';
import { AddressValidatorDirective } from './register-page/validators/address.directive';
import { MustBeCanadaValidatorDirective } from './register-page/validators/must-be-canada.directive';

const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  declarations: [
    RegisterPageComponent,
    LettersOnlyValidatorDirective,
    PhoneNumberValidatorDirective,
    AddressValidatorDirective,
    MustBeCanadaValidatorDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CoreModule { }
