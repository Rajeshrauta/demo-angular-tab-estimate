import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModuleRoutingModule } from './layout-module-routing.module';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';


@NgModule({
  declarations: [
    SideNavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule
  ],
  exports: [SideNavbarComponent]
})
export class LayoutModuleModule { }
