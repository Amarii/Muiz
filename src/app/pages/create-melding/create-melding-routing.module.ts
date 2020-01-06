import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMeldingPage } from './create-melding.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMeldingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMeldingPageRoutingModule {}
