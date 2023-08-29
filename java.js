var FullName = document.getElementById("FullName");
var FatherName = document.getElementById("FatherName");
var Email = document.getElementById("Email");
var Phone = document.getElementById("Phone");

var Password = document.getElementById("Password");
var CNICNumber = document.getElementById("CNICNumber");
var SelectCourse = document.getElementById("SelectCourse");
var SelectQualifcation = document.getElementById("SelectQualifcation");
var SelectGender = document.getElementById("SelectGender");
var UploadPhoto = document.getElementById("UploadPhoto");

function SubmitData(){
    if(FullName.value === ""){
        message.style.display ="block";
        message.innerHTML = "Enter your full name";
        message.style.color = "red";
        FullName.focus();
        setTimeout(()=>{
        message.style.display ="none";
        }, 1000)
    }
    else if(FatherName.value === ""){
        message.style.display = "block";
        message.innerHTML = "Enter your Father Name";
        message.style.color = "red";
        FatherName.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)

    } else if(Email.value === ""){
        message.style.display = "block";
        message.innerHTML = "Enter your email";
        message.style.color = "red";
        Email.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)
    } 
    else if(Phone.value === ""){
        message.style.display = "block";
        message.innerHTML = "Enter your Phone nuber";
        message.style.color = "red";
        Phone.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000);   
    }
    else if (Phone.value.length !== 11){{
        message.style.display = "block";
        message.innerHTML = "Enter your valid Phone nuber";
        message.style.color = "red";
        Phone.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000);
    }}
    else if(Password.value === ""){
        message.style.display = "block";
        message.innerHTML = "Enter your Secret Password";
        message.style.color = "red";
        Password.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)
    }  else if(Password.value.length !== 8){
        message.style.display = "block";
        message.innerHTML = "Enter your Secret Password min 8 charactor";
        message.style.color = "red";
        Password.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)
    } else if (CNICNumber.value === ""){
        message.style.display = "block";
        message.innerHTML = "Enter your CNIC Number";
        message.style.color = "red";
        Password.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)
    } else if(SelectCourse.value === ""){
        message.style.display = "block";
        message.innerHTML = "Select your Course";
        message.style.color = "red";
        SelectCourse.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)
    }
    else if(SelectQualifcation.value === ""){
        message.style.display = "block";
        message.innerHTML = "Select your Qualifcation";
        message.style.color = "red";
        SelectQualifcation.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)
    } 
    else if(SelectGender.value === ""){
        message.style.display = "block";
        message.innerHTML = "Select your Gender";
        message.style.color = "red";
        SelectGender.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)
    }
    else if(UploadPhoto.value === ""){
        message.style.display = "block";
        message.innerHTML = "Upload your Photo";
        message.style.color = "red";
        UploadPhoto.focus();
        setTimeout(()=>{
            message.style.display = "none"
        }, 1000)
    }
    else {
        message.style.display= "block"
        message.innerHTML = "Succesful"
        message.style.color= "green"
        console.log(FullName.value);
        console.log(FatherName.value);
        console.log(Email.value);
        console.log(Phone.value);
        console.log(Password.value);
        console.log(CNICNumber.value);
        console.log(SelectCourse.value);
        console.log(SelectQualifcation.value);
        console.log(SelectGender.value);
        console.log(UploadPhoto.value);
        setTimeout(()=>{
        message.style.display ="none";
        FullName.value= "";
        FatherName.value = "";
        Email.value = "";
        Phone.value = "";
        Password.value = "";
        CNICNumber.value = "";
        SelectCourse.value ="";
        SelectQualifcation.value = "";
        SelectGender.value = "";
        UploadPhoto.value = "";
        }, 1000)
    }
}