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