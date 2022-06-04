import {TSortOption} from "../../@types/TDistinctArray";
import {TDynamicObject} from "../../@types/TInternal";

export default class Distinct<T> {
    length: number;
    distinctKey: string;
    private primaryArray;
    constructor(key: string);
    at(index: number): T;
    replaceAt(index: number, value: T): void;
    replaceWhere(identifier: TDynamicObject, newVal: T): boolean;
    find(identifier: TDynamicObject): number;
    get(): T[];
    push(element: T): void;
    deleteWhere(key: string, expected: string): void;
    getWhere(key: string, expected: string): any;
    clear(): void;
    copy(new_source: T[]): void;
    toString(): string;
    sort(key: string, options?: TSortOption): void;
    private $sort;
    private filterArray;
}
