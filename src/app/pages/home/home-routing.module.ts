import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'mijnmeldingen',
        loadChildren: () => import('../mijnmeldingen/mijnmeldingen.module').then( m => m.MijnmeldingenPageModule)
      },
      {
        path: 'melding-details/:id',
        loadChildren: () => import('../melding-details/melding-details.module').then( m => m.MeldingDetailsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
