<?php

class Cadastro {
    public $nome;
    public $email;
    public $cidade;
    public $estado;
    public $comentarios;
    public $pdo;

    function __construct($nome, $email, $cidade, $estado, $comentarios, $userName, $password) {
        $this->nome = $nome;
        $this->email = $email;
        $this->cidade = $cidade;
        $this->estado = $estado;
        $this->comentarios = $comentarios;
        $pdo = new PDO('mysql:host=localhost;dbname=teste', $userName, $password);
    }

    function selectAllFromTable($tableName) {
        $pdo = new PDO('mysql:host=localhost;dbname=teste', 'root', '');
        $query = "SELECT * FROM ".$tableName; 
        $stmt = $pdo->query($query)->fetchAll();
        return $stmt;
    }

    function selectAllFromState($state) {
        $pdo = new PDO('mysql:host=localhost;dbname=teste', 'root', '');
        $query = "SELECT * FROM cadastro WHERE estado=". $state;
        $stmt = $pdo->query($query)->fetchAll();
        return $stmt;
    }

    function deleteAllDisableFromState($state) {
        try {
            $pdo = new PDO('mysql:host=localhost;dbname=teste', 'root', '');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "DELETE FROM cadastro WHERE estado = :state AND comentarios = 'Desativado'";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':state', $state);
            $stmt->execute();

          } catch(PDOException $e) {
            echo 'Error: ' . $e->getMessage();
        }
    }

    function selectAllDistinctFromTable($field, $tableName) {
        $pdo = new PDO('mysql:host=localhost;dbname=teste', 'root', '');
        $query = "SELECT DISTINCT ".$field. " FROM ". $tableName ." WHERE ". $field ." IS NOT NULL";
        $stmt = $pdo->query($query)->fetchAll();
        return $stmt;
    }
}
?>

  