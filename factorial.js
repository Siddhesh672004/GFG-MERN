function fact(n){
	if(n === 0 || n === 0){
  	return 1;
  }
  
  var ans = n * fact(n-1);
  return ans;
}

var n = parseInt(prompt("Enter the Number: "));
var ans1 = fact(n);
console.log(ans1);