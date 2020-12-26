// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	let hash = '';
	let space = '';
	for (i = 1; i <= n; i++) {
		hash = hash + '#';
		for (s = 0; s < n - i; s++) {
			space = space + ' ';
		}
		console.log(`${hash}${space}`);
		space = '';
	}
}

module.exports = steps;
