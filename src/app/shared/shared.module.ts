import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatIconModule, MatTabsModule, MatToolbarModule, MatSidenavModule,
  MatListModule } from '@angular/material';
  import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatTabsModule, MatToolbarModule,
    MatSidenavModule, MatListModule
  ],
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent, FlexLayoutModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatTabsModule,
    MatToolbarModule, MatSidenavModule, MatListModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
