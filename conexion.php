<?php
function Conectarse(){
    $servidor="localhost";
    $basededatos="noticiassanpablo";
    $usuario="root";
    $clave="";
    $cn=mysqli_connect($servidor,$usuario,$clave) or die ("Error conectando a la base de datos noticias San Pablo");
    mysqli_select_db($cn,$basededatos) or die ("Error seleccionando la base de datos noticias");
    return $cn;
}
?>