<?php

// retorna as peguntas aleatórias

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

require dirname(__DIR__, 2) . '/models/Perguntas.php';
$perguntasModel = new Perguntas();
$perguntasRespondidas = json_decode($_POST['perguntasRespondidas'], true);

$perguntas = $perguntasModel->listarPeguntaComRespostas($perguntasRespondidas);
echo json_encode($perguntas);

die();
