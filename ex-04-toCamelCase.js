
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */



 // ++ YOUR CODE HERE





function toCamelCase(str) {
  // console.log(hola);
  var arrayString= str.toLowerCase().split(' ')
  // console.log(">>>>>>>>>>>>",  arrayString);
  var camelCase = []
  for (var i = 2; i < arrayString.length; i++) {
  // console.log(arrayString[i]);
  var cadena =   arrayString[i]

      cadena = cadena[0].toUpperCase() + cadena.substring(1)
      // console.log(cadena =cadena[0].toUpperCase()+ cadena.substring(1));
      camelCase = camelCase + cadena


  }
console.log(camelCase);
return camelCase
}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: toCamelCase', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs:
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert( toCamelCase("fetch records") === 'fetchRecords' )
console.assert( toCamelCase("create table row") === 'createTableRow' )
console.assert( toCamelCase("convert to HTML") === 'convertToHtml' )
console.assert( toCamelCase("get user account ID") === 'getUserAccountId' )


/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
