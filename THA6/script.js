//check array
a1='w3resource'
b1=[1,2,3,4]
console.log(Array.isArray(a1));
console.log(Array.isArray(b1));

//array_clone function
var arr=[12,25,33,41];
function clone_array(arr){
    const a2= arr.slice(0);
    return a2;
}
console.log(clone_array(arr));
var newarr= [12,24,[13,22]];
console.log(clone_array(newarr));

//first function
function first(arr, n){
    if(n===undefined){
        console.log(arr[0]);
    }
    else{
        const newArray= arr.slice(0,n);
        console.log(newArray);
    }

}
first(arr);
first(arr,2);

//join-String
var myColour=["Red", "Green","Blue", "Orange"];
console.log(myColour.join("+"));

//most-frequent
var testArr= [1,5,6,6,6,6, "hey", 3,5,2,"hey","hello"];
var freq={};
function mostFreq(arr){
    
    for(const i of testArr){
        if(freq[arr[i]]===undefined){
            freq[arr[i]]=0;
        }
        freq[arr[i]]++;
    }
    var maxvalue=0;
    var mostOcc;
    for (const i in freq ){
        if(freq[i]>maxvalue){
            maxvalue= freq[i];
            mostOcc=i;

        }
    }
    return mostOcc;
};

console.log(mostFreq(testArr));