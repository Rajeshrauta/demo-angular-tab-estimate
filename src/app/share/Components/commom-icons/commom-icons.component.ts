import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commom-icons',
  templateUrl: './commom-icons.component.html',
  styleUrl: './commom-icons.component.scss'
})
export class CommomIconsComponent {
  @Input() IconType: any; //Icon type
  @Input() fillColor: string = '#110A36'; // Default fill color
  @Input() iconColor: string = '#110A36'; // Default fill color


  @Input() icon_height: string = "20"; // Default height 20
  @Input() icon_width: string = "20";// Default width 20
}
