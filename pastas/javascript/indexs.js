window.onload = function() {
    const respostas = document.querySelectorAll('.resposta');
    const icones = document.querySelectorAll('span');
    const perguntas = document.getElementsByClassName('pergunta');
    
    Array.from(perguntas).forEach((pergunta, i) => {
      pergunta.addEventListener('click', function() {
        if (respostas[i].style.display === 'none') {
          respostas[i].style.display = 'block';
          icones[i].innerHTML = '<i class="fa-solid fa-x"></i>';
        } else {
          respostas[i].style.display = 'none';
          icones[i].innerHTML = '<i class="fa-solid fa-plus"></i>';
        }
      });
    });
  };