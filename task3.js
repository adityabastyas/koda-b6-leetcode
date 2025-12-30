//2626. Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let initValue = init;

  for (let i = 0; i < nums.length; i++) {
    initValue = fn(initValue, nums[i]);
  }

  return initValue;
};
