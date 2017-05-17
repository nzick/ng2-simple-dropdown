# ng2-simple-dropdown
Angular2 Dropdown Component with *NO DEPENDENCYS*

***ng2-simple-dropdown*** is a table grid component for Angular2/4.

## Demo

Try it out: [http://ng2-simple-dropdown.nicolaszick.com](http://ng2-simple-dropdown.nicolaszick.com)

## Data

`[items]` can be an Object like the following:

```js
this.savedFilter = [
      {
        name: 'Profile1', 
        any: {}
      }
]
```

`[defaultValue]` can be a String like the following:

```js
this.defaultSelectTextProfile = "Please Select";
```

## Installation

Install ng2-simple-dropdown via `npm`

````shell
npm install ng2-simple-dropdown --save
````

## Integration

```ts
// app.module.ts
import { SimpleDropdownModule } from 'ng2-simple-dropdown';

@NgModule({
  ...
  imports: [ SimpleDropdownModule ]
  ...
})
export class AppModule { }

// app.component.html
<ng2-simple-dropdown [items]="items" [(ngModel)]="selectedItem" [defaultValue]="defaultText"></ng2-simple-dropdown>
```

## Run Included Demo

```shell
git clone https://github.com/nzick/ng2-simple-dropdown.git --depth 1
cd ng2-simple-dropdown
npm install
npm start
```

## AoT Library Build

```shell
npm run build:lib
```

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
