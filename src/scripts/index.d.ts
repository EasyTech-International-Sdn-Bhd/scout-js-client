export declare const nullish: (content: any) => boolean;
export declare const noop: (content: any) => undefined | boolean;
export declare function rename_prop<T>(obj: Partial<T>, old_prop: string[], new_prop: string[]): T;
export declare const compare_shallow: (after: any, before: any) => boolean;
export declare const readable: (obj: object) => object;
export declare const uuidV4: () => string;
