"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSameArrayOrObject = void 0;
const lodash_1 = require("lodash");
const checkSameArrayOrObject = (arr1, arr2) => {
    if (lodash_1.default.isArray(arr1) && lodash_1.default.isArray(arr2)) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        const sortedArr1 = lodash_1.default.sortBy(arr1, (obj) => JSON.stringify(lodash_1.default.sortBy(lodash_1.default.toPairs(obj))));
        const sortedArr2 = lodash_1.default.sortBy(arr2, (obj) => JSON.stringify(lodash_1.default.sortBy(lodash_1.default.toPairs(obj))));
        return lodash_1.default.isEqual(sortedArr1, sortedArr2);
    }
    else if (lodash_1.default.isObject(arr1) && lodash_1.default.isObject(arr2)) {
        return lodash_1.default.isEqual(arr1, arr2);
    }
    else {
        return false;
    }
};
exports.checkSameArrayOrObject = checkSameArrayOrObject;
//# sourceMappingURL=util.js.map