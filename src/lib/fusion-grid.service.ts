import { Injectable } from '@angular/core';

@Injectable()
export class FusionGridService {

  static _fgRoot: any = null;

  fusionGrid: any;

  static setFgRoot (fusionGrid: any) {
    FusionGridService._fgRoot = fusionGrid;
  }

  static getFgRoot(): any {
    return FusionGridService._fgRoot;
  }
  
  static isFgRootSet() :boolean {
    return !!FusionGridService._fgRoot;
  }
  constructor() { 

    if(!FusionGridService.isFgRootSet()) {
      throw Error('Please Configure the fusion Grid');
    }
    this.fusionGrid = FusionGridService.getFgRoot();
  }
}
