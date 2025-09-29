function findduplicates(){
nums[i] = [2, 4, 7, 8, 11, 14];
nums1[j] = [2, 4, 7, 9, 10, 13];
let target = 18;
for(let i=0;i<nums.length-1;i++)
{
for(let j=0;j<=nums1.length-1;j++)
{
if((nums[i]=== nums1[j])) 
    {
console.log(i);
}
else{
console.log(i,j);
} 
}}}
findduplicates();