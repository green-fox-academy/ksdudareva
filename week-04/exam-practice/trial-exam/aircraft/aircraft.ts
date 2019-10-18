'use strict';

export abstract class Aircraft {
    protected _ammo: number;
    protected _damage: number;

    constructor(ammo: number, damage: number) {
        this._ammo = ammo;
        this._damage - damage;
    }
    // It should use all the ammo (set it to 0) and it should return the damage it deals
    // The damage dealt is calculated by multiplying the base damage by the ammunition
    
    public fight(): number {
        console.log(this._ammo * this._damage);
       return this._ammo * this._damage
    }
}

export class F16 extends Aircraft {
    constructor() {
        super(8, 30)
    }
}

export class F35 extends Aircraft {
    constructor() {
        super(12, 50)
    }
}

let f35 = new F35();
console.log(f35.fight());