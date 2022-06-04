import {isEmpty, isNaN, isNil, isNull, isUndefined} from "lodash";

export const nullish = (content: any): boolean =>{
    return isEmpty(content) ||
        isNull(content) ||
        isNil(content) ||
        isNaN(content) ||
        isUndefined(content);
}

