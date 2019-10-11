function check(array) {
  var reversed = array.slice().sort(),
      count = 0,
      i = array.length,
      p;

  while (i--) {
      if (array[i] === reversed[i]) continue;
      p = array.indexOf(reversed[i]);
      [array[i], array[p]] = [array[p], array[i]];
      count++;
  }
  console.log(...array);
  return count;
}

console.log(check(['r', 'b', 'r'])); // 3
