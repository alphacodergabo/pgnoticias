<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tio pio</title>
</head>
<body>
<?php
    include("conexion.php");
    $cn=Conectarse();

    $rsnoticia="select * from noticia order by id desc";
    $noticia=mysqli_query($cn,$rsnoticia);
    
?>
<table width="320">
<?php
    while($rsnoticia=mysqli_fetch_array($noticia)){
?>
    <tr>
        <td width="111" valing="top">
        <div align="center">
            <img src="img/<?php echo $rsnoticia["imagen"] ?>" width="58" align="top">
        </div>
        </td>
        <td width="260"><b><?php echo $rsnoticia["titulo"] ?></b></td>
    </tr>
    <tr>
        <td colspan="2">
            <div align="justify"><?php echo $rsnoticia["cuerpo"] ?></div>
        </td>
    </tr>
    <tr height="2" bgcolor="#000033"><td colspan="2"></td>

    </tr>
<?php } ?>

</table>
</body>
</html>