<?php

/**
 * retorna as credenciais
 *
 * @return array|false
 */
function carregarCredenciais(){
    return parse_ini_file(__DIR__.'/credenciais.ini');
}