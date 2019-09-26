'use strict'

class Car {

    // private speed: number;
    private _fuelLevel: number; //can be used only in class. even if the spec changes, there is option to change class (encapsulation)
    private _capacity: number; //usually make properties private

    constructor(fuelLevel:number) {
        this._fuelLevel = fuelLevel;
    }

   changeLevel(){
       this._fuelLevel += 11; //refers to instance which is used /
   }

   public get (fuelLevel) {
       return this._fuelLevel;

   }

//    public getSpeedMpH(){

//    }

//    public getSpeedKpH() {

//    }

}

let audi = new Car(); // this is an instance of Car class. instantiating car class

let opel = new Car(); // other instance of car class

for(let i: number = 0; i <10; i++) {
    let car = new Car();
    if (i = 5) {
        opel = car; //we overwrite the opel variable, which means the object in line 10 will not have reference anymore
    }
}

audi.capacity = 60; 
// audi.fuelLevel += 10;