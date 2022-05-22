var pergunta = JSON.parse(localStorage.getItem('pergunta'));
var palavra = pergunta.pergunta;

$('#form-p2').on('submit', function(e) {
    e.preventDefault();
    if (e.target.resposta.value === pergunta.resposta_certa) {
        alert("Certa resposta")
        novaPergunta();
    }
    else {
        alert("Resposta errada")
        e.target.resposta.value = '';
    }
})

