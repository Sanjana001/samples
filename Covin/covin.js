function myfunction(){
    alert("Welcome to my webpage.");
}

function myselect(){
    var i;
    var text="<ul>";
    var x=document.getElementById("result").value;
    if(x=="What do you want to learn")
        alert("Please choose a valid option");
    else if(x=="Origin")
    {
        document.getElementById("output").innerHTML="This virus was originated from Wuhan which is situated in China. It had reported its first case on December 2019. It is an infectious disease which is caused by the virus <strong>SARS-CoV2</strong>. This virus belongs to the family of coronaviruses which has come from animals. SARS in 2002 which had come from sivet cats and MERS which had come from camels are also the members of this family. There are so much rumours about the origin of this virus like some said that this virus has come from bats whereas others say that this virus was bioengineered as a bioweapon in the Wuhan Institue of Virlogy etc."
    }
    else if(x=="How it spreads")
    {
        document.getElementById("output").innerHTML="As this is an infectious disease it spreads through the droplets of cough or sneeze. This virus is also transmitted through touching the surface or objects around the infected person or coming into the contact with the infected person. Close contact includes the distance which is less than 6feet."
    }
    else if(x=="Symptoms")
    {
        var array=["Cough","Sore Throat","Tiredness","Difficulty breathing(severe cases)"];
        for(i=0;i<array.length;i++)
        {
            text+= '<li>' + array[i] + '</li>';
        }
        text+='</ul>'
        document.getElementById("output").innerHTML=text;
    }
    else if(x=="Precautions")
    {
        var array1=["Wash your hands for atleast 20 seconds.","Avoid touching your eyes, nose and mouth.","Cover your cough or sneeze with a tissue and dispose it properly.","Avoid to come in contact with the people who are sick.","Stay home when you are sick.","If you are sick then immediately consult with the doctors."];
        for(i=0;i<array1.length;i++)
        {
            text+= '<li>' + array1[i] +'</li>';
        }
        text+='</ul>'
        document.getElementById("output").innerHTML=text;
    }
}

function myprompt(){
    var name=prompt("Please enter your name","Sonu");
    if(name=="") alert("Please enter a valid name");
    else alert("Thank you "+name+" for visiting my webpage. Stay safe,Stay home.");
}

function checkmessage1(s){
    var y=document.getElementById("field1").value;
    if(y=="March" || y=="march" || y=="MARCH")
    {
        if(s==29)
        alert("On March 29 India had reported around <strong>1,024</strong> cases with <strong>27</strong> death cases and <strong>95</strong> recovered cases.");
        else if(s==30)
        alert("On March 30 India had reported around <strong>1,071</strong> cases with <strong>29</strong> death cases and <strong>100</strong> recovered cases.");
        else if(s==31)
        alert("On March 31 India had reported around <strong>1,251</strong> cases with <strong>32</strong> death cases and <strong>102</strong> recovered cases.");
    }
    else if(y=="April" ||y=="april" || y=="APRIL")
    {
        if(s==1)
        alert("On 1st April India had reported around <strong>1,637</strong> cases with <strong>45</strong> death cases and <strong>148</strong> recovered cases.");
        else if(s==2)
        alert("On 2nd April India had reported around <strong>2,341</strong> cases with <strong>68</strong> death cases and <strong>177</strong> recovered cases.");
        else if(s==3)
        alert("On 3rd April India had reported around <strong>2,567</strong> cases with <strong>72</strong> death cases and <strong>192</strong> recovered cases.");
         else if(s==4)
        alert("On 4th April India had reported around <strong>3,082</strong> cases with <strong>86</strong> death cases and <strong>229</strong> recovered cases.");
         else if(s==5)
         alert("On 5th April India had reported around <strong>3,580</strong> cases with <strong>83</strong> death cases and <strong>275</strong> recovered cases.");
    }
    else
    {
        document.getElementById("message1").innerHTML="Not Acceptable";
        alert("Please enter the date between 29 March to 5 April");
    }
}

function checkmessage(){
    var x=document.getElementById("field").value;
    var y=document.getElementById("field1").value;
    if(x>=29 || x<=5)
    {
       if(y=="March")
       {
           if(x==29)
        document.getElementById("output1").innerHTML="On March 29 India had reported around 1,024 cases with 27 death cases and 95 recovered cases.";
        else if(x==30)
        document.getElementById("output1").innerHTML="On March 30 India had reported around 1,071 cases with 29 death cases and 100 recovered cases.";
        else if(x==31)
        document.getElementById("output1").innerHTML="On March 31 India had reported around 1,251 cases with 32 death cases and 102 recovered cases.";
       }
       else if(y=="April")
       {
            if(x==1)
        document.getElementById("output1").innerHTML="On 1st April India had reported around 1,637 cases with 45 death cases and 148 recovered cases.";
        else if(x==2)
        document.getElementById("output1").innerHTML="On 2nd April India had reported around 2,341 cases with 68 death cases and 177 recovered cases.";
        else if(x==3)
        document.getElementById("output1").innerHTML="On 3rd April India had reported around 2,567 cases with 72 death cases and 192 recovered cases.";
         else if(x==4)
        document.getElementById("output1").innerHTML="On 4th April India had reported around 3,082 cases with 86 death cases and 229 recovered cases.";
         else if(x==5)
         document.getElementById("output1").innerHTML="On 5th April India had reported around 3,580 cases with 83 death cases and 275 recovered cases.";
       }
       else alert("Please choose a valid option");
    }
    else
    {
        document.getElementById("message").innerHTML="Not Acceptable";
        alert("Please enter the number between 29 March to 5 April");
    }
}