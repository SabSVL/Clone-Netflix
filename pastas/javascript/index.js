
document.addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }


});

function leiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
    }

}

var i = 0;
function Pesquisar() {
    var input = document.getElementById("input");
    var button = document.getElementById("buttonLupa");

    if (i == 0) {
        button.style.left = "60%";
        input.style.left = "60%";
        input.style.width = "198px";
        input.style.borderColor = "white";
        input.style.background = " rgba(0, 0, 0, 0.747)";
        input.style.paddingLeft = "39px";
        i = 1;
    }
    else {

        button.style.left = "80%";
        input.style.left = "80%";
        input.style.width = "0px";
        input.style.borderColor = "transparent";
        input.style.background = " transparent";
        input.style.paddingLeft = "5px";
        i = 0;

    }
}
function Foto1() {
    var imagem = document.getElementById("foto1").src;
    location.assign("netflix.html#" + imagem);
}
function Foto2() {
    var imagem = document.getElementById("foto2").src;
    location.assign("netflix.html#" + imagem);
}
function Foto3() {
    var imagem = document.getElementById("foto3").src;
    location.assign("netflix.html#" + imagem);
}
function Foto4() {
    var imagem = document.getElementById("foto4").src;
    location.assign("netflix.html#" + imagem);
}
function Foto5() {
    var imagem = document.getElementById("foto5").src;
    location.assign("netflix.html#" + imagem);
}

function Imagem() {
    var f1, f2, f3, f4;
    var imgs = ["file:///C:/Users/Sabrina/Pictures/CodePen/Netflix/pastas/imagem/perfil1.png", "file:///C:/Users/Sabrina/Pictures/CodePen/Netflix/pastas/imagem/perfil2.png", "file:///C:/Users/Sabrina/Pictures/CodePen/Netflix/pastas/imagem/perfil3.png", "file:///C:/Users/Sabrina/Pictures/CodePen/Netflix/pastas/imagem/perfil4.png", "file:///C:/Users/Sabrina/Pictures/CodePen/Netflix/pastas/imagem/perfil5.png"]
    var prfs = ["King Teca", "Mel", "Ekko", "Chiapa", "Infantil"];
    var foto = document.getElementById("aqui");
    var foto0 = document.getElementById("imgf1");
    var foto1 = document.getElementById("imgf2");
    var foto2 = document.getElementById("imgf3");
    var foto3 = document.getElementById("imgf4");
    foto.innerHTML = "";
    var imagem = location.hash.split("#")[1];

    for (f1 = 0; f1 < 5; f1++) {
        if (imagem != imgs[f1]) {
            foto2.innerHTML = "<h3>"+prfs[f1]+"</h3><img  id='fot1'src='" + imgs[f1] + "'/> "
            break;
        }
    }
    for (f2 = 0; f2 < 5; f2++) {
        if (imagem != imgs[f2] && imgs[f1] != imgs[f2]) {
            foto3.innerHTML = "<h3>"+prfs[f2]+"</h3><img id='fot2' src='" + imgs[f2] + "'/>"
            break;
        }
    }
    for (f3 = 0; f3 < 5; f3++) {
        if (imagem != imgs[f3] && imgs[f1] != imgs[f3] && imgs[f2] != imgs[f3]) {
            foto1.innerHTML = "<h3>"+prfs[f3]+"</h3><img id='fot3' src='" + imgs[f3] + "'/>"
            break;
        }
    }
    for (f4 = 0; f4 <5; f4++) {
        if (imagem != imgs[f4] && imgs[f1] != imgs[f4] && imgs[f2] != imgs[f4]  && imgs[f3] != imgs[f4]) {
            foto0.innerHTML = "<h3>"+prfs[f4]+"</h3> <img id='fot4' src='" + imgs[f4] + "'/>"
            break;
        }
    }
    var fo = "<img id='perfil' src='" + imagem + "'/>"
    foto.innerHTML = fo;
}

window.addEventListener('scroll', function () {
    var menu = document.querySelector('.lado');
    menu.classList.toggle('sticky', window.scrollY > 0);
})



