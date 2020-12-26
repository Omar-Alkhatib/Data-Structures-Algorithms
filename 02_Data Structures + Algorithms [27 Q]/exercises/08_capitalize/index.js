// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let words = str.split(' ');
	let result = [];
	for (i = 0; i < words.length; i++) {
		result.push(words[i].replace(words[i][0], words[i][0].toUpperCase()));
	}
	return result.join(' ');
}

module.exports = capitalize;
