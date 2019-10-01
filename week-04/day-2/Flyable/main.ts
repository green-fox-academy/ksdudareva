import { Helicopter } from './helicopter';
import { Flyable } from './flyable'
import { Bird } from './../zoo/zoo'

let helicopter = new Helicopter ('helicopter', 'black', 16);

helicopter.takeOff();
helicopter.fly();
helicopter.land();