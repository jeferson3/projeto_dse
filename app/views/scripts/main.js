const url = window.location.href;


function router (page) {
    switch (page) {
        case 2:
            $("body .container").load(url+"pages/inicio.html");
            break;
        case 2:
            $("body .container").load(url+"pages/nickname.html");            ;
            break;
        case 3:
            $("body .container").load(url+"pages/pergunta1.html");
            break;
    }
}

router (1);
