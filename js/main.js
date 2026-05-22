// Contadores
const numSolicitudes = document.getElementById("numSolicitudes");
const numConexiones = document.getElementById("numConexiones");
const listaConexiones = document.getElementById("listaConexiones");

// Botón aceptar
document.querySelectorAll(".confirmar").forEach(boton => {
  boton.addEventListener("click", function() {
    // Obtener la solicitud completa
    const solicitud = this.closest(".solicitud_uno, .solicitud_dos");
    const nombre = solicitud.querySelector("span").textContent;
    const imgSrc = solicitud.querySelector("img").src;
    const imgAlt = solicitud.querySelector("img").alt;

    // Eliminar solicitud
    solicitud.remove();

    // Agregar a conexiones
    const nuevoContacto = document.createElement("div");
    nuevoContacto.classList.add("contacto_item");
    nuevoContacto.innerHTML = `
    <img class="contacto" src="${imgSrc}" alt="${imgAlt}"/>
    <span>${nombre}</span>
    `;
    listaConexiones.appendChild(nuevoContacto);
    // Actualizar contadores
    numSolicitudes.textContent = parseInt(numSolicitudes.textContent) - 1;
    numConexiones.textContent = parseInt(numConexiones.textContent) + 1;
  });
});

//Botones rechazar
document.querySelectorAll(".negativo").forEach(boton=>{
  boton.addEventListener("click", function(){
    const solicitud = this.closest(".solicitud_uno, .solicitud_dos")
    solicitud.remove();
    numSolicitudes.textContent = parseInt(numSolicitudes.textContent)-1;
  })
})
