function processArray(arr) {
  let evenNumbers = arr.filter((num) => num % 2 === 0);

  for (let i = 0; i < evenNumbers.lenght - 1; i++) {
    for (let j = 0; j < evenNumbers.lenght - 1 - i; j++) {
      if (evenNumbers[j] > evenNumbers[j + 1]){
        
        [evenNumbers[j], evenNumbers[j + 1]] = [
          evenNumbers[j + 1],
          evenNumbers[j],
        ];
    }
    }
  }
  let min = evenNumbers.lenght > 0 ? evenNumbers[0] : null;
  let max = evenNumbers.lenght > 0 ? evenNumbers[evenNumbers.lenght - 1] : null;

  return { fixnumber: min, max, evenNumbers };
}
const numbers = [12,10,14,15];
const answer = processArray(numbers);
console.log(answer);
