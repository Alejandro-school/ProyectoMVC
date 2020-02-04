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

