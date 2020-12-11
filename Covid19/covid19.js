function myfunction(){
    alert("Nice to meet you!");
}

function myview(){
    var name=document.getElementById("name").value;
    if(name=="")
    alert("Please enter a valid name");
    else
    {
    document.getElementById("result").innerHTML="Welcome "+name+" in this experimenting webpage. We hope you are fine.";
    alert("Thank you "+name+" for visting our webpage!");
    }
}