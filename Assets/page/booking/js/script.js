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