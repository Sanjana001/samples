function myfunction(){
    var name=document.getElementById("name").value;
    if(name=="Yes" || name=="yes" || name=="YES")
    {
        alert("Thank You");
        return true;
    }
    else if(name=="No" || name=="NO" || name=="no")
    {
        alert("Sorry for dissapointing you");
        return false;
    }
    else
    {
        alert("Please type either Yes or No");
        return false;
    }
}