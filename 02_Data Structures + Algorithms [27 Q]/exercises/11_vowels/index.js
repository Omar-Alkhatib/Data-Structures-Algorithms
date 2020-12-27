// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let result = 0;
	for (letter of str.toLowerCase()) {
		if (vowels.includes(letter)) {
			result++;
		}
	}
	return result;
}

module.exports = vowels;
