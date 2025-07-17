function validateCheck()
{
 const data=   document.getElementById('fname');

 if(data.value.trim()==='')
 {
    alert("Input is not Entered");
    return false;
 }

 return true;

}


function validateInput()
{
    const input=document.getElementById('email');

    if(input.value.trim()==="")
    {
        alert("The value has been not entered properly ");
        return false;

    }
    return true;
}



function  changeInput()
{
    const input=document.getElementById('password');
    alert(`The password value has been chaned to ${input.value}`);

}


