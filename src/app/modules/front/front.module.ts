// LIB MODULES
import { NgModule } from '@angular/core';

// SHARED MODULE
import { SharedModule } from '@app-shared/shared.module';

// PAGES
import { LandingPageComponent } from '@app-front/pages';

// ROUTING
import { FrontRoutingModule } from './front-routing.module';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    SharedModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
