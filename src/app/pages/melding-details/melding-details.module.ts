import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeldingDetailsPageRoutingModule } from './melding-details-routing.module';

import { MeldingDetailsPage } from './melding-details.page';
import { AlgemeneGegevensCardComponent } from 'src/app/components/melding-details/algemene-gegevens-card/algemene-gegevens-card.component';
import { MeldingAantallenCardComponent } from 'src/app/components/melding-details/melding-aantallen-card/melding-aantallen-card.component';
// tslint:disable: max-line-length
import { MeldingBasisGegevensCardComponent } from 'src/app/components/melding-details/melding-basis-gegevens-card/melding-basis-gegevens-card.component';
import { MeldingErnstOmvangCardComponent } from 'src/app/components/melding-details/melding-ernst-omvang-card/melding-ernst-omvang-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeldingDetailsPageRoutingModule
  ],
  declarations: [
    MeldingDetailsPage,
    AlgemeneGegevensCardComponent,
    MeldingAantallenCardComponent,
    MeldingBasisGegevensCardComponent,
    MeldingErnstOmvangCardComponent]
})
export class MeldingDetailsPageModule {}
