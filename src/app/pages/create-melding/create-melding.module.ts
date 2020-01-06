import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMeldingPageRoutingModule } from './create-melding-routing.module';

import { CreateMeldingPage } from './create-melding.page';

import { GlobalModule } from '../../global/global.module';
import { ToggleButtonComponent } from 'src/app/components/toggle-button/toggle-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    CreateMeldingPageRoutingModule,
  ],
  declarations: [CreateMeldingPage, ToggleButtonComponent]
})
export class CreateMeldingPageModule {}
