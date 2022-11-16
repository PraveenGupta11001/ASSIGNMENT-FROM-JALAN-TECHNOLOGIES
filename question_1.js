//  [1, 3, 2, 7, 4, 6]

// importing module of prompt-sync for using input in node js
// this is constant and take 1 as time-complexity
const ps = require('prompt-sync');
const prompt = ps();

// declaring globally arrays arr and arr2;
// also take time complexity of 1 or T(1)
var arr =  [1, 3, 2, 7, 4, 6];
var arr2 = [];

// to get the length of an array
const N = arr.length;
console.log();
// also take time complexity of 1 or T(1) or constant

// output of the given array before performing any operations
console.log('The given array is : ');
console.log(arr);
// constant T(1)

// it it depend on the user for Time complexity
let d = prompt('Enter the value of d, d = 0 turn left to right and d = 1 is vice-versa : ');

// the left changing loop
let changeToLeft = (pt, p) => {
    // for left d = 0
    for(var i = 0; i<(N-p); i++){
        // this loop take T(N-p) ~ T(N), where as p is constant all depended on N
        var temp = arr[i];
        arr[i] = arr[pt];
        arr[pt] = temp;
        pt++;
    }
}

let changeToRight = (pt, p) => {
    // for right d = 1
    for(var i = 0,j = 0; i<N; i++){
        // this loop also take T(N-p) ~ T(N), where as p is constant all depended on N
        if(pt-- > 0)
            arr2[i] = arr[N-i-1];
        if(i>=p)
            arr2[i] = arr[i-2];
    }
    arr = arr2;
}

// rest all take constant T(1) or constant time-complexity 
if(d == 0){
    let p = prompt('Enter the value of p i.e., where 0<p<N, p is breaking point of array : ');
    if(p < N && p > 0){
        let pt = p;
        changeToLeft(pt, p);
        console.log(arr);
        console.log();
    }
    else{
        console.log('please check the value of p because it is out of constraints and try again');
    }
}
else if(d == 1){

    let p = prompt('Enter the value of p i.e., where 0<p<N, p is breaking point of array : ');
    if(p < N && p > 0){
        let pt = p;
        changeToRight(pt, p);
        console.log(arr);
        console.log();
    }
    else{
        console.log('please check the value of p because it is out of constraints and try again');
    }
}
else{
    console.log('Please enter the correct value of p and d to get accurate results.');
}