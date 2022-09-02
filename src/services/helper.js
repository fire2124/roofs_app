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
        .filter((value) => value !== undefined && value !== null)[0];
    return output

};

export const getImages = (current, arrayOfImages, numberOfImages) => {
    if (current === 0) {
        return { together: arrayOfImages.slice(0, numberOfImages), current: 0 };
    }
    const firstHalf = arrayOfImages.slice(current - 1, current)
    const secondHalf = arrayOfImages.slice(current, current + numberOfImages - 1)
    const together = firstHalf.concat(secondHalf).reduce((acc, current) => {
        const x = acc.find(
            (item) =>
                item.original === current.original
        );
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);
    
    let newCurrent = together.indexOf(arrayOfImages[current])

    if (arrayOfImages.length <= current + numberOfImages) {
        const output = arrayOfImages.slice(arrayOfImages.length - numberOfImages, arrayOfImages.length)
        newCurrent = output.indexOf(arrayOfImages[current])
        return { together: output, current: newCurrent };
    }
    return { together: together, current: newCurrent };
}