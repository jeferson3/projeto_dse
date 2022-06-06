var pergunta = JSON.parse(localStorage.getItem('pergunta'));

var frase = pergunta.pergunta;
var arr_opcoes = pergunta.respostas.map(r => r.resposta);
var palavra_correta = pergunta.resposta_certa;
arr_opcoes.push(palavra_correta);
arr_opcoes = shuffle(Array.from(arr_opcoes));
var opcoes = document.getElementById("opcoes-p3");
var frase_tag = document.getElementById("frase");

function adicionarResposta2(res) {
    frase_tag.innerHTML = "";
    var split = frase.split("*");
    let label1 = document.createElement("label");
    label1.innerHTML = split[0];
    let label2 = document.createElement("div");
    label2.className = 'palavra-res2';
    label2.innerText = res
    let label3 = document.createElement("label");
    label3.innerHTML = split[1];

    frase_tag.appendChild(label1);
    frase_tag.appendChild(label2);
    frase_tag.appendChild(label3);
}

function carregarDadosP3() {
    frase_tag.innerHTML = "";
    opcoes.innerHTML = "";
    var split = frase.split("*");
    let label1 = document.createElement("label");
    label1.innerHTML = split[0];
    let label2 = document.createElement("div");
    label2.className = 'palavra-res';
    let label3 = document.createElement("label");
    label3.innerHTML = split[1];

    frase_tag.appendChild(label1);
    frase_tag.appendChild(label2);
    frase_tag.appendChild(label3);

    arr_opcoes.forEach(function (el, i) {

        var li_o = document.createElement("li");
        li_o.addEventListener("click", (event) => {
            adicionarRespostaP3(el);
        });

        li_o.innerHTML = el;
        opcoes.appendChild(li_o);
    });
}
carregarDadosP3();

function adicionarRespostaP3(res) {
    adicionarResposta2(res)
    if (res === palavra_correta) {
        salvarPergunta(pergunta.id);
        mostrarMensagem(1);
        setTimeout(() => {
            novaPergunta();
        }, 2000);
    }
    else {
        mostrarMensagem(2);
        setTimeout(() => {
            removerRespostaP3(res);
            carregarDadosP3()
        }, 2000);
    }
}

function removerRespostaP3(pl) {
    pl.innerHTML = '';    
}

