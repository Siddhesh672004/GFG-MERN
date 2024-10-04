const getSecondLargest = (arr = []) =>{
	let largest = arr[0];
   let secondLargest = arr[0];
   
   for(let i=0; i<arr.length; i++){
   	if(arr[i] > largest){
      	secondLargest = largest;
         largest = arr[i];
      } else if(arr[i] > secondLargest){
      	secondLargest = arr[i];
      }
   }
   return secondLargest;
}


arr = [1, 5,8,9,7,5,55,44,45,12,]
console.log(getSecondLargest(arr))
