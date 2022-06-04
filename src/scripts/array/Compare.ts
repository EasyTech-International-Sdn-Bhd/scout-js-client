class CompareInternal<T, U extends string & keyof T> {
    protected first_array: T[] = [];
    protected second_array: T[] = [];
    protected fields: string[] = [];
    constructor(primary_array: T[]) {
        this.first_array = primary_array;
    }
    public to(array_to_compare: T[]): CompareInternal<T,U>{
        this.second_array = array_to_compare;
        return this;
    }
    public with(property_name_if_element_object: string | string[]): CompareInternal<T,U>{
        if(typeof property_name_if_element_object === "string"){
            this.fields.push(property_name_if_element_object);
        }else{
            for (let i = 0; i < property_name_if_element_object.length; i++){
                this.fields.push(property_name_if_element_object[i]);
            }
        }
        return this;
    }
    public equal(): boolean {
        return this._compare() === 0;
    }
    public satisfy(): boolean{
        if(this.second_array.length > 0){
            return this._compare() === this.second_array.length;
        }else{
            return this._compare() === this.fields.length;
        }
    }
    protected _compare():number{
        let _diff = 0;
        for (let i = 0; i < this.first_array.length; i++){
            const first = this.first_array[i] as T;
            let internal_match = 0;
            if(this.second_array.length > 0){
                for (let j = 0; j < this.second_array.length; j++){
                    const second = this.second_array[j] as T;
                    if (this.fields.length > 0){
                        for (let k = 0; k < this.fields.length; k++){
                            const field = this.fields[k] as U;
                            const first_v = first[field] as T[U];
                            const second_v = second[field] as T[U];
                            if(first_v === second_v){
                                internal_match++;
                                break;
                            }
                        }
                    } else {
                        if(first === second){
                            internal_match++;
                            break;
                        }
                    }
                }
            }else{
                const keys = Object.keys(first);
                for (let k = 0; k < this.fields.length; k++){
                    const field = this.fields[k] as U;
                    if(keys.includes(field)){
                        internal_match++;
                    }
                }
            }
            if(internal_match > 0){
                _diff++;
            }
        }
        return _diff;
    }
}
export default function compare<T, U extends string & keyof T>(primary_array: T[]){
    return new CompareInternal<T,U>(primary_array);
}
