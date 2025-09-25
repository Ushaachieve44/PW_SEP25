function rs()
{
 let companyname = "testleaf";
 let reverse = companyname.split("")
    let stringreverse = "";
 for(let i=reverse.length-1; i>=0; i--)
    {
  let stringreverse = reverse[i];
  //return stringreverse;
  console.log("RS:", stringreverse);
 }
}
rs();