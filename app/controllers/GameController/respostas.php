<?php

// retorna as respostas pelo tipo da pergunta

$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

if (empty($tipo)){
    echo json_encode([]);
    exit();
}

require dirname(__DIR__, 2) . '/models/Respostas.php';
$respostasModel = new Respostas();

$respostas = $respostasModel->listarDados(" tipo = '${tipo}' ");
echo json_encode($respostas);
die();