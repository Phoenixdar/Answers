function solveEquation(a, b, c) {
  let arr = [1,2];
  // код для задачи №1 писать здесь
  
   
  let d = b**2 - 4*a*c;
 
	
	
  if( d == 0){
	  let x1 = (-b)/(2*a);
	  let x2 = x1;
	  arr[0] = x1;
	  arr.splice(1,1);
   }
  else if(d < 0){
	   arr.splice(0,2);
   }
  else if(d > 0){
	   let x1 = ((-b+ Math.sqrt(d))/(2*a));
	   let x2 = ((-b- Math.sqrt(d))/(2*a));
	   arr[0] = x1;
	   arr[1] = x2;
   }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
