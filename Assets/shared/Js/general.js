'use strict'


var initPage_onDomContentLoaded = function () {
    var page = document.querySelector("[data-page]").getAttribute("data-page");

    console.log("log page " + page);

    route(page);

}

document.addEventListener("DOMContentLoaded", initPage_onDomContentLoaded);

var route = function (page) {

    scroll();
    footerForm();

    switch (page) {

        case "index":
            cookie();
            checkCookies();
            pageIndex();
            console.log("Estoy en la pagina index");
            break;

        case "hotel":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina hotel");
            break;

        case "booking":
            checkCookies();
            cookie();
            pageBooking();
            console.log("Estoy en la pagina booking");
            break;

        case "about":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina about");
            break;

        case "booking-in-process":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina booking-in-process");
            break;

        case "booking-completed":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina booking-completed");
            break;

        case "coches":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina coches");
            break;

        case "contact":
            pageContact();
            checkCookies();
            cookie();
            console.log("Estoy en la pagina contact");
            break;

        case "cookie-usage":
            console.log("Estoy en la pagina cookie-usage");
            break;

        case "personal.data-usage":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina personal.data-usage");
            break;

        case "promociones":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina promociones");
            break;

        case "room":
            checkCookies();
            cookie();
            pageRoom();
            console.log("Estoy en la pagina room");
            break;

        case "search":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina search");
            break;

        case "thanks-for-contacting-us":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina thanks-for-contacting-us");
            break;

    }

}

var checkCookies = function () {

    var cookie = document.querySelector('[data-component="cookies-warning"]');  
    if(Cookies.get('USE_COOKIES')) {
        cookie.style.display='none';

    }else {
        cookie.style.display='block';
    }
}

var cookie = function (){        

    var buttonAcceptCookie = document.querySelector('[data-component="accept"]');
    var buttonRefuseCookie = document.querySelector('[data-component="refuse"]');
    var cookie = document.querySelector('[data-component="cookies-warning"]');    

    var writteAcceptCookie = function (event){
        
        Cookies.set('USE_COOKIES',1);
        cookie.style.display ='none';
    }
    var writteRefuseCookie = function (event){

        Cookies.set('USE_COOKIES',0);
        cookie.style.display ='none';   
    } 
    buttonRefuseCookie.addEventListener("click", writteRefuseCookie);
    buttonAcceptCookie.addEventListener("click", writteAcceptCookie);
}


var scroll = function () {

    var topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    var scrollFunction = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    document.querySelector('[data-component="scrollTop"]').addEventListener("click", topFunction);

    var mybutton = document.querySelector('[data-component="scrollTop"]');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

}


var footerForm = function () {
    
    var submitFooter = document.querySelector('[data-id="submit-footer"]');

    var FooterFormValidations = function (event) {
        
        var email = document.querySelector('[data-id="mail-footer"]').value;

        var verificationMail = /^\w+@(\w+\.)+\w{2,4}$/;

        
        if (!(verificationMail.exec(email))) {
            alert("El formato del correo introducido no es valido.");
            event.preventDefault();
        }

    }
   
    submitFooter.addEventListener("click", FooterFormValidations);
}
