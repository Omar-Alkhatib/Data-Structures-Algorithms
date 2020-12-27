// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	let hash = '';

	for (i = 1; i <= n; i++) {
		let spaceLeft = '';
		let spaceRight = '';
		if (i === 1) {
			hash = hash + '#';
			for (l = 0; l < n - 1; l++) {
				spaceLeft = spaceLeft + ' ';
				spaceRight = spaceRight + ' ';
			}
		} else {
			hash = hash + '##';
			for (l = 0; l < n - i; l++) {
				spaceLeft = spaceLeft + ' ';
				spaceRight = spaceRight + ' ';
			}
		}
		console.log(`${spaceLeft}${hash}${spaceRight}`);
	}
}

module.exports = pyramid;
