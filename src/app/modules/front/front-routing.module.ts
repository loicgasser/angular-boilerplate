import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '@app-front/pages';

const frontRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(frontRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FrontRoutingModule { }
