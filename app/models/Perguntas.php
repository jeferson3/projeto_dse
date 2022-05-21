<?php

final class Perguntas extends BaseModel implements JsonSerializable {

    private $id;
    private $pergunta;
    private $tipo;
    private $resposta_certa;

    public function __construct()
    {
        $this->tabela = "tb_perguntas";
    }

    public function jsonSerialize()
    {
        return [
            "id"             => $this->id,
            "pergunta"       => $this->pergunta,
            "tipo"           => $this->tipo,
            "resposta_certa" => $this->resposta_certa,
        ];
    }

}