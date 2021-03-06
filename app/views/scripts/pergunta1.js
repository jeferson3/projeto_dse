var pergunta = JSON.parse(localStorage.getItem('pergunta'));
var perguntaQuestao = JSON.parse(pergunta.pergunta);

$('.pergunta p').text(perguntaQuestao.pergunta)
$('.img-pergunta').attr('src', perguntaQuestao.imagem)

var palavra = pergunta.resposta_certa;
var arr_opcoes = shuffle(Array.from(palavra));
var arr_resposta = [];
var opcoes = document.getElementById("opcoes");
var resposta = document.getElementById("resposta");



function carregarDados() {

    arr_opcoes.forEach(function (el, i) {

        var li_o = document.createElement("li");
        li_o.dataset.indexNumber = i;
        li_o.addEventListener("click", (event) => {
            adicionarResposta(li_o);
        });

        var li_r = document.createElement("li");
        li_r.dataset.indexNumber = i;
        li_r.addEventListener("click", (event) => {
            removerResposta(li_r);
        });

        li_o.innerHTML = el;
        opcoes.appendChild(li_o);
        resposta.appendChild(li_r);
        arr_resposta.push('');
    });
}
carregarDados();

function adicionarResposta(li) {
    if (li.innerHTML != '') {
        let children = Array.from($("#resposta").children());
        for (var i = 0; i < children.length; i++) {
            if (children[i].innerHTML == '') {
                children[i].innerHTML = li.innerHTML;
                arr_resposta[children[i].dataset.indexNumber] = li.innerHTML;
                arr_opcoes.splice(li.dataset.indexNumber, 1, '');            
                break;
            }
        }

        li.innerHTML = '';
        if (arr_resposta.indexOf('') == -1) {            
            if (palavra === arr_resposta.toString().replace(/\,/g, '')){
                salvarPergunta(pergunta.id);
                mostrarMensagem(1);               
                setTimeout(() => {
                    novaPergunta();
                }, 2000);   
            }
            else {
                mostrarMensagem(2);
                children.forEach(el => {
                    removerResposta(el);
                });
            }
        }
    }    
}

function removerResposta(li) {
    if (li.innerHTML != '') {
        let children = Array.from($("#opcoes").children());
        for (var i = 0; i < children.length; i++) {
            if (children[i].innerHTML == '') {
                children[i].innerHTML = li.innerHTML;
                arr_opcoes[children[i].dataset.indexNumber] = li.innerHTML;
                arr_resposta.splice(li.dataset.indexNumber, 1, ''); 
                break;
            }
        }
        li.innerHTML = '';
    }

}

