function numbertype(number){
if (number<0){
    console.log("The given number is negative");
    console.log(typeof number);
}
else if(number==0){
    console.log("The given number is zero");
    console.log(typeof number);
}
else(number>0)
{
    console.log("The given number is positive");
    console.log(typeof number);
}
}
let number=21;
numbertype(number)