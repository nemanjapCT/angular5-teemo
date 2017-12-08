import { NgModule, Optional, SkipSelf } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth.guard';
import { AuthenticationService } from './services/authentication.service';

// place for services and helpers
@NgModule({
  imports: [
  ],
  declarations: [
   // nothing here
  ],
  providers: [
    AuthGuard, UserService, AuthenticationService
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    // prevent importing CoreModule multiple times. Import it only in Root module
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
