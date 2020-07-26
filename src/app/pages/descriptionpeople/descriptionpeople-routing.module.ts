import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionpeoplePage } from './descriptionpeople.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionpeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionpeoplePageRoutingModule {}
