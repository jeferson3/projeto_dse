<?php

// verifica a resposta da pergunta

$id_pergunta = isset($_GET['id_pergunta']) ? $_GET['id_pergunta'] : '';
$resposta = isset($_GET['resposta']) ? $_GET['resposta'] : '';

if (empty($id_pergunta) && empty($resposta)) {
    echo json_encode([]);
    exit();
}

require dirname(__DIR__, 2) . '/models/Perguntas.php';
require dirname(__DIR__, 2) . '/models/Respostas.php';

$perguntasModel = new Perguntas();
$respostasModel = new Respostas();

$pergunta = $perguntasModel->buscarPeloId($id_pergunta);

if ($pergunta->resposta_certa == $resposta){
    echo json_encode(["status" => true, "mensagem" => "Resposta certa"]);
    die();
}
echo json_encode(["status" => true, "mensagem" => "Resposta errada"]);
die();