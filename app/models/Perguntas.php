<?php

require_once __DIR__ . '/BaseModel.php';
require_once __DIR__ . '/Respostas.php';


final class Perguntas extends BaseModel implements JsonSerializable {

    private $id;
    private $pergunta;
    private $tipo;
    private $resposta_certa;
    private Respostas $respostasModel;

    public function __construct()
    {
        parent::__construct();
        $this->tabela = "tb_perguntas";
        $this->respostasModel = new Respostas();
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

    /**
     * @return array
     */
    public function listarPeguntaComRespostas($perguntasRespondidas)
    {
        $perguntasRespondidas = "('" . implode("','", $perguntasRespondidas) . "')";
        $perguntas = $this->listarDados(" id not in ${perguntasRespondidas} ", " rand() LIMIT 1");
        foreach ($perguntas as $pergunta){
            $pergunta->respostas = $this->respostasModel->buscarPeloTipo($pergunta->tipo);
        }
        return $perguntas;
    }

}