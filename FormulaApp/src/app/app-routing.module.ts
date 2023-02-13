import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DriversPage } from './pages/drivers/drivers.page';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'drivers',
    pathMatch: 'full'
  },

  {
    path: 'drivers',
    loadChildren: () => import('./pages/drivers/drivers.module').then( m => m.DriversPageModule)
  },
  {
    path: 'drivers/:id',
    loadChildren: () => import('./pages/driver-detail/driver-detail.module').then( m => m.DriverDetailPageModule)
  },
  // {
  //   path: 'driver-detail',
  //   loadChildren: () => import('./pages/driver-detail/driver-detail.module').then( m => m.DriverDetailPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
