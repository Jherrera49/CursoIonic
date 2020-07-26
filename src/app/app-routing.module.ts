import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/planets/planets.module').then( m => m.PlanetsPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./pages/starships/starships.module').then( m => m.StarshipsPageModule)
  },
  {
    path: 'planets/:id',
    loadChildren: () => import('./pages/descriptionplanets/descriptionplanets.module').then( m => m.DescriptionplanetsPageModule)
  },
  {
    path: 'people/:id',
    loadChildren: () => import('./pages/descriptionpeople/descriptionpeople.module').then( m => m.DescriptionpeoplePageModule)
  },
  {
    path: 'starships/:id',
    loadChildren: () => import('./pages/descriptionstarships/descriptionstarships.module').then( m => m.DescriptionstarshipsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
