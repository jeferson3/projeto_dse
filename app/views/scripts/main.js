const path = window.location.href + "/app/views/";
const url  = "http://localhost:8000";

function router (page) {
    switch (page) {
        case 1:
            $("body .container").load(path+"pages/inicio.php");
            break;
        case 2:
            $("body .container").load(path+"pages/nickname.php");
            break;
        case 3:
            $("body .container").load(path+"pages/pergunta1.php");
            break;
        case 4:
            $("body .container").load(path+"pages/pergunta2.php");
            break;
    }
}

function novaPergunta() {
    let perguntasRespondidas = localStorage.getItem("listaPerguntas") ?? JSON.stringify([]);
    let data = new FormData();
    data.append('perguntasRespondidas', perguntasRespondidas);
    $.ajax({
        url: url + "/play",
        method: 'POST',
        data,
        processData: false,
        contentType: false,
        success: res => {
            console.log(res)
            console.log(res)
            if (res !== undefined) {
                localStorage.setItem('pergunta', JSON.stringify(res));
                console.log(res.tipo)
                switch (res.tipo) {
                    case "NOME_OBJETO":
                        router(3);
                        break;
                    case "ASSOCIAR_IMAGENS":
                        router(6);
                        break;
                    case "COMPLETAR_FRASE":
                        router(5);
                        break;
                    case "DECIFRAR_AUDIO":
                        router(4);
                        break;
                }
            }
        },
        error: err => {
            console.log(err)
        }
    })
}

function salvarPergunta(idPergunta) {
    let perguntasRespondidas = localStorage.getItem("listaPerguntas");
    if (perguntasRespondidas === null){
        localStorage.setItem("listaPerguntas", JSON.stringify([idPergunta]))
    }
    else {
        perguntasRespondidas = JSON.parse(perguntasRespondidas);
        perguntasRespondidas.push(idPergunta);
        localStorage.setItem("listaPerguntas", JSON.stringify(perguntasRespondidas));
    }
}

router (1);
