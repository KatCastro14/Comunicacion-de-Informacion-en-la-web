document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = form.querySelector('input[placeholder="Nombre"]').value.trim();
        const apellido = form.querySelector('input[placeholder="Apellido"]').value.trim();
        const telefono = form.querySelector('input[placeholder="Teléfono"]').value.trim();
        const correo = form.querySelector('input[placeholder="Correo"]').value.trim();

        if (!nombre || !apellido || !telefono || !correo) {
            Swal.fire({
                icon: "error",
                title: "Por favor, complete todos los campos del formulario",
                html: "<iframe src='https://lottie.host/31467eb7-1e97-494c-9ab1-9f6a24e5dd3b/DM0eiTSAbu.json></iframe>",

            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Formulario enviado exitosamente",
                html: "<iframe src='https://lottie.host/830ef237-d8eb-4e90-a23e-f0beca7726b9/6nC3Hio9h1.json></iframe>",
            });
        }
    });
});
