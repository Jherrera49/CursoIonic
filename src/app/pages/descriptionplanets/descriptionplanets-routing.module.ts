import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionplanetsPage } from './descriptionplanets.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionplanetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionplanetsPageRoutingModule {}
