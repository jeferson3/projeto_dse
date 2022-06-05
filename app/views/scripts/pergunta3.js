//var pergunta = JSON.parse(localStorage.getItem('pergunta'));
//var perguntaQuestao = JSON.parse(pergunta.pergunta);

///$('.pergunta p').text(perguntaQuestao.pergunta)
//$('.img-pergunta').attr('src', perguntaQuestao.imagem)

var frase = "aldaf correta alsasfa afks";
var arr_opcoes = ['palvara1', 'palvara2', 'palvara3'];
var palavra_correta = 'correta';
arr_opcoes.push(palavra_correta);
arr_opcoes = shuffle(Array.from(arr_opcoes));
var opcoes = document.getElementById("opcoes-p3");
var frase_tag = document.getElementById("frase");


function carregarDadosP3() {
    var split = frase.split(palavra_correta);
    let label1 = document.createElement("label");
    label1.innerHTML = split[0];
    let label2 = document.createElement("div");
    label2.style.width = (palavra_correta.length * 15) + 'px';
    label2.style.height = ((palavra_correta.length * 15) * 0.4) + 'px';
    label2.className = 'palavra-res';
    let label3 = document.createElement("label");
    label3.innerHTML = split[1];

    frase_tag.appendChild(label1);
    frase_tag.appendChild(label2);
    frase_tag.appendChild(label3);

    arr_opcoes.forEach(function (el, i) {

        var li_o = document.createElement("li");
        li_o.addEventListener("click", (event) => {
            adicionarRespostaP3(li_o);
        });

        li_o.innerHTML = el;
        opcoes.appendChild(li_o);
    });
}
carregarDadosP3();

function adicionarRespostaP3(li) {
    let palavra_label = $("#frase .palavra-res")[0];
    palavra_label.innerHTML = li.innerHTML; 
    if (palavra_label.innerHTML === palavra_correta) {
        mostrarMensagem(1);
        setTimeout(() => {
            //novaPergunta();
        }, 2000);
    }
    else {
        mostrarMensagem(2);
        setTimeout(() => {
            removerRespostaP3(palavra_label);
        }, 2000);
    }
}

function removerRespostaP3(pl) {
    pl.innerHTML = '';    
}

