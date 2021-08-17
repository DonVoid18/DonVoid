const navegacion = document.querySelector(".navegacion-principal");
const boton_responsive = document.querySelector(".boton-menu-responsive");
boton_responsive.addEventListener("click",function(){
    navegacion.classList.toggle("activo");
});