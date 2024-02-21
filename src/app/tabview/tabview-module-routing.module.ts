import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabOverViewComponent } from './pages/tab-over-view/tab-over-view.component';

const routes: Routes = [
  { path: '', component: TabOverViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabviewModuleRoutingModule { }
