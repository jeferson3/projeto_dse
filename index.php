<?php

define('BASE_URL', $_SERVER['DOCUMENT_ROOT']);

$rota = $_SERVER['PATH_INFO'];

switch ($rota) {
    case '/':
        require BASE_URL . '/app/views/index.html';
        break;
    
    case '/play':
        require BASE_URL . '/app/controllers/GameController/perguntas.php';
        break;

    case '/game':
        require BASE_URL . '/app/views/game.html';
        break;
    
    default:
        require BASE_URL . '/app/views/not_found.html';
        break;
}