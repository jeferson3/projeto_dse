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
    $.ajax({
        url: url + "/play",
        success: res => {
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

router (1);
