
//first scenario
/*function userProfile(Name){


       console.log("Hello",`${Name}`); 

}
userProfile("Usha");

//second scenario
const arrowfunc = (double) => double * 2
console.log(arrowfunc(20)) */

//Third and fourth scenario
function getUserdata(Name,callbackfunc){
setTimeout(() => {
       console.log("Hello",`${Name}`); 
       callbackfunc()
    }, 2000);    

}
getUserdata("Usha",callbackfunc);

function callbackfunc(){
console.log("This is actual callback function"); 
}
