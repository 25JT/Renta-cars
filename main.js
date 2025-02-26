let numero = "3014414701";
AOS.init();
var typed = new Typed('#N_logo', {
  strings: ["TRACKER RENTA CAR", "Bienvenidos"],
  typeSpeed: 40,
  backSpeed: 30,
  loop: true,
  showCursor: false
});

const contenido = {
    horario: "LUNES A VIERNES </br>8:00 AM - 5:00 PM",
    Presentacion: "En TRACKER RENTA CAR somos una empresa especializada en ofrecer servicios personalizados y de alta calidad en el sector de transporte y alquiler de vehículos con una amplia gama y variedad. </br> Es muy importante para nosotros garantizar la satisfacción total de nuestros clientes, cubriendo integralmente sus necesidades, expectativas y requerimientos cuando alquila con nosotros un vehículo.",
    "alquiler-ti": "Alquiler de autos en el aeropuerto Alfonso Bonilla Aragón",
    Cautos: "NUESTROS AUTOS",
    Ralquilar: "Requisitos para alquilar un vehículo en el aeropuerto Alfonso Bonilla Aragón",
    Fpago: "Formas de pago"
};

// Recorremos el objeto y asignamos los valores automáticamente
Object.entries(contenido).forEach(([id, text]) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.innerHTML = text;
});


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

  let phoneNumber = numero;

  let url = `https://wa.me/${phoneNumber}?text=Hola, mi nombre es ${encodeURIComponent(name)}. Quisiera alquilar un ${encodeURIComponent(car)}. %0A${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  limpiarCampos();
}

function mostrarModal() {
  document.getElementById("fondo").classList.add("active");
  document.getElementById("ventana").classList.add("active");
}

function cerrarMo() {
  document.getElementById("fondo").classList.remove("active");
  document.getElementById("ventana").classList.remove("active");
  limpiarCampos();
}

function enviamsg() {
  let name = document.getElementById("name1").value;
  let car = document.getElementById("car1").value;
  let message = document.getElementById("message1").value;
  let phoneNumber = numero;
  
  
  
  if (name && car && message) {
    if(car == "mensaje"){
      let url = `https://wa.me/${phoneNumber}?text=Hola, mi nombre es ${encodeURIComponent(name)}. %0A${encodeURIComponent(message)}`;    
      window.open(url, "_blank");
      limpiarCampos();
    }else{
      let url = `https://wa.me/${phoneNumber}?text=Hola, mi nombre es ${encodeURIComponent(name)}. Quisiera alquilar un ${encodeURIComponent(car)}. %0A${encodeURIComponent(message)}`;
    
      window.open(url, "_blank");
      limpiarCampos();
    }
  } else {
    Swal.fire({
      title: "Oops!",
      text: "Por favor, complete todos los campos.",
      icon: "error",
      confirmButtonColor: "#E26060",
    });
  }
}

function limpiarCampos() {
  document.getElementById("rentalForm1").reset();
  document.getElementById("rentalForm").reset();
  
}





