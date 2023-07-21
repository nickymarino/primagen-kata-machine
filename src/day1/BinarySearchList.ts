export default function bs_list(haystack: number[], needle: number): boolean {
    const firstLow = 0;
    const firstHigh = haystack.length;
    return search(haystack, needle, firstLow, firstHigh);
}

function search(haystack: number[], needle: number, low: number, high: number): boolean {
    if (high <= low) {
        return false;
    }

    const midpoint = Math.floor(low + (high - low) / 2);
    const midValue = haystack[midpoint];

    let newLow = low;
    let newHigh = high;

    if (midValue === needle) {
        return true;
    }

    if (needle > midValue) {
        newLow = midpoint + 1;
    } else {
        newHigh = midpoint;
    }

    return search(haystack, needle, newLow, newHigh);
}
