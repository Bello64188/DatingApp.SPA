export declare function latinize(str: string): string;
export declare function escapeRegexp(queryToEscape: string): string;
export declare function tokenize(str: string, wordRegexDelimiters?: string, phraseRegexDelimiters?: string, delimitersForMultipleSearch?: string): Array<string>;
export declare function getValueFromObject(object: string | Record<string | number, any>, option?: string): string;
