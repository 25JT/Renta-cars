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

function Masinformacion(nombre, marca, modelo, motor, transmision) {
  
  document.getElementById("modal-title").innerText =  nombre;
  document.getElementById("modal-marca").innerText = marca;
  document.getElementById("modal-modelo").innerText = modelo;
  document.getElementById("modal-motor").innerText = motor;
  document.getElementById("modal-transmision").innerText = transmision;
  document.getElementById("modal").style.display = "block";
} 
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
    // Cierra el modal si se hace clic fuera del contenido
    window.onclick = function(event) {
      let modal = document.getElementById("modal");
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }


AOS.init();


