var palavra = "escola";


$('#form-p2').on('submit', function(e) {
    e.preventDefault();
    if (e.target.resposta.value === palavra) {
        console.log('Próxima');
    }
    else {
        e.target.resposta.value = '';
    }
})

