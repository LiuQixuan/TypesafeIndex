export function getTypesafeIndexHandle(isCaseSensitive = false) {
    return (object, index, fallbackIndex = Object.keys(object)[0]) => {
        let safeIndex = isCaseSensitive ? index : index.toLowerCase();
        if (!Object.keys(object).includes(safeIndex)) {
            safeIndex = fallbackIndex;
        }
        return safeIndex;
    };
}
export function getTypesafeIndexBind(object, isCaseSensitive = false) {
    return (index, fallbackIndex = Object.keys(object)[0]) => {
        let safeIndex = isCaseSensitive ? index : index.toLowerCase();
        if (!Object.keys(object).includes(safeIndex)) {
            safeIndex = fallbackIndex;
        }
        return safeIndex;
    };
}
//# sourceMappingURL=index.js.map