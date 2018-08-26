function getMin() {
  let arr = Array.from(arguments);

  for (let i = arr.length - 1; i > 0; i--) {
    let counter = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp;
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        counter++;
      }
    }
    if (counter == 0) {
      break;
    }
  };
  return arr[0];
}