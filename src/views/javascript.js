function validation()
{
    let usr= document.getElementById("user");
    let psw= document.getElementById("pass");
    if(usr.value=="admin" && psw.value=="123456")
    {
        console.log("validation");
        return true;
        
    }
    else{
        alert("Invalid Username and Password");
        return false;
    }
    
}
//form reg
let name=document.getElementById("name");
let rpsw=document.getElementById("Password");
let repsw=document.getElementById("rePassword");
let mob=document.getElementById("mobile");
let nam=document.getElementById("name");
let nameMsg=document.getElementById("name-msg");

function nameVal()
{
    if((/[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/).test(nam.value))
    {
        nameMsg.innerHTML="";
        name.style.borderColor= "";
        return true;

    }
    else
    {
        name.style.borderColor= "red";
        nameMsg.innerHTML="Invalid name";
    }

}
function mobileV()
{
    
    let mobmsg=document.getElementById("mob-msg");
    let mobileReg=/^([9876][0-9]{9})+/;
    let mobileReg2=/^([0-9]{3}[\-|\ |\.]{0,1})([0-9]{3}[\-|\ |\.]{0,1})([0-9]{4})/;
    if(mobileReg.test(mob.value)||mobileReg2.test(mob.value))
    {
        mobmsg.innerHTML="";
        return true;
    }
    else
    {
        mobmsg.innerHTML="Enter a valid mobile number";
    }
}

function confirm()
{
    let repswMsg=document.getElementById("rpass-msg");
        if((rpsw.value)==(repsw.value))
        {
            repswMsg.innerHTML="";
            return true;
         }
         else
         {
            repswMsg.innerHTML="Password not matching";
         }
}

function regSubmit()
{
   if( nameVal() && eValidation() && mobileV() && confirm())
   {
       return true;
   }
   else
   {
        alert("Please complete the form");
       return false
       
   }
}