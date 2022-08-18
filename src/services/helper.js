export const percentageFunction = (value, width) => {
    return value
        .map((e) => {
            if (e.minWidth <= width && e.maxWidth >= width) return e.percent;
            else return null;
        })
        .filter((value) => value !== null)[0];
};