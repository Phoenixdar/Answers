function compareArrays(arr1, arr2) {
  let result;

  result =  JSON.stringify(arr1) == JSON.stringify(arr2);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  let result = arr.filter(function(element) {
	return ((element > 0 && element % 3 == 0) );});
	resultArr = result.map(val => val*10);
console.log(resultArr); 


  return resultArr; // array
}
