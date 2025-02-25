var typed = new Typed('#N_logo', {
  strings: ["TRACKER RENTA CAR", "Bienvenidos"],
  typeSpeed: 40,
  backSpeed: 30,
  loop: true,
  showCursor: false
});

document.getElementById('horario').innerHTML = 'LUNES A VIERNES </br>8:00 AM - 5:00 PM';
document.getElementById('Presentacion').innerHTML = 'En TRACKER RENTA CAR somos una empresa especializa en ofrecer servicios personalizados y de alta calidad en el sector de transporte y alquiler de vehículos con una amplia gama y variedad. </br> Es muy importante para nosotros Garantizar la satisfacción total de nuestros clientes, cubriendo integralmente sus necesidades, expectativas y requerimientos cuando alquila con nosotros un vehículo.'
document.getElementById('alquiler-ti').innerHTML = 'alquiler de autos en el aeropuerto Alfonso Bonilla Aragón';
document.getElementById('Cautos').innerHTML = 'NUESTROS AUTOS'
document.getElementById('Ralquilar').innerHTML = 'Requisitos para alquilar un vehículo en el aeropuerto Alfonso Bonilla Aragón '
document.getElementById('Fpago').innerHTML = 'Formas de pago'

function Masinformacion(nombre, marca, modelo, motor, transmision, direccion, combustible, comodidades, capacidad, puertas) {

  document.getElementById("modal-title").innerText = nombre;
  document.getElementById("modal-marca").innerText = marca;
  document.getElementById("modal-modelo").innerText = modelo;
  document.getElementById("modal-motor").innerText = motor;
  document.getElementById("modal-transmision").innerText = transmision;
  document.getElementById("modal-direccion").innerText = direccion;
  document.getElementById("modal-combustible").innerText = combustible;
  document.getElementById("modal-comodidades").innerText = comodidades;
  document.getElementById("modal-capacidad").innerText = capacidad;
  document.getElementById("modal-puertas").innerText = puertas;
  let modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.querySelector(".modal-content").style.animation = "fadeIn 0.5s ease-out";

}
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
// Cierra el modal si se hace clic fuera del contenido
window.onclick = function (event) {
  let modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Enviar formulario
function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let car = document.getElementById("car").value;
  let message = document.getElementById("message").value;
  if (!name || !car || !message) {
    Swal.fire({
      title: "Oops!",
      text: "Por favor, complete todos los campos.",
      icon: "error",
      confirmButtonColor: "#E26060",
    });
    return;
  }

  let phoneNumber = "3014414701";

  let url = `https://wa.me/${phoneNumber}?text=Hola, mi nombre es ${encodeURIComponent(name)}. Quisiera alquilar un ${encodeURIComponent(car)}. %0A${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

AOS.init();



