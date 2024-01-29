A simple and lightweight official Angular component for FusionGrid JavaScript grid library. `angular-fusiongrid` enables you to add JavaScript grid in your Angular application or project without any hassle.

- Github Repo: [https://github.com/fusioncharts/angular-fusiongrid](https://github.com/fusioncharts/angular-fusiongrid)

## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.

- **AngularCLI** installed globally in your OS.

- **FusionGrid** and **Angular** installed in your project, as detailed below:

### Installation

There are multiple ways to install `angular-fusiongrid` component.

**Direct Download**
All binaries are located on our [github repository](https://github.com/fusioncharts/angular-fusiongrid/).

**Install from NPM**

```
npm install angular-fusiongrid
```

See [npm documentation](https://docs.npmjs.com/) to know more about npm usage.

**Install from Yarn**

```
yarn add angular-fusiongrid
```

See [yarn documentation](https://yarnpkg.com/en/docs) to know more about yarn usage.

### Steps to publish Angular Fusiongrid
## Build

Run `ng build angular-fusiongrid` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build angular-fusiongrid`, go to the dist folder `cd dist/fusion-grid` and run `npm publish`.

### Usage

#### Create a Application using Angular cli

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FusionGridModule } from 'angular-fusiongrid';

FusionGridModule.setFGRoot(FusionGrid);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Quick Start

Here is a basic sample that shows how to create a grid using `angular-fusiongrid`:

In the app.component.ts add the below code
````javascript
import { Component } from '@angular/core';
import FusionGrid from "@fusioncharts/fusiongrid"; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  schema = [
    {
        name: 'Rank',
        type: 'number',
    }, {
        name: 'Model'
    },
    {
        name: 'Make'
    },
    {
        name: 'Units Sold',
        type: 'number'
    },
    {
        name: 'Assembly Location'
    }
  ];

  data = [
    [1, "F-Series", "Ford", 896526, "Claycomo, Mo."],
    [2, "Pickup", "Ram", 633694, "Warren, Mich."],
    [3, "Silverado", "Chevrolet", 575600, "Springfield, Ohio"],
    [4, "RAV4", "Toyota", 448071, "Georgetown, Ky."],
    [5, "CR-V", "Honda", 384168, "Greensburg, Ind."],
    [6, "Rogue", "Nissan", 350447, "Smyrna, Tenn."],
    [7, "Equinox", "Chevrolet", 346048, "Arlington, Tex."],
    [8, "Camry", "Toyota", 336978, "Georgetown, Ky."],
    [9, "Civic", "Honda", 325650, "Greensburg, Ind."],
    [10, "Corolla", "Toyota", 304850, "Blue Springs, Miss."],
    [11, "Accord", "Honda", 267567, "Marysville, Ohio"],
    [12, "Tacoma", "Toyota", 248801, "San Antonio, Tex."],
    [13, "Grand Cherokee", "Jeep", 242969, "Detroit, Mich."],
    [14, "Escape", "Ford", 241338, "Louisville, Ky."],
    [15, "Highlander", "Toyota", 239438, "Princeton, Ind."],
    [16, "Sierra", "GMC", 232325, "Flint, Mich."],
    [17, "Wrangler", "Jeep", 228032, "Toledo, Ohio"],
    [18, "Altima", "Nissan", 209183, "Smyrna, Tenn."],
    [19, "Cherokee", "Jeep", 191397, "Belvidere, Ill."],
    [20, "Sentra", "Nissan", 184618, "Canton, Miss."],
  ];
  dataTable: any;

  gridConfig: any = {
    columns: [
      { field: 'Rank',width: '70px'},
      { 
        field: 'Make',
      },
      {
        field: 'Units Sold',
        width: '100px',
      },
      {
        field: 'Assembly Location',
        headerText: 'Assembly Location in US'
      },
    ]
  }
  constructor() {
    const dataStore = new FusionGrid.DataStore();
    this.dataTable = dataStore.createDataTable(this.data, this.schema, {
      enableIndex: false
    });
  }
}


Add the Fusion grid component selector in the app.component.html

`<fusion-grid style="width: 1000px;height: 1000px;" [dataTable]="dataTable" 
    [gridConfig]="gridConfig">
</fusion-grid>`;
````
## Working with Events

To attach event

`<fusion-grid style="width: 1000px;height: 1000px;" [dataTable]="dataTable" 
    [gridConfig]="gridConfig" (initialized)="initialized($event)">
</fusion-grid>`
