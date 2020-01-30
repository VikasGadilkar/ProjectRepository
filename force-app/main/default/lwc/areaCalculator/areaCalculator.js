import { LightningElement, track, wire } from 'lwc';
import getListAccnts from '@salesforce/apex/LWC_ApexClassDataBinding.getListAccnts';

export default class AreaCalculator extends LightningElement {
    @track currentOutput;
    width;
    height;
    side;
    diagonal1;
    diagonal2;

    @wire(getListAccnts) acconuts;
    
    sideChangeHandler(event)
    {
        this.side = event.target.value;
    }

    widthChangeHandler(event)
    {
        this.width = event.target.value;
    }

    heightChangeHandler(event)
    {
        this.height = event.target.value;
    }

    diagonal1ChangeHandler(event)
    {
        this.diagonal1 = event.target.value;
    }

    diagonal2ChangeHandler(event)
    {
        this.diagonal2 = event.target.value;
    }

    calculateSquareAreaHandler()
    {
        const s = parseInt(this.side,0);
        this.currentOutput = 'Area of the Square is :' + (s*s);
    }

    calculateRectangleHandler()
    {
        const w = parseInt(this.width, 0);
        const h = parseInt(this.height, 0);
        this.currentOutput = 'Area of the Rectangle is :' + (w*h);
    }

    calculateRhombusHandler()
    {
        const d1 = parseInt(this.diagonal1,0);
        const d2 = parseInt(this.diagonal2,0);
        this.currentOutput = 'Area of the Rhombus is : ' + (d1 *d2)/2;
    }



}