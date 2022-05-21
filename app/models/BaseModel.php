<?php

require dirname(__DIR__, 2) . '/app/config/Conexao.php';

class BaseModel {

    protected $tabela;
    protected $con;

    public function __construct()
    {
        $this->con = Conexao::getInstance();
    }

    /**
     * @param string $where
     * @param string $order
     * @return array
     */
    public function listarDados(string $where = " 1=1 ", string $order = " id ")
    {
        $query = "SELECT * FROM " . $this->tabela . " WHERE ${where} ORDER BY ${order}";
        $query = $this->con->query($query);
        return $query->fetchAll(PDO::FETCH_OBJ);
    }

    /**
     * @param string $where
     * @param string $order
     * @return array
     */
    public function buscarPeloId(int $id = null)
    {
        $query = "SELECT * FROM " . $this->tabela . " WHERE id = ${id}";
        $query = $this->con->query($query);
        return $query->fetch(PDO::FETCH_OBJ);
    }

}