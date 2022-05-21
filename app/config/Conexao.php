<?php

require_once __DIR__.'/globais.php';

class Conexao
{
    /**
     * @var PDO
     */
    private static $instance;

    /**
     * return PDO instance
     *
     * @return PDO
     */
    public static function getInstance()
    {
        if (!is_null(self::$instance)) return self::$instance;

        $credencials = carregarCredenciais();
        $db_host = $credencials['db_host'];
        $db_name = $credencials['db_name'];
        $db_user = $credencials['db_user'];
        $db_pass = $credencials['db_pass'];

        $dsn = "mysql:dbname=$db_name;host=$db_host";
        return self::$instance = new \PDO($dsn, $db_user, $db_pass,
            [\PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION]
        );
    }
}