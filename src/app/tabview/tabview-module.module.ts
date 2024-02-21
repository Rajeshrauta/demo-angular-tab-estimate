import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabviewModuleRoutingModule } from './tabview-module-routing.module';
import { TabViewGridComponent } from './components/tab-view-grid/tab-view-grid.component';
import { TabViewHeaderComponent } from './components/tab-view-header/tab-view-header.component';
import { TabViewFilterComponent } from './components/tab-view-filter/tab-view-filter.component';
import { TabOverViewComponent } from './pages/tab-over-view/tab-over-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModuleModule } from '../share/share-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopoverComponent } from './components/popover/popover.component';


@NgModule({
  declarations: [
    TabViewGridComponent,
    TabViewHeaderComponent,
    TabViewFilterComponent,
    TabOverViewComponent,
    PopoverComponent
  ],
  imports: [
    CommonModule,
    TabviewModuleRoutingModule,
    ReactiveFormsModule,
    ShareModuleModule,
    FormsModule,
    NgbModule
  ]
})
export class TabviewModuleModule { }
