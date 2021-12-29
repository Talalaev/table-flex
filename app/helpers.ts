export const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

export function sortName(field: ((item: any) => any), compare?: (x: string, y: string) => number): (a: any, b: any) => number;
export function sortName(field: string, compare?: (x: string, y: string) => number): (a: any, b: any) => number;
export function sortName(field: any, compare?: any): any {
    field = field === undefined ? 'title' : field;

    return (a: any, b: any) => {
        const isFieldString = typeof field === 'string';

        const x = isFieldString
            ? field === '' ? a : a[field]
            : field(a);
        const y = isFieldString
            ? field === '' ? b : b[field]
            : field(b);

        return compare ? compare(x, y) : collator.compare(x, y);
    };
}

export const reversCompare = (v: number): number => {
    return v > 0 ? -1 : 1;
};
