import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app-bootstrap';

  selectedTab:string='recipe';

  onTabSelected(feature:string){
    this.selectedTab=feature;
  }
}
