
//Importando a imagem de Perfil
let ImagemPerfil = document.getElementById("imagemPerfil");
let InputImagem = document.getElementById("importarImagem");

InputImagem.onchange = function(){
    ImagemPerfil.src = URL.createObjectURL(InputImagem.files[0])
}
 
//Importando a imagem de capa
let ImagemPerfilCima = document.getElementById("ImagemPerfilCima");
let InputImagemCima = document.getElementById("importarImagemCima");

InputImagemCima.onchange = function(){
    ImagemPerfilCima.src = URL.createObjectURL(InputImagemCima.files[0])
}


function conta(){

    var parte0 =localStorage.getItem("#nome")
    document.querySelector(".nome").innerText+=" "+parte0

    var parte1 =localStorage.getItem("#email")
    document.querySelector(".e-mail").innerText+=" "+parte1

    var parte2 =localStorage.getItem("#senha")
    document.querySelector(".senha").innerText+=" "+parte2

 }