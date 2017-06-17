<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$sql = " DELETE FROM productos
WHERE id = ".$request['id'];

$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {
	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Borrado.' ));
}else{
	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ));
}

echo $Respuesta;

?>