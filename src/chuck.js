
function chunk(array, size) {
  let temporal= [];

  for(let i=0; i <= array.length - 1; i+= size) {
    let parte = array.slice(i, i+size);
    temporal.push(parte)
  }

  return temporal;
};
var data = [1, 2, 3, 4, 5, 6, 7, 8];


console.log('Ejercicio 2 Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Ejercicio 2 Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Ejercicio 2 Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]