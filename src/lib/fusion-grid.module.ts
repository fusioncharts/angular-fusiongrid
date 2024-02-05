import { NgModule } from '@angular/core';
import { FusionGridComponent } from './fusion-grid.component';
import { FusionGridService } from './fusion-grid.service';


@NgModule({
  declarations: [
    FusionGridComponent,
  ],

  providers:[FusionGridService],

  imports: [
  ],
  exports: [
    FusionGridComponent
  ]
})
export class FusionGridModule {
  static setFGRoot(fusionGrid: any) {
    FusionGridService.setFgRoot(fusionGrid);
  }
}
