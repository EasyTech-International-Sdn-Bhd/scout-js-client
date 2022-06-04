import {nullish} from "../index";
import {TSortOption} from "../../@types/TDistinctArray";
import {TDynamicObject} from "../../@types/TInternal";

export default class Distinct<T>{
    public length: number = 0;
    public distinctKey:string = '';
    private primaryArray: T[] = [];
    constructor(key: string) {
        this.distinctKey = key;
    }
    public at(index: number):T{
        return index === -1 ? undefined : this.primaryArray[index];
    }
    public replaceAt(index: number, value: T):void{
        if(index !== -1){
            this.primaryArray[index] = value;
        }
    }
    public replaceWhere(identifier: TDynamicObject, newVal: T):boolean{
        const found = this.find(identifier);
        if(found !== -1){
            this.primaryArray[found] = newVal;
        }
        return false;
    }
    public find(identifier: TDynamicObject):number{
        const id = Object.keys(identifier)[0];
        const val = identifier[id];
        for (let i = 0; i < this.primaryArray.length; i++){
            const obj = this.primaryArray[i];
            for (const objKey in obj) {
                // @ts-ignore
                if(obj.hasOwnProperty(objKey) && objKey === id && obj[objKey] === val){
                    return i;
                }
            }
        }
        return -1;
    }
    public get():T[]{
        return this.primaryArray;
    }
    public push(element: T):void{
        if(!nullish(element) && this.distinctKey in element){
            this.filterArray(element);
            this.primaryArray.push(element);
            this.length = this.primaryArray.length;
        }
    }
    public deleteWhere(key: string, expected: string):void{
        this.filterArray(this.getWhere(key,expected));
        this.length--;
    }
    public getWhere(key:string, expected: string): any{
        for (let i = 0; i < this.primaryArray.length; i++){
            const obj = this.primaryArray[i];
            for (const objKey in obj) {
                // @ts-ignore
                if(objKey === key && obj[objKey] === expected){
                    return obj;
                }
            }
        }
        return null;
    }
    public clear():void{
        this.primaryArray = [];
    }
    public copy(new_source: T[]):void{
        for (let i = 0; i < new_source.length; i++){
            this.push(new_source[i]);
        }
    }
    public toString():string{
        return JSON.stringify(this.primaryArray);
    }
    public sort(key: string, options?: TSortOption){
        // @ts-ignore
        this.primaryArray = this.primaryArray.sort((a,b)=>this.$sort(a[key],b[key],options));
    }
    // @ts-ignore
    private $sort (a:string|number,b: string|number, _options?: TSortOption){
        let re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
            sre = /(^[ ]*|[ ]*$)/g,
            dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            hre = /^0x[0-9a-f]+$/i,
            ore = /^0/,
            options = _options || {insensitive:true,desc:false},// @ts-ignore
            // tslint:disable-next-line:only-arrow-functions
            i = function(s) { return options.insensitive && (''+s).toLowerCase() || ''+s },
            // convert all to strings strip whitespace
            x = i(a).replace(sre, '') || '',
            y = i(b).replace(sre, '') || '',
            // chunk/tokenize
            xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
            yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
            // @ts-ignore
            xD = parseInt(x.match(hre)) || (xN.length !== 1 && x.match(dre) && Date.parse(x)),
            // @ts-ignore
            yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
            oFxNcL, oFyNcL,
            mult = options.desc ? -1 : 1;
        // first try and sort Hex codes or Dates
        if (yD)// @ts-ignore
            if ( xD < yD ) return -1 * mult;// @ts-ignore
            else if ( xD > yD ) return 1 * mult;
        // natural sorting through split numeric strings and default strings
        for(let cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
            // find floats not starting with '0', string or 0 if not defined (Clint Priest)
            oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
            oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
            // @ts-ignore
            if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL) ? 1 : -1) * mult; }
            // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
            else if (typeof oFxNcL !== typeof oFyNcL) {
                oFxNcL += '';
                oFyNcL += '';
            }
            if (oFxNcL < oFyNcL) return -1 * mult;
            if (oFxNcL > oFyNcL) return 1 * mult;
        }
        return 0;
    }
    private filterArray(element: any):void{
        this.primaryArray = this.primaryArray.filter((item:any,index:number):void=>{
            if(item[this.distinctKey] !== element[this.distinctKey]){
                return item;
            }
        });
    }
}
