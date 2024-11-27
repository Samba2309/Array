// 1.	Write a for loop to print the numbers from 1 to 20.

for(var i=1;i<=20;i++){
    console.log(i)
}

// 2.	Create a for loop to print the squares of numbers from 1 to 10.

for(var i=1;i<=10;i++){
    console.log(i*i)
}


// 3.	Use a for loop to print the first 10 multiples of 5

for(var b=1;b<=10;b++){
    console.log(b*5)
}

// 4.	Write a for loop to print numbers from 20 to 1 in reverse order.

for(var a=20;a>=1;a--){
    console.log(a)
}

// 5.	Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).

for(var c=10;c>=1;c--){
    console.log(c*2)
}

// 6.	Print each element of the array
	// Input: [10, 20, 30, 40, 50]

   
    var arr=[10, 20, 30, 40, 50];
    for(j=0;j<=arr.length-1;j++){
        console.log(arr[j]);
    }


    // 50  
// 7.	Print the index of each element along with its value
// 	Input: ['apple', 'banana', 'cherry']


var fruits=['apple', 'banana', 'cherry'];
for(i=0;i<fruits.length;i++){
    console.log('index',i,':' ,fruits[i])
}

