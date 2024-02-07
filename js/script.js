let textoEncriptado = "";

function encriptarTexto() {
  let texto = document.getElementById("cajaDeTexto").value;
  console.log(texto);
  document.getElementById("munieco").style.display = "none";
  document.getElementById("cajaDeTexto").value = "Encripta otro texto!";

  textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  document.getElementById("encrip-text").innerHTML = textoEncriptado;
  return textoEncriptado;
}

function desencriptarTexto() {
  let texto = document.getElementById("cajaDeTexto").value;
  console.log(texto);
  document.getElementById("munieco").style.display = "none";
  document.getElementById("cajaDeTexto").value = "Encripta otro texto!";

  let textoDesencriptado = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  document.getElementById("encrip-text").innerHTML = textoDesencriptado;
}


function copiarTexto() {
  navigator.clipboard
    .writeText(textoEncriptado)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
    });
}
