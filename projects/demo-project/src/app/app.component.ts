import { Component } from '@angular/core';
import FusionGrid from "fusiongrid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'fusion-grid-test';
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
    // rowOptions: {
    //   style: { "background-color": "oldlace" },
    //   hover: {
    //     enable: true,
    //     style: { "background-color": "white" },
    //   },
    // }, 
    pagination: {
      enable: false,
      pageSize: {
        default: 10,
        options: true
      },
      showPages: {
        enable: true,
        showTotal: true,
        userInput: true
      }
    },
    columns: [
      { field: 'Rank', width: '200px' },
      {
        field: 'Make',
        type: 'html',
        template: function (params) {
          var url = "https://static.fusioncharts.com/fg/demo/assets/images/" +
            params.values["Make"] + ".png";
          var html = '<div><img src="' + url
            + '" width="50px" style="vertical-align:middle"></div>';
          return html;
        }
      },
      {
        field: 'Units Sold',
        width: '160px',
        type: 'chart',
        tooltip: {
          headerTooltip: "Number of units sold globally",
          enableHeaderHelperIcon: true,
          enableCellTooltip: false
        },
        formatter: function (params) {
          return new Intl.NumberFormat().format(params.cellValue);
        },
        style: function (params) {
          if (params.cellValue > 600000) {
            return { 'background-color': 'lightgreen' }
          }
          return;
        }
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

  updateData() {
    this.data = [
      [1, "F-Series", "Ford", 896526, "Claycomo, Mo."],
      [2, "Pickup", "Ram", 633694, "Warren, Mich."]
    ];
  }

  initialized(event: any) {
    console.log(event);
  }

  updateColumns() {
    this.gridConfig = {
      ...this.gridConfig,
      columns: [{ field: 'Rank', width: '70px' }, {
        field: 'Make',
        type: 'html',
        template: function (params) {
          var url = "https://static.fusioncharts.com/fg/demo/assets/images/" +
            params.values["Make"] + ".png";
          var html = '<div><img src="' + url
            + '" width="50px" style="vertical-align:middle"></div>';
          return html;
        }
      }]
    }
  }

  updateRowOption() {
    this.gridConfig = {
      ...this.gridConfig,
      rowOptions: {
        style: { "background-color": "red" },
        hover: {
          enable: true,
          style: { "background-color": "white" },
        },
      },
    }
  }

  updatePagination() {
    this.gridConfig = {
      ...this.gridConfig,
      pagination: {
        enable: true,
        pageSize: {
          default: 10,
          options: true
        },
        showPages: {
          enable: true,
          showTotal: true,
          userInput: true
        }
      },
    }

  }
}
