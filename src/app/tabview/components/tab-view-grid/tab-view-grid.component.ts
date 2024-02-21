import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FreeitemComponent } from '../freeitem/freeitem.component';

@Component({
  selector: 'app-tab-view-grid',
  templateUrl: './tab-view-grid.component.html',
  styleUrls: ['./tab-view-grid.component.scss']
})
export class TabViewGridComponent {
  data: any[] = [];
  public showMenu: boolean = window.innerWidth > 450;
  public OrderFormForm!: FormGroup;
  private searchQuery: string = '';
  public poperOverData: any[] = [];

  constructor(private fb: FormBuilder, private modalService: NgbModal) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Update showMenu value when window is resized
    this.showMenu = window.innerWidth > 450;
  }


  ngOnInit(): void {

    this.OrderFormForm = this.fb.group({
      items: this.fb.array([])
    });
    this.CreateDummy();
    this.patchItemsIntoFormArray(this.data);
  }



  get items(): FormArray {
    return <FormArray>this.OrderFormForm?.get('items');
  }

  private patchItemsIntoFormArray(dataItem: any[]) {
    const formArray = this.OrderFormForm?.get('items') as FormArray;
    formArray?.clear();
    dataItem.forEach(item => {
      formArray.push(this.fb.group({
        productId: [item?.productId],
        name: [item?.name],
        qtyOnHand: [item?.qtyOnHand],
        qty: [item?.qty],
        free: [item?.free],
        rate: [item?.rate],
        isPopoverVisible: [false],
        one: this.getRandomInt(0, 100),
        two: this.getRandomInt(0, 100),
        three: this.getRandomInt(0, 100),
        four: this.getRandomInt(0, 100),
        five: this.getRandomInt(0, 100),
        six: this.getRandomInt(0, 100),
        seven: this.getRandomInt(0, 100),
        eight: this.getRandomInt(0, 100),
        nine: this.getRandomInt(0, 100)
      }));
    });
  }

  onAdd(rowIndex: number) {
    const data = parseInt(this.items?.controls[rowIndex]?.get('qty')?.value);
    this.items?.controls[rowIndex]?.get('qty')?.setValue(data + 1);
    if (parseInt(this.items?.controls[rowIndex]?.get('qty')?.value) >= 10) {
      this.openFreeModal(rowIndex);
    }
  }

  onSub(rowIndex: number) {
    const data = parseInt(this.items?.controls[rowIndex]?.get('qty')?.value);
    this.items?.controls[rowIndex]?.get('qty')?.setValue(data - 1);
  }

  search(): void {
    const query = this.searchQuery.toLowerCase().trim();
    const data = this.data.filter(item => item.name.toLowerCase().includes(query));
    if (data) {
      this.patchItemsIntoFormArray(data);
    }
  }

  onSearch(event: any) {
    this.searchQuery = event.target.value
    this.search();
  }


  private CreateDummy() {
    for (let i = 1; i <= 5; i++) {
      this.data.push({
        productId: i * 5,
        name: `***Opener Ginger (Bottle)***250ml*12*(India Format) ${i}`,
        qtyOnHand: this.getRandomInt(1, 1000), // Random quantity on hand between 1 and 1000
        qty: 0, // Random quantity between 1 and 100
        free: 0, // Random free quantity between 0 and 10
        rate: this.getRandomInt(10, 100), // Random rate between 10 and 100
      });
    }
  }

  public onQuantityChange(rowIndex: number) {
    const dataItem = this.items.controls[rowIndex];
    if (parseInt(dataItem?.get('qty')?.value) >= 10) {
      this.openFreeModal(rowIndex);
    }
  }

  private openFreeModal(rowIndex: number) {
    const modalOptions: NgbModalOptions = { backdrop: 'static', windowClass: 'free-items', keyboard: true };
    const modalRef = this.modalService.open(FreeitemComponent, modalOptions);
    modalRef.result.then((result: any) => {
      if (result) {
        this.items.controls[rowIndex].get('qty')?.setValue(result.qty);
        this.items.controls[rowIndex].get('free')?.setValue(result.free);
      }
    });
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  showPopover(event: MouseEvent, rowIndex: number) {
    this.items.controls[rowIndex].get('isPopoverVisible')?.setValue(true);
    this.poperOverData = Array(this.items.controls[rowIndex].value);
    event.stopPropagation(); // Prevent event bubbling
  }

  hidePopover(rowIndex: number) {
    this.poperOverData = [];
    this.items.controls[rowIndex].get('isPopoverVisible')?.setValue(false);
  }

  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public ProductData = [
    {
      Id: 1,
      ProductName: "HEM & MISC"
    },
    {
      Id: 2,
      ProductName: "HRD Frz Curries, Paneer",
    },
    {
      Id: 3,
      ProductName: "Mothers Recipy"
    },
    {
      Id: 4,
      ProductName: "Parle G"
    },
    {
      Id: 5,
      ProductName: "Chings"
    },
    {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Jabson G"
    }, {
      Id: 1,
      ProductName: "HEM & MISC"
    },
    {
      Id: 2,
      ProductName: "HRD Frz Curries, Paneer",
    },
    {
      Id: 3,
      ProductName: "Mothers Recipy"
    },
    {
      Id: 4,
      ProductName: "Parle G"
    },
    {
      Id: 5,
      ProductName: "Chings"
    },
    {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Jabson G"
    }, {
      Id: 1,
      ProductName: "HEM & MISC"
    },
    {
      Id: 2,
      ProductName: "HRD Frz Curries, Paneer",
    },
    {
      Id: 3,
      ProductName: "Mothers Recipy"
    },
    {
      Id: 4,
      ProductName: "Parle G"
    },
    {
      Id: 5,
      ProductName: "Chings"
    },
    {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Waiwai"
    }, {
      Id: 6,
      ProductName: "Jabson G"
    }
  ]

}
