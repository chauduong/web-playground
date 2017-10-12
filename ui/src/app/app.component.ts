import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
  <h1>{{title}}</h1>
  <div class="header-bar"></div>
  <nav>
  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  <a routerLink="/items" routerLinkActive="active">Items</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
  })
export class AppComponent {
  title = 'App Title';
}
