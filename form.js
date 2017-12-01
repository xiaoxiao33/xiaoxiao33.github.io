var email_errmsg = "Please enter a valid email address";
var tel_errmsg = "Please enter a valid telephone number";
var check = true;
var check2 = true;
var checked = -1;
var timer;
var sec = 1000;
var click = false;

function init() {
    timer = setInterval(periodic_check, sec/2);
}

function periodic_check(){
    console.log(check);
    if (checked == 1) { //donatoin
        // donation_form_check();
        common_check();
        donation_check();
    } else if (checked == 0) { //volunteer
        // volunteer_form_check();
        common_check();
    }
}

function donation_form_check(){
    checked = 1;
    // click = true;
    // check = true;
    common_check();
    donation_check();
    // console.log(check);
    console.log(check);
    if (check == true && check2 == true){
        window.location = "thankyou_donation.html";
    } else {
        return;
    }
}

function volunteer_form_check(){
    checked = 0;
    // check = true;
    common_check();
    // volunteer_check();

    if (check == true){
        window.location = "thankyou_volunteer.html";
    } else {
        return;
    }
}

function volunteer_form_check2(){
    checked = 0;
    // check = true;
    common_check();
    // volunteer_check();

    if (check == true){
        window.location = "thankyouintouch.html";
    } else {
        return;
    }
}


function email_check(){
    var email = document.getElementById("email");
    if (email.checkValidity() == false || email.value.length == 0) {
        document.getElementById("email_err").innerHTML = email_errmsg;
        check = false;
    } else {
        document.getElementById("email_err").innerHTML ="";
    }
}

function tel_check(){
    var tel = document.getElementById("tel");
    if (tel.checkValidity() == false || tel.value.length < 9) {
        document.getElementById("tel_err").innerHTML = tel_errmsg;
        check = false;
    } else {
        document.getElementById("tel_err").innerHTML ="";
    }
}


function common_check(){
    allcorrect = true;
    if (document.getElementById("name").value.length ==0) {
        document.getElementById("name_err").innerHTML = "Please enter your name";
        check = false;
        allcorrect = false;
    } else {
        document.getElementById("name_err").innerHTML ="";
    }

    if (document.getElementById("addr1").value.length ==0) {
        document.getElementById("addr1_err").innerHTML = "Please enter your address";
        check = false;
        allcorrect = false;
    } else {
        document.getElementById("addr1_err").innerHTML ="";
    }

    if (document.getElementById("city").value.length ==0) {
        document.getElementById("city_err").innerHTML = "Please enter your city";
        check = false;
        allcorrect = false;
    } else {
        document.getElementById("city_err").innerHTML ="";
    }

    if (document.getElementById("state").value.length ==0) {
        document.getElementById("state_err").innerHTML = "Please enter your state/province/region";
        check = false;
        allcorrect = false;
    } else {
        document.getElementById("state_err").innerHTML ="";
    }

    if (document.getElementById("zip").value.length ==0) {
        document.getElementById("zip_err").innerHTML = "Please enter your zipcode";
        check = false;
        allcorrect = false;
    } else {
        document.getElementById("zip_err").innerHTML ="";
    }

    if (document.getElementById("country").value.length ==0) {
        document.getElementById("country_err").innerHTML = "Please enter your country";
        check = false;
        allcorrect = false;
    } else {
        document.getElementById("country_err").innerHTML ="";
    }
    
    if (allcorrect == true) {
        check = true;
    }
    email_check();
    tel_check();
}

function donation_check(){
    correct = true;
    if (document.getElementById("month").value.length ==0) {
        document.getElementById("month_err").innerHTML = "Please enter your credit card expiration month";
        check2 = false;
        correct = false;
    } else {
        document.getElementById("month_err").innerHTML ="";
    }
    if (correct == true) {
        check2 = true;
    }
}

init()