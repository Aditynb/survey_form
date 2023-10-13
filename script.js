const fname=document.getElementById('First-Name');
const lname=document.getElementById('Last-Name');
const dob=document.getElementById('date');
const country=document.getElementById('count');
const ele = document.getElementsByName('gender');
const prof=document.getElementById('profession');
const email=document.getElementById('Email');
const phone=document.getElementById('ph-no.');
const submit=document.getElementById('btn1');
const reset=document.getElementById('btn2');
var gender;
let lnamedata;
let dobdata;
let countrydata;
let profdata;
let emaildata;
let phoneNuber;
let allradio;
function displayRadioValue(){
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            gender = ele[i].value;
    }
    return gender;
}

function check(){
allradio=document.querySelectorAll('.radiobtn');
allradio.forEach((value)=>value.checked=false);
}
submit.addEventListener("click",()=>
{
const fnamedata=fname.value.trim();
const genderdata=displayRadioValue();
lnamedata=lname.value.trim();
dobdata=dob.value;
countrydata=country.value;
profdata=prof.value.trim();
emaildata=email.value.trim();
phoneNuber=phone.value;
alert(`First Name:${fnamedata} 
Last Name:${lnamedata}
DOB:${dobdata}
Country:${countrydata}
Profession:${profdata}
Gender:${genderdata}
Email:${emaildata}
Phone Number:${phoneNuber}
`);
});
reset.addEventListener("click",()=>{
    fname.value='';
    lname.value='';
    country.value='';
    check();
    prof.value='';
    email.value='';
    phone.value=''
    dob.value='';
});