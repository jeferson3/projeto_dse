<ul id="animacao"></ul>
<div class="login">
    <form id="nickname_submit">
        <input type="text" id="nickname" placeholder="Digite seu nickname">
        <button type="submit">Start</button>
    </form>
</div>


<script>
    $(document).ready(function() {
        localStorage.removeItem('nickname');
        localStorage.removeItem('pergunta');

        $('#nickname_submit').submit(e => {
            e.preventDefault();
            localStorage.setItem('nickname', $('#nickname').val()); 
            novaPergunta();
        })
    })
</script>