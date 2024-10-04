var n = 150;
var temp = n;
var sum = 0;

while(temp > 0){
   var digit = temp % 10;
   sum += digit ** 3;
   temp = parseInt(temp/10);
}

if(sum === n){
	console.log("Armstrong Number");
}else{
	console.log("Not an Armstrong Number");
}