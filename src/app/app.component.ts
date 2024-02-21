import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DemoQcheck';

  constructor(private route: Router) {

  }
  ngOnInit(): void {
    this.route.navigate(['/tab-view']);
  }

}
