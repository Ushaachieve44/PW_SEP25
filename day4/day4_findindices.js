function findindices(){
let nums = [2, 4, 7, 8, 11, 14];  
let target = 18;
for(let i=0;i<nums.length-1;i++)
{
for(let j=i+1;j<=nums.length-1;j++)
{
if((nums[i]+nums[j]) == target)
    {
             let result= "";
//result[i] = nums[i]+nums[j];
console.log("The indices are:",i,j);
}}}}
findindices();