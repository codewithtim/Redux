function square(a) {
	return a * a;
}

function square(a) {
  callToDb(a)
	return a * a;
}

// [1,2,3]
function squareAll(arrNums) {
	return arrNums.map(square);
}
// [1,4,9]

// [1,4,9]
function squareAll(arrNums) {
  for (var i = 0; i < arrNums.length; i++) {
    arrNums[i] = arrNums[i] * arrNums[i];
  }
}
