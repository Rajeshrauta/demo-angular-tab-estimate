import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss'
})
export class PopoverComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['poperOverData']?.currentValue) {
      this.poperOverData = changes?.['poperOverData']?.currentValue;
    }
  }

  @Input() poperOverData: any[] = [];
  ngOnInit(): void {
  }

}
