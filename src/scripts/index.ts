import {isEmpty, isNaN, isNil, isNull, isUndefined} from "lodash";
import {Buffer} from "buffer";
import * as cProcess from "child_process";

export const nullish = (content: any): boolean =>{
    return isEmpty(content) ||
        isNull(content) ||
        isNil(content) ||
        isNaN(content) ||
        isUndefined(content);
}
export const noop = (content: any): undefined|boolean =>{
    return isUndefined(content) ? undefined : true;
}
export function rename_prop<T>(obj: Partial<T>, old_prop: string[], new_prop: string[]):T{
    const new_obj: {[key:string]:any} = {};
    for (const objKey in obj) {
        if(obj.hasOwnProperty(objKey)){
            let found = -1;
            for (let i = 0; i < old_prop.length; i++){
                const oldKey = old_prop[i];
                if(oldKey === objKey){
                    found = i;
                }
            }
            if(found !== -1){
                const newKey = new_prop[found];
                new_obj[newKey] = obj[objKey];
            }else{
                new_obj[objKey] = obj[objKey];
            }
        }
    }
    return new_obj as T;
}
export const compare_shallow = (after,before)=>{
    for(const key in after) {
        if(!(key in after) || after[key] !== before[key]) {
            return false;
        }
    }
    for(const key in before) {
        if(!(key in after) || after[key] !== before[key]) {
            return false;
        }
    }
    return true;
}
export const readable = (obj: object) =>{
    for (const objKey in obj) {
        if(obj.hasOwnProperty(objKey)){
            if(typeof obj[objKey] === 'number'){
                obj[objKey] = parseFloat(parseFloat(obj[objKey]).toFixed(3));
            }
            if(Buffer.isBuffer(obj[objKey])){
                obj[objKey] = obj[objKey].toString('utf8');
            }
        }
    }
    return obj;
}
export const uuidV4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export const execute_shell = (path: string):Promise<any>=>{
    return new Promise((resolve)=>{
       cProcess.exec(path,resolve);
    });
}
