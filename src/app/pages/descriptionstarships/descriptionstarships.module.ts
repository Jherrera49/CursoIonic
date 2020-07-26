import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionstarshipsPageRoutingModule } from './descriptionstarships-routing.module';

import { DescriptionstarshipsPage } from './descriptionstarships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionstarshipsPageRoutingModule
  ],
  declarations: [DescriptionstarshipsPage]
})
export class DescriptionstarshipsPageModule {}
