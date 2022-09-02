const form = document.querySelector(".myForm");
const contact = document.querySelector(".input-contact").value;
document.querySelector(".suscribe").addEventListener("click", () => {
  contact
    ? toastr.succes("Suscripcion exitosa!")
    : toastr.error("Llene todos los  campos");
});
