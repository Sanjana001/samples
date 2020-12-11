function myfunction1(){
    var name=document.getElementById("name").value;
    var regix=/^[0-9\~\`\@\#\$\%\&\^\*\(\)\-\_\=\+\/]$/;
    var  ct=0;
    if(name.length<3)
    alert("Please enter your name properly.");
    else
    {
        for(var i=0;i<name.length;i++)
        {
            if(regix.test(name[i]))
            ct++;
        }
        if(ct!=0)
        {
            document.getElementById("nameprompt").style.color="Red";
            document.getElementById("nameprompt").innerHTML="Not Accepted";
        }
        else
        {
            document.getElementById("nameprompt").style.color="Green";
            document.getElementById("nameprompt").innerHTML="Valid";
        }
    }
}


function myfunction2(){
    var name=document.getElementById("last").value;
    var regix=/^[0-9\~\`\@\#\$\%\&\^\*\(\)\-\_\=\+\/]$/;
    var  ct=0;
    if(name.length<3)
    alert("Please enter your last name properly.");
    else
    {
        for(var i=0;i<name.length;i++)
        {
            if(regix.test(name[i]))
            ct++;
        }
        if(ct!=0)
        {
            document.getElementById("lastprompt").style.color="Red";
            document.getElementById("lastprompt").innerHTML="Not Accepted";
        }
        else
        {
            document.getElementById("lastprompt").style.color="Green";
            document.getElementById("lastprompt").innerHTML="Valid";
        }
    }
}


function myfunction3(){
    var name=document.getElementById("bvr").value;
    if(name!="")
        alert("If possible then we will try to make your dish in that flavour");
}


function myfunction4(){
    var name=document.getElementById("father").value;
    var regix=/^[0-9\~\`\@\#\$\%\&\^\*\(\)\-\_\=\+\/]$/;
    var  ct=0;
    if(name.length<6)
    alert("Please enter your father's name properly.");
    else
    {
        for(var i=0;i<name.length;i++)
        {
            if(regix.test(name[i]))
            ct++;
        }
        if(ct!=0)
        {
            document.getElementById("fatherprompt").style.color="Red";
            document.getElementById("fatherprompt").innerHTML="Not Accepted";
        }
        else
        {
            document.getElementById("fatherprompt").style.color="Green";
            document.getElementById("fatherprompt").innerHTML="Valid";
        }
    }
}


function myfunction5(){
    var name=document.getElementById("phone").value;
    var regix=/^[A-Za-z\~\`\@\#\$\%\&\^\*\(\)\-\_\=\+\/]$/;
    var  ct=0;
    if(name.length<10 || name.length>10)
    alert("Please enter your number properly.");
    else
    {
        for(var i=0;i<name.length;i++)
        {
            if(regix.test(name[i]))
            ct++;
        }
        if(ct!=0)
        {
            document.getElementById("phoneprompt").style.color="Red";
            document.getElementById("phoneprompt").innerHTML="Not Accepted";
        }
        else if(name[0]==9)
        {
            document.getElementById("phoneprompt").style.color="Green";
            document.getElementById("phoneprompt").innerHTML="Valid";
        }
        else
        {
             document.getElementById("phoneprompt").style.color="Red";
            document.getElementById("phoneprompt").innerHTML="Not Accepted";
        }
    }
}


function myfunction6(){
    var name=document.getElementById("address").value;
    if(name[0]!="#") alert("Enter your address properly like #2898, xydbsh.");
}


function myfunction7(){
    var pass0=document.getElementById("pass0").value;
    var pass1=document.getElementById("pass1").value;
    if(pass0!=pass1)
    {
        alert("Sorry your password didn't match with the first one. Please try again");
    }
}


function myfunction8(){
   var name=document.getElementById("name").value;
   var num=document.getElementById("phone").value;
   var ad=document.getElementById("address").value;
   if(name!="" && ad!="" && num!="") alert("Thank You. Your order will be delivered in 1 hour and you have to pay the payment on delivery");
   else alert("You have not completed the form");
}


function myfunction9(){
    var add=document.getElementById("add").value;
    var ct=0;
    if(add.length<6) alert("Please your complete id");
    else{
        for(var i=4;i<add.length;i++){
            if(add[i]=="@") ct++;
        }
        if(ct!=0){
            document.getElementById("addprompt").style.color="Green";
            document.getElementById("addprompt").innerHTML="Valid"; 
        }
        else{
            document.getElementById("addprompt").style.color="Red";
            document.getElementById("addprompt").innerHTML="Not Accepted";
        }
    }
}