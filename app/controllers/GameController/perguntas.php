<?php

// retorna as peguntas aleatórias

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

require dirname(__DIR__, 2) . '/models/Perguntas.php';
$perguntasModel = new Perguntas();

$perguntas = $perguntasModel->listarPeguntaComRespostas();
echo json_encode($perguntas[0]);
die();
