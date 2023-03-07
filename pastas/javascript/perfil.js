var imagemSelecionada;

window.onload = function() {
  const imagens = document.querySelectorAll("img");
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener("click", function() {
      imagemSelecionada = this.getAttribute("src");
      localStorage.setItem("imagem", imagemSelecionada);

    });
  }
}

