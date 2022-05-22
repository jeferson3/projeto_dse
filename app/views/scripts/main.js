const url = window.location.href + "/app/views/";

function router (page) {
    switch (page) {
        case 1:
            $("body .container").load(url+"pages/inicio.html");
            break;
        case 2:
            $("body .container").load(url+"pages/nickname.html");            ;
            break;
        case 3:
            $("body .container").load(url+"pages/pergunta1.html");
            break;
        case 4:
            $("body .container").load(url+"pages/pergunta2.html");
            break;
    }
}

router (1);
