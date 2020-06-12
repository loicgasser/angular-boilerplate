import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Font Awesome Brand Icons
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGoogle,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [ FontAwesomeModule ],
  exports: [ FontAwesomeModule ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebookSquare,
      faTwitterSquare,
      faInstagram,
      faLinkedin,
      faGoogle,
      faFacebook
    );
  }
}
