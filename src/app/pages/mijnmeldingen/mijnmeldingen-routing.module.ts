import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MijnmeldingenPage } from './mijnmeldingen.page';

const routes: Routes = [
  {
    path: '',
    component: MijnmeldingenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MijnmeldingenPageRoutingModule {}
