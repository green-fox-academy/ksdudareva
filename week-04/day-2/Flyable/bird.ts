import { Flyable } from './flyable'
import { Bird } from './../zoo/zoo'

export abstract class Animal implements Flyable{
    abstract takeOff();
    abstract fly();
    abstract land();


}

// export class Bird extends Animal{
    
    
//     constructor(name: string){
//         super(name);
//     }
//     public breed(): string {
//         return "laying eggs.";
//     }