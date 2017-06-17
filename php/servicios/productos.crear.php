
<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$request['nombre'] = strtoupper($request['nombre']);


$sql = "INSERT INTO productos(nombre, modelo, descripcion, precio, img) 
		VALUES ( '". $request['nombre'] ."',
				 '".$request['modelo']."',
				 '".$request['descripcion']."',
				 '".$request['precio']."',
				 '".$request['img']."' )";


$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {
	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.' ));
}else{
	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ));
}

echo $Respuesta;

?>