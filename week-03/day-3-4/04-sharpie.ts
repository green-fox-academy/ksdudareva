// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

export class Sharpie {
    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor (color: string, width: number, inkAmount: number = 100) {
        this._color = color;
        this._width = width;
        this._inkAmount = inkAmount;
    }

    public use() {
        this._inkAmount -= 10;
    }

    public getColor() {
        return this._color;
    }

    public getWidth() {
        return this._width;
    }

    public getInkamount() {
        return this._inkAmount;
    }
}

let pinkSharpie = new Sharpie ('blue', 1.5);

pinkSharpie.use();

console.log(pinkSharpie.getInkamount());
