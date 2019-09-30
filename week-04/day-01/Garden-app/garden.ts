'use strict';

import { Plant } from './plant';
import { Tree } from './tree';
import { Flower } from './flower';

export class Garden {
	private _plantList: Plant[];

	constructor() {
		this._plantList = [];
	}

	public getPlantList(){
		return this._plantList;
	}

	public addFlower(flower: Flower) {
		this._plantList.push(flower);
	}

	public addTree(tree: Tree) {
		this._plantList.push(tree);
	}

	public waterPlants(amount: number) {
		let array: Plant[] = [];
		this._plantList.forEach(element => {
			if (element.needsWater()) {
				array.push(element);
			} 
		});
			array.forEach(element => {
				element.water(amount / array.length);
				element.waterCheck();
			}
				);			
		}

	}

