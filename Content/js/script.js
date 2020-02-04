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

        case "home":
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

        case "thanks-for-subscribing":
            checkCookies();
            cookie();
            console.log("Estoy en la pagina thanks-for-subscribing");
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


var pageBooking = function () {

    console.log("Estoy dentro de booking");

    var submitBooking = document.querySelector('[data-id="submit-booking"]');

    var bookingFormValidations = function (event) {


        var numberAdults = parseInt(document.querySelector('[data-id="numberAdults"]').value);
        var numberKids = parseInt(document.querySelector('[data-id="numberKids"]').value);
        var dateIn = document.querySelector('[data-id="dateIn"]').value;
        var dateOut = document.querySelector('[data-id="dateOut"]').value;
        var namePerson = document.querySelector('[data-id="namePerson"]').value;
        var surnamePerson = document.querySelector('[data-id="surnamePerson"]').value;
        var dni = document.querySelector('[data-id="dni"]').value;
        var email = document.querySelector('[data-id="email-booking"]').value;
        var comments = document.querySelector('[data-id="comments"]').value;

        var verificationName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        var verificationMail = /^\w+@(\w+\.)+\w{2,4}$/;
        var verificationDni = /^\d{8}[A-Z]$/;
        console.log(surnamePerson);


        //Validacion start-date (Funciona bien)

        var datein = new Date(dateIn);
        var today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setMilliseconds(0);

        if (datein.getTime() >= today.getTime()) {

        } else {
            alert("La fecha debe ser igual o mayor a hoy");
            event.preventDefault();
        }

        //Validacion finish-date (Funciona bien)

        var dateend = new Date(dateOut);

        if (dateend.getTime() > datein.getTime()) {

        } else {
            alert("La fecha de salida ser superior a la inicial");
            event.preventDefault();
        }

        //Validacion adults (Funciona bien)
        if (Number.isInteger(numberAdults) && numberAdults <= 10 && numberAdults >= 0) {
        } else {
            alert("Deben ser numeros (Maximo de niños es 10 y minimo 0)");
            event.preventDefault();

        }

        //Validacion 6 meses

        var sixmonth = datein.setMonth(datein.getMonth() + 7);

        console.log("6 meses" + sixmonth);

        console.log(dateend);

        if (dateend <= sixmonth) {

        } else {
            alert("El intervalo de reserva es muy grande");
            event.preventDefault();
        }

        //Validacion Kids (Funciona bien)
        if (Number.isInteger(numberKids) && numberKids <= 10 && numberKids >= 0) {
        } else {
            alert("Deben ser numeros (Maximo de niños es 10 y minimo 0)");
            event.preventDefault();

        }

        //Validacion nombre (Funciona bien)

        if (namePerson.trim() === "") {

            alert("El campo 'Nombre' es obligatorio ");
            event.preventDefault();

        } else if (namePerson.length > 30) {

            alert("El campo 'Nombre' no puede ser mayor a 30 digitos");
            event.preventDefault();
        }

        if (!verificationName.exec(namePerson)) {
            alert("Este campo solo admite letras y espacios(Nombre)");
            event.preventDefault();
        }

        //Validacion Apellido (Funciona bien)
        console.log(surnamePerson);

        if (surnamePerson.trim() === "") {

            alert("El campo 'Apellido' es obligatorio ");
            event.preventDefault();

        } else if (surnamePerson.length > 50) {

            alert("El campo 'Apellido' no puede ser mayor a 30 digitos");
            event.preventDefault();
        }

        if (!verificationName.exec(surnamePerson)) {
            alert("Este campo solo admite letras y espacios(Apellido)");
            event.preventDefault();
        }

        // Validacion DNI (Funciona bien)

        if (dni.trim() === "") {

            alert("El campo 'DNI' es obligatorio ");
            event.preventDefault();

        }

        if (!verificationDni.exec(dni)) {
            alert("Los datos introducidos en 'DNI' erroneos, ten en cuenta que son 8 numeros seguidos de una letra y no puede estar en blanco");
            event.preventDefault();
        }

        if (comments < 0 && comments > 500){
            alert("Cantidad de caracteres entre 0 y 500");
        }

        //Validacion Correo (Funciona bien)

        if (email.trim() === "") {

            alert("El campo 'Correo' es obligatorio ");
            event.preventDefault();

        }

        if (!verificationMail.exec(email)) {
            alert("El campo 'Correo' solo permite emails y no puede estar en blanco");
            event.preventDefault();
        }
    }

    submitBooking.addEventListener("click", bookingFormValidations);

}


var pageContact = function () {

    var submitContact = document.querySelector('[data-id="submit-contact"]');

    var contactFormValidations = function (event) {


        var name = document.querySelector('[data-id="nameContact"]').value;
        var surname = document.querySelector('[data-id="surnameContact"]').value;
        var email = document.querySelector('[data-id="emailContact"]').value;

        var verification = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        var verificationMail = /^\w+@(\w+\.)+\w{2,4}$/;


        //Validacion nombre (Funciona bien)

        if (name.trim() === "") {

            alert("El campo 'Nombre' es obligatorio ");
            event.preventDefault();

        } else if (name.length > 30) {

            alert("El campo 'Nombre' no puede ser mayor a 30 digitos");
            event.preventDefault();
        }

        if (!verification.exec(name)) {
            alert("Este campo solo admite letras y espacios(Nombre)");
            event.preventDefault();
        }

        //Validacion Apellido (Funciona bien)


        if (surname.trim() === "") {

            alert("El campo 'Apellido' es obligatorio ");
            event.preventDefault();

        } else if (surname.length > 50) {

            alert("El campo 'Apellido' no puede ser mayor a 30 digitos");
            event.preventDefault();
        }

        if (!verification.exec(surname)) {
            alert("Este campo solo admite letras y espacios(Apellido)");
            event.preventDefault();
        }

        //Validacion correo

        if (!(verificationMail.exec(email))) {
            alert("El formato del correo introducido no es valido.");
            event.preventDefault();
        }


    }

    submitContact.addEventListener("click", contactFormValidations);
}

var pageIndex = function () {

    var submitIndex = document.querySelector('[data-id="submit-index"]');

    var indexFormValidations = function (event) {

        var adults = parseInt(document.querySelector('[data-id="adults"]').value);
        var kids = parseInt(document.querySelector('[data-id="kids"]').value);
        var startdate = document.querySelector('[data-id="start-date"]').value;
        var enddate = document.querySelector('[data-id="finish-date"]').value;


        //Validacion start-date (Funciona bien)

        var datein = new Date(startdate);
        var today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setMilliseconds(0);

        if (datein.getTime() >= today.getTime()) {

        } else {
            alert("La fecha debe ser igual o mayor a hoy");
            event.preventDefault();
        }

        //Validacion finish-date (Funciona bien)

        var dateend = new Date(enddate);

        if (dateend.getTime() > datein.getTime()) {

        } else {
            alert("La fecha debe ser superior a la inicial");
            event.preventDefault();
        }

        //Validacion 6 meses (Funciona a medias)

        var sixmonth = datein.setMonth(datein.getMonth() + 7);

        console.log("6 meses" + sixmonth);

        console.log(dateend);

        if (dateend <= sixmonth) {

        } else {
            alert("El intervalo de reserva es muy grande");
            event.preventDefault();
        }

        //Validacion adults (Funciona bien)
        if (Number.isInteger(adults) && adults <= 10 && adults > 0) {

        } else {
            alert("El campo 'Numero de adultos' no puede estar vacio y hay un maximo de 10 adultos.");
            event.preventDefault();

        }

        //Validacion Kids (Funciona bien)
        if (Number.isInteger(kids) && kids <= 10 && kids > 0) {

        } else {
            alert("El campo 'Numero de niños' no puede estar vacio y hay un maximo de 10 adultos.");
            event.preventDefault();
        }


    }

    submitIndex.addEventListener("click", indexFormValidations);

}




var pageRoom = function () {

    console.log("Estoy dentro de room");

    var submitRoom = document.querySelector('[data-id="submit-room"]');

    var roomFormValidations = function (event) {
        

        var adults = parseInt(document.querySelector('[data-id="numadults"]').value);
        var kids = parseInt(document.querySelector('[data-id="numkids"]').value);
        var startdate = document.querySelector('[data-id="date-start"]').value;
        var enddate = document.querySelector('[data-id="date-finish"]').value;

        //Validacion start-date

        var datein = new Date(startdate);
        var today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setMilliseconds(0);



        if (datein.getTime() >= today.getTime()) {

        } else {
            alert("La fecha debe ser igual o mayor a hoy");
        }

        //Validacion finish-date

        var dateend = new Date(enddate);

        if (dateend.getTime() > datein.getTime()) {

        } else {
            alert("La fecha debe ser superior a la inicial");
        }

        //Validacion 6 meses

        var sixmonth = datein.setMonth(datein.getMonth() + 7);

        console.log("6 meses" + sixmonth);

        console.log(dateend);

        if (dateend <= sixmonth) {

        } else {
            alert("El intervalo de reserva es muy grande");
            event.preventDefault();
        }

        //Validacion adults
        if (Number.isInteger(adults) && adults <= 10 && adults >= 0) {

        } else {
            alert("Deben ser numeros y como maximo 10 adultos");
            event.preventDefault();

        }

        //Validacion Kids
        if (Number.isInteger(kids) && kids <= 10 && kids >= 0) {
        } else {
            alert("Deben ser numeros y como maximo 10 niños");
            event.preventDefault();

        }


    }

    submitRoom.addEventListener("click", roomFormValidations);
}


/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
