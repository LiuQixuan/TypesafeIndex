export declare function getTypesafeIndexHandle<T, K = keyof T>(isCaseSensitive?: boolean): (object: T, index: string, fallbackIndex?: string) => K;
export declare function getTypesafeIndexBind<T, K = keyof T>(object: T, isCaseSensitive?: boolean): (index: string, fallbackIndex?: string) => K;
//# sourceMappingURL=index.d.ts.map