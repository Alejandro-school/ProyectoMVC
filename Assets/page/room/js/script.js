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