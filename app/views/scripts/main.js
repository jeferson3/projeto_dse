const path = window.location.href + "/app/views/";
const url = "http://localhost:8000";
const pathsound = window.location.href + "app/views/sounds/";
const music = new Audio(pathsound + 'musica.mp3');
music.volume = 0.2;
const music_control = document.getElementById('music-control');
function router(page) {
    switch (page) {
        case 1:
            $("body .container").load(path + "pages/inicio.php");
            break;
        case 2:
            $("body .container").load(path + "pages/nickname.php");
            break;
        case 3:
            $("body .container").load(path + "pages/pergunta1.php");
            break;
        case 4:
            $("body .container").load(path + "pages/pergunta2.php");
            break;
        case 5:
            $("body .container").load(path + "pages/pergunta3.php");
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

function mostrarMensagem(tipo) {
    let pergunta = document.getElementById("mensagem");
    let div = document.createElement("div");
    switch (tipo) {
        case 1:
            var sound = new Audio(pathsound + 'correto.mp3');
            sound.play();
            sound.loop = false;
            div.className = 'correto';
            div.innerHTML = 'Correto<ion-icon name="checkmark-outline" class="icon-check"></ion-icon>'
            break;

        case 2:
            var sound = new Audio(pathsound + 'errado.mp3');
            sound.play();
            sound.loop = false;
            div.className = 'errado';
            div.innerHTML = 'Incorreto<ion-icon name="close-outline" class="icon-check"></ion-icon>'
            break;
    }
    pergunta.appendChild(div);
    setTimeout(() => {
        pergunta.removeChild(div);
    }, 2000);
}

function playMusic() {
    music.play();
    music.loop = true;
    music_control.name = 'volume-high-sharp';
}

function stopMusic() {
    music_control.name = 'volume-mute-sharp';
    music.pause();

}

music_control.addEventListener('click', (event) => {
    if (music_control.name == 'volume-mute-sharp') {
        playMusic();
    }
    else {
        stopMusic();
    }
});


function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

router(1);
