import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionstarshipsPage } from './descriptionstarships.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionstarshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionstarshipsPageRoutingModule {}
