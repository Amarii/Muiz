import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeldingDetailsPage } from './melding-details.page';

const routes: Routes = [
  {
    path: '',
    component: MeldingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeldingDetailsPageRoutingModule {}
