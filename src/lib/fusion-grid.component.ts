import { Component, ElementRef, ViewChild, Input, Output, AfterViewInit, OnDestroy, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FusionGridService } from './fusion-grid.service';
import Events from './events';
import { GridEvent, GridInitialized } from './fusion-grid.interface';

@Component({
  selector: 'fusion-grid',
  template: `<div #gridContainer style="width:100%;height:100%"></div>`,
  styles:['.fusion-grid-container{ display: block; }'],
  host:{
    'class':'fusion-grid-container'
  },
  encapsulation:ViewEncapsulation.None
})
export class FusionGridComponent implements AfterViewInit, OnDestroy {

  private gridEvents: string[] = Events;
  private eventMapper: {[key:string]:string} = {};
  private gridRef: any;

  constructor(private fusionGridService: FusionGridService) {}

  _gridConfig: any;
  @Input() 
  set gridConfig(config: any) {
    this.updateGridConfig(config);
    this._gridConfig = config;
  }
  get gridConfig(): any {
    return this._gridConfig;
  }

  _dataTable: any;
  @Input() 
  set dataTable(dataTable: any){
    this.updateDataTable(dataTable);
    this._dataTable = dataTable;
  }

  get dataTable(): any {
    return this._dataTable;
  }

  @ViewChild('gridContainer') gridContainer: ElementRef;

  // Events
  @Output() initialized = new EventEmitter<GridInitialized>();

  @Output() beforeRender = new EventEmitter<GridEvent>();

  @Output() rendered = new EventEmitter<GridEvent>();

  @Output() updated = new EventEmitter<GridEvent>();

  @Output() resized = new EventEmitter<GridEvent>();

  @Output() disposed = new EventEmitter<GridEvent>();

  @Output() rowHovered = new EventEmitter<GridEvent>();

  @Output() columnHovered = new EventEmitter<GridEvent>();

  @Output() rowDoubleClicked = new EventEmitter<GridEvent>();

  @Output() headerClicked = new EventEmitter<GridEvent>();

  @Output() cardClicked = new EventEmitter<GridEvent>();

  @Output() cardDoubleClicked = new EventEmitter<GridEvent>();

  @Output() recordClicked = new EventEmitter<GridEvent>();

  @Output() recordDoubleClicked = new EventEmitter<GridEvent>();
  
  
  ngAfterViewInit() {
    const grid = this.fusionGridService.fusionGrid;
    this.gridRef = new grid(this.gridContainer.nativeElement, this.dataTable, this.gridConfig);
    this.initialized.emit({grid: this.gridRef});
    this.addGridEvents();
    this.gridRef.render();
  }

  ngOnDestroy() {
    if(!this.gridRef.dispose) {
      this.gridContainer.nativeElement.remove();
      return;
    }

    this.gridRef.dispose();
  }

  /** Attch the Events dynamically if its available in the component component */
  private addGridEvents(): void {
    this.gridEvents.forEach((eventName: string)=> {
      const eventSource = this[eventName] as EventEmitter<any>;
      this.eventMapper[eventName.toLocaleLowerCase()] = eventName;
      //Check Weather the event is subscribed
      if(eventSource.observers.length) {
        const callbackFn = (event: any, data: any) => {
          this[this.eventMapper[event.type]].emit({event, data});
        }
        this.gridRef.on(eventName, callbackFn);
      }
    });
  }
 /** Call the specific setter method once we update the config reference */
  updateGridConfig(config: any): void {
    if(!this.gridRef){
      return;
    }

    Object.entries(config).forEach(([key,value])=>{
      if(this.gridConfig[key] !== config[key]){
        const setterMethod = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
        this.gridRef[setterMethod] && this.gridRef[setterMethod](value);
      }
    });
  }

  updateDataTable(dataTable: any): void {
    if(!this.gridRef){
      return;
    }
    this.gridRef.setDataTable(dataTable);
  }
}
