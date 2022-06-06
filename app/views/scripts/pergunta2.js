var pergunta = JSON.parse(localStorage.getItem('pergunta'));
var palavra = pergunta.pergunta;

$('#form-p2').on('submit', function (e) {
    e.preventDefault();
    if (e.target.resposta.value === pergunta.resposta_certa) {        
        salvarPergunta(pergunta.id);
        mostrarMensagem(1);
        setTimeout(() => {
            novaPergunta();
        }, 2000);
    }
    else {
        mostrarMensagem(2);
        e.target.resposta.value = '';
    }
})

