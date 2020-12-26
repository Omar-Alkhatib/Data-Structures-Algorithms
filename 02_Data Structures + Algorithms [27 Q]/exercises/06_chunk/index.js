// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	let result = [];
	let subArray = [];
	if (size === 0 || size > array.length) {
		result = [[...array]];
		return result;
	}
	for (i = 0; i < array.length; i++) {
		if (i === 0 || i % size !== 0) {
			subArray.push(array[i]);
		} else {
			result.push(subArray);
			subArray = [];
			subArray.push(array[i]);
		}
	}
	result.push(subArray);
	return result;
}

module.exports = chunk;
