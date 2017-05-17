import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  savedFilter: Array<any> = [];
  selectedFilter: {};
  defaultSelectTextProfile = 'Profiles';

  constructor() {
    this.savedFilter = [
      {name: 'Profile1', any: {}},
      {name: 'Profile2', any: {}},
      {name: 'Profile3', any: {}},
      {name: 'Profile4', any: {}},
      {name: 'Profile5', any: {}},
      {name: 'Profile6', any: {}},
      {name: 'Profile7', any: {}},
      {name: 'Profile8', any: {}},
      {name: 'Profile9', any: {}},
      {name: 'Profile10', any: {}},
      {name: 'Profile11', any: {}},
    ];
  }
}
