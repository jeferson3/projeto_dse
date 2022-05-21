<?php

require_once __DIR__ . '/BaseModel.php';

final class Respostas extends BaseModel implements JsonSerializable {
    
    private $id;
    private $resposta;
    private $tipo;

    public function __construct()
    {
        parent::__construct();
        $this->tabela = "tb_respostas";
    }

    public function jsonSerialize()
    {
        return [
            "id"             => $this->id,
            "resposta"       => $this->resposta,
            "tipo"           => $this->tipo,
        ];
    }

}