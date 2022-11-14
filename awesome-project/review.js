let arr=[1,2,3,4];

arr.splice(3,0,6);
console.log(arr)

for(i=0;i<arr.length-1;i++){
   for(j=0;j<arr.length-1-i;j++){
if(arr[j] < arr[j+1]){
    let x=arr[j+1]
    arr[j+1]=arr[j]
    arr[j]=x
}
   }
}

console.log(arr)

let a= 50;
let b=100;

a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);

let name="rushi"

let rev;
name=name.rev;
//console.log(rev)


function abc(){
   console.log("in")  ;
let a=b
a();
}

abc();