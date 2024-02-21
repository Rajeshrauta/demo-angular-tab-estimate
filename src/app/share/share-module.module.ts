import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommomIconsComponent } from './Components/commom-icons/commom-icons.component';



@NgModule({
  declarations: [
    CommomIconsComponent
  ],
  imports: [
    CommonModule,
  ]
  , exports: [CommomIconsComponent]
})
export class ShareModuleModule { }
