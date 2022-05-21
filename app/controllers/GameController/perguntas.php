<?php

// retorna as peguntas aleatórias

require dirname(__DIR__, 2) . '/models/Perguntas.php';
$perguntasModel = new Perguntas();

$perguntas = $perguntasModel->listarDados(" 1=1 ", " rand() ");
echo json_encode($perguntas);
die();
