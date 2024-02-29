import _ from "lodash";

export const checkSameArrayOrObject = <T extends object>(
  arr1: T[],
  arr2: T[]
): boolean => {
  if (_.isArray(arr1) && _.isArray(arr2)) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    const sortedArr1 = _.sortBy(arr1, (obj) =>
      JSON.stringify(_.sortBy(_.toPairs(obj)))
    );
    const sortedArr2 = _.sortBy(arr2, (obj) =>
      JSON.stringify(_.sortBy(_.toPairs(obj)))
    );

    return _.isEqual(sortedArr1, sortedArr2);
  } else if (_.isObject(arr1) && _.isObject(arr2)) {
    return _.isEqual(arr1, arr2);
  } else {
    return false;
  }
};
