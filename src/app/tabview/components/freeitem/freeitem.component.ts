import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareModuleModule } from 'src/app/share/share-module.module';

@Component({
  selector: 'app-freeitem',
  standalone: true,
  imports: [ShareModuleModule, ReactiveFormsModule],
  templateUrl: './freeitem.component.html',
  styleUrl: './freeitem.component.scss'
})
export class FreeitemComponent implements OnInit {
  public freeItemForm!: FormGroup;
  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {

  }
  ngOnInit(): void {
    this.freeItemForm = this.fb.group({
      free: [0],
      qty: [0]
    });
  }

  public closeModal() {
    this.activeModal.close(this.freeItemForm?.value)
  }

  onAdd() {
    const data = parseInt(this.freeItemForm.get('qty')?.value);
    this.freeItemForm.get('qty')?.setValue(data + 1);
    if (parseInt(this.freeItemForm.get('qty')?.value) >= 10) {
    }
  }

  onSub() {
    const data = parseInt(this.freeItemForm.get('qty')?.value);
    this.freeItemForm.get('qty')?.setValue(data - 1);
  }

  onAddFree() {
    const data = parseInt(this.freeItemForm.get('free')?.value);
    this.freeItemForm.get('free')?.setValue(data + 1);
    if (parseInt(this.freeItemForm.get('free')?.value) >= 10) {
    }
  }

  onSubFree() {
    const data = parseInt(this.freeItemForm.get('free')?.value);
    this.freeItemForm.get('free')?.setValue(data - 1);
  }
 

  public FeeValueChange(event: any) {
    if (parseInt(event?.target?.value) < 0) {
      return true
    }
    return false;
  }

  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
