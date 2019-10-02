// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

export class Sharpie {
    public _color: string;
    public _width: number;
    _inkAmount: number;

    constructor (_color, _width, _inkAmount?) {
        this._color = _color;
        this._width = _width;
        this._inkAmount = 100;
    }

    public use() {
        this._inkAmount -= 10;
    }
}

let pinkSharpie = new Sharpie ('blue', 1.5);

pinkSharpie.use();

console.log(pinkSharpie._inkAmount);
