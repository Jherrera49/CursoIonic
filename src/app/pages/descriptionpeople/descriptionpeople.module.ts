import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionpeoplePageRoutingModule } from './descriptionpeople-routing.module';

import { DescriptionpeoplePage } from './descriptionpeople.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionpeoplePageRoutingModule
  ],
  declarations: [DescriptionpeoplePage]
})
export class DescriptionpeoplePageModule {}
