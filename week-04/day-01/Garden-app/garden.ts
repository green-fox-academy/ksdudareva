'use strict';

import { Plant } from './plant';
import { Tree } from './tree';
import { Flower } from './flower';

export class Garden{
    private _plantList: Plant[];


	constructor() {
		this._plantList = [];
	}
    
}


//push plants into garden
//for each element check if it needs water
//if yes
//distribute water evenly