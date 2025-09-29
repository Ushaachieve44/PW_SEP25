let browser = "chrome"
function getBrowserversion(browser,callbackfunc){
setTimeout(() => {
       console.log(browser); 
       callbackfunc()
    }, 2000);    

}
getBrowserversion(browser,callbackfunc);

function callbackfunc(){
let version ='12.3.0';
console.log(`${version}`); 
}
