var imagem = localStorage.getItem("imagem");

window.onload = function() {
    let imgPerfil = document.getElementById('perfil')    
    imgPerfil.innerHTML = `  <img src="${imagem}" alt="Perfil">`
}