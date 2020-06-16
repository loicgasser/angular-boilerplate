import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/front/front.module').then(m => m.FrontModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: false,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
