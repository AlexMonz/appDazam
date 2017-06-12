<?php
error_reporting(0);

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

$sql = "SELECT * FROM users WHERE usuario = ".$usuario." and pass = ".$pass."";

$Hecho = Database::ejecutar_idu($sql);

echo $Hecho;

if ($Hecho == "1") {
	echo "OK";
}else{
	echo "KO";
}

?>