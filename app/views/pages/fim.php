<div class="fim">
    <h1>Parabens <strong id="nickname"></strong>, você concluiu com sucesso todas as perguntas do jogo.</h1>
    <button id="restart" style="font-size: 40px !important;">Reiniciar</button>
</div>
<script>
    $(document).ready(function() {
        $('#nickname').text(localStorage.getItem('nickname'))
        localStorage.removeItem('pergunta');
        $('#restart').click(e => {
            e.preventDefault();
            localStorage.removeItem('listaPerguntas');
            novaPergunta();
        })
    })
</script>