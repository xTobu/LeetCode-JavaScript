/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 移動所有的零到陣列最後面, 且不能新建多的陣列.
 *
 * 思路為遍歷每個元素,
 * 如果遇到 0 , 就忽略
 *
 * 遇到不是 0 ,
 * 就將該元素 nums[i] 的值放到 nums[position],
 * 並將 position + 1
 *
 * 以次類推,
 * nums 全部遍歷完之後,
 * 全部非零元素就會依照原本順序, 排在陣列最前面了.
 *
 * 之後再從該陣列位置的 position 為起始,
 * 將後面的值改成 0 , 即可.
 * 
 * 例如：
 * position = 0, i = 0, 
 * [0, 1, 0, 3, 12], 
 * nums[i] = 0, 忽略
 * 
 * position = 0, i = 1, 
 * [0, 1, 0, 3, 12], 
 * nums[i] = 1, 
 * nums[position] = nums[i]
 * [1, 1, 0, 3, 12]
 * position + 1 
 * 
 * position = 1, i = 2, 
 * [1, 1, 0, 3, 12], 
 * nums[i] = 0, 忽略
 * 
 * position = 1, i = 3, 
 * [1, 1, 0, 3, 12], 
 * nums[i] = 3,
 * nums[position] = nums[i]
 * [1, 3, 0, 3, 12]
 * position + 1 
 * 
 * position = 2, i = 4, 
 * [1, 3, 0, 3, 12], 
 * nums[i] = 12,
 * nums[position] = nums[i]
 * [1, 3, 12, 3, 12]
 * position + 1 
 * 
 * 最後將陣列從 position 開始後的元素都置換成 0 
 * 
 */
var moveZeroes = function(nums) {
	let position = 0,
		len = nums.length;

	for (let i = 0; i < len; i++) {
		if (nums[i] !== 0) {
			nums[position] = nums[i];
			position++;
		}
	}

	for (let i = position; i < len; i++) {
		nums[i] = 0;
	}
	// return nums;
};
// console.log(moveZeroes([0, 1, 0, 3, 12]));
