<?php

define('BASE_PATH', $_SERVER['DOCUMENT_ROOT']);
define('BASE_URL', 'http://localhost:8000');

$rota = $_SERVER['REQUEST_URI'];

switch ($rota) {
    case '/':
        require BASE_PATH . '/app/views/index.php';
        break;
    
    case '/play':
        require BASE_PATH . '/app/controllers/GameController/perguntas.php';
        break;

    case '/game':
        require BASE_PATH . '/app/views/game.php';
        break;
    
    default:
        require BASE_PATH . '/app/views/not_found.php';
        break;
}