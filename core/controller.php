<?php


$menu = array('home' => 'http://google.com','facebook'=>'http//facebook.com','youtube'=>'http//youtube.com','ttitter'=>'http//twitter.com');
$usuario = array('user'=>'juan','perfil'=>'admin');
$resultados = array('menu'=>$menu,'usuario'=>$usuario);

echo json_encode($resultados); 



?>