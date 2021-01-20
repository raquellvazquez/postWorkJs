
function deepEqual(a, b) {
    if(typeof(a) === "object" || typeof(b) === "object"){
      return Object.keys(a).toString() === Object.keys(b).toString() ? deepEqual(Object.values(a).toString(), Object.values(b).toString()) : false;
    }

    else if(typeof(a) != "number" && typeof(b) != "number"){
      var k=0;

      for(var i in a){
        if (a[i] === b[i]){
         
          k++;
        }
        else
          break;
      }

      return k === a.length ? true : false;
    }

    else
      return a === b ? true : false;
      
  }
  
  var john = {
    firstName: 'John',
    lastName: 'Doe'
  }
  

  console.log('Ejercicio 1 Test 1:', deepEqual(1, 1)) // true
  console.log('Ejercicio 1 Test 2:', deepEqual(1, '1')) // false
  console.log('Ejercicio 1 Test 3:', deepEqual(john, john)) // true
  console.log('Ejercicio 1 Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
  console.log('Ejercicio 1 Test 5:', deepEqual(john, { firstName: 'John' })) // false