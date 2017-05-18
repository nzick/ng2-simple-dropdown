import { Component } from '@angular/core';
import { Item } from '../ng2-simple-dropdown/ng2-simple-dropdown.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  savedFilter: Item[] = [];
  selectedFilter: Item;
  defaultSelectTextProfile = 'Profiles';

  constructor() {
    const data = { };
    this.savedFilter = [
      new Item('Profile1'),
      new Item('Profile2'),
      new Item('Profile3', data),
      new Item('Profile4', data),
      new Item('Profile5', data),
      new Item('Profile6', data),
      new Item('Profile7', data),
      new Item('Profile8', data),
      new Item('Profile9', data),
      new Item('Profile10', data),
    ];
  }
}
