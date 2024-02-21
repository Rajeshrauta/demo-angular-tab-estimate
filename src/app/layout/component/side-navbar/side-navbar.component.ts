import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  public navbarExpanded: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnDestroy(): void {
  }

  ngOnInit() {

  }
  public defaultRoute() {
    this.router.navigate([`accounts-receivable`]);
  }
  //------------
  public showMenu(tab: string) {
    return true;
  }


}
