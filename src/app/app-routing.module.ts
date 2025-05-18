import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//uncertain about this
const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
