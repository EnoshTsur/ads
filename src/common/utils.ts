export function isNullIn(...args: Array<any>): boolean {
    return args.filter(e => e == null).length > 0;
}