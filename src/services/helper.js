export const percentageFunction = (value, width) => {
    return value
        .map((e) => {
            if (e.minWidth <= width && e.maxWidth >= width) return e.percent;
            else return null;
        })
        .filter((value) => value !== null)[0];
};

export const percent = (arrayOfPx, width) => {
    const output = arrayOfPx
        .map((e) => {
            if (width >= e.px && e.max >= width) return { px: e.px, percent: e.percent };
            else return null
        })
        .filter((value) => value !== undefined &&  value !== null)[0];
    return output

}; 