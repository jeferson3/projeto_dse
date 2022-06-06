<ul id="animacao"></ul>
<div class="login">
    <form id="nickname_submit">
        <input type="text" id="nickname" placeholder="Digite seu nickname">
        <button type="submit" style="margin-top: 50px; font-size: 40px !important;">Iniciar</button>
    </form>
</div>


<script>
    $(document).ready(function() {
        let nickname = localStorage.getItem('nickname');
        if (nickname !== null ){
            novaPergunta()
        }
        else {
            localStorage.removeItem('pergunta');
            localStorage.removeItem('listaPerguntas');
            $('#nickname_submit').submit(e => {
                e.preventDefault();
                let nickname = $('#nickname').val();
                if (nickname) {
                    localStorage.setItem('nickname', nickname);
                    novaPergunta();
                }
            })
        }
    })
</script>