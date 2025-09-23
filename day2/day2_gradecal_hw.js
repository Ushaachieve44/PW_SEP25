function gradecalc(){
    if(markscored>=90)
    {
        console.log("Passed with distinction");
    }
    else if(markscored<90){
        console.log("Passed with firstclass");

    }
    else if(markscored<70)
    {
        console.log("Passed with secondclass");

}
}
let markscored=90;
gradecalc()
