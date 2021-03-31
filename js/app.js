let moves = 0;

const changeFields = (currentField, newField) => {
	let aux = document.getElementById(currentField).className;
	document.getElementById(currentField).className = document.getElementById(
		newField
	).className;
	document.getElementById(newField).className = aux;
};

const shuffle = () => {
	for (let row = 1; row <= 4; row++) {
		for (let col = 1; col <= 4; col++) {
			let newRow = Math.floor(Math.random() * 4) + 1;
			let newCol = Math.floor(Math.random() * 4) + 1;

			changeFields(
				'field'.concat(row, col),
				'field'.concat(newRow, newCol)
			);
		}
	}
	moves = 0;
	document.getElementById('failure').style.visibility = 'visible';
	document.getElementById('success').style.visibility = 'hidden';
	document.querySelector('#moves > span').innerHTML = moves;
};

const move = (row, col) => {
	let piece = document.getElementById('field'.concat(row, col));

	if (piece.className != 'piece16') {
		if (col < 4) {
			if (
				document.getElementById('field'.concat(row, col + 1))
					.className == 'piece16'
			) {
				changeFields(
					'field'.concat(row, col),
					'field'.concat(row, col + 1)
				);
				moves++;
			}
		}

		if (col > 1) {
			if (
				document.getElementById('field'.concat(row, col - 1))
					.className == 'piece16'
			) {
				changeFields(
					'field'.concat(row, col),
					'field'.concat(row, col - 1)
				);
				moves++;
			}
		}

		if (row > 1) {
			if (
				document.getElementById('field'.concat(row - 1, col))
					.className == 'piece16'
			) {
				changeFields(
					'field'.concat(row, col),
					'field'.concat(row - 1, col)
				);
				moves++;
			}
		}

		if (row < 4) {
			if (
				document.getElementById('field'.concat(row + 1, col))
					.className == 'piece16'
			) {
				changeFields(
					'field'.concat(row, col),
					'field'.concat(row + 1, col)
				);
				moves++;
			}
		}
		document.querySelector('#moves > span').innerHTML = moves;
		checkSolved();
	}
};

const checkSolved = () => {
	if (
		document.getElementById('field11').className == 'piece1' &&
		document.getElementById('field12').className == 'piece2' &&
		document.getElementById('field13').className == 'piece3' &&
		document.getElementById('field14').className == 'piece4' &&
		document.getElementById('field21').className == 'piece5' &&
		document.getElementById('field22').className == 'piece6' &&
		document.getElementById('field23').className == 'piece7' &&
		document.getElementById('field24').className == 'piece8' &&
		document.getElementById('field31').className == 'piece9' &&
		document.getElementById('field32').className == 'piece10' &&
		document.getElementById('field33').className == 'piece11' &&
		document.getElementById('field34').className == 'piece12' &&
		document.getElementById('field41').className == 'piece13' &&
		document.getElementById('field42').className == 'piece14' &&
		document.getElementById('field43').className == 'piece15' &&
		document.getElementById('field44').className == 'piece16'
	) {
		document.getElementById('success').style.visibility = 'visible';
		document.getElementById('failure').style.visibility = 'hidden';
	} else {
		document.getElementById('failure').style.visibility = 'visible';
		document.getElementById('success').style.visibility = 'hidden';
	}
};

const showSolution = () => {
	document.getElementById('field11').className = 'piece1';
	document.getElementById('field12').className = 'piece2';
	document.getElementById('field13').className = 'piece3';
	document.getElementById('field14').className = 'piece4';
	document.getElementById('field21').className = 'piece5';
	document.getElementById('field22').className = 'piece6';
	document.getElementById('field23').className = 'piece7';
	document.getElementById('field24').className = 'piece8';
	document.getElementById('field31').className = 'piece9';
	document.getElementById('field32').className = 'piece10';
	document.getElementById('field33').className = 'piece11';
	document.getElementById('field34').className = 'piece12';
	document.getElementById('field41').className = 'piece13';
	document.getElementById('field42').className = 'piece14';
	document.getElementById('field43').className = 'piece15';
	document.getElementById('field44').className = 'piece16';
	checkSolved();
};

shuffle();
