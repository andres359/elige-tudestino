let boton1 = document.getElementById("finalA");
let boton2 = document.getElementById("finalB");
let boton3 = document.getElementById("finalC");
let incognita = document.getElementById("suspenso");
boton1.addEventListener("click", function() {
    incognita.textContent = "se enfrento,mato y sobrevivio";
});
boton2.addEventListener("click", function() {
    incognita.textContent = "se tiro por el barranco";
});
boton3.addEventListener("click", function() {
    incognita.textContent = " se salvo gracias a los guardaparques";
});
