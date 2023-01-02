export function queryCheck(query: string, param: string) {
    const paramArray = query.split('&').filter((word) => word.startsWith(`${param}=`));
    let paramNumber = 0;
    if (paramArray.length) {
        const tempNumber = +paramArray[paramArray.length - 1].split('=')[1];
        if (Number.isInteger(tempNumber) && tempNumber > 0) {
            paramNumber = tempNumber;
        }
    }
    return paramNumber;
}
