import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MijnmeldingenPageRoutingModule } from './mijnmeldingen-routing.module';

import { MijnmeldingenPage } from './mijnmeldingen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MijnmeldingenPageRoutingModule
  ],
  declarations: [MijnmeldingenPage]
})
export class MijnmeldingenPageModule {}
