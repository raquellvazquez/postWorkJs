function frequency(string) {
    var cont=[];
    str = string.replace(/\s/g, "").toLowerCase().split('');

    for (var i = 0; i < string.length; i++) {     
      letra=str[i].charCodeAt();                 
      cont[letra]==undefined ? cont[letra]=1 : cont[letra]++  
    };

    total={};  
                                       
    for (var i in cont)                          
      total[String.fromCharCode(i)]=cont[i];     
    return total;
  }
  console.log('Ejercicio 3 Test 1:', frequency('cccbbbaaa'))
  // {a: 3, b: 3, c: 3}
  console.log('Ejercicio 3 Test 2', frequency('www.bedu.org'))
  // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
  console.log('Ejercicio 3 Test 3:', frequency('john.doe@domain.com'))
  // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}