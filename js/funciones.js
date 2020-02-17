function cargaurl(url,contenedor){
    var url=url;
    var contenedor=contenedor;
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get(url,{},function(data){
        $("#"+contenedor).html(data);
    });
}

function newgenero(contenedor){
    var genero=$('#genero').val();
    var contenedor=contenedor;
    
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("inserta.php",{
        genero:genero
        }, function(data){
        $("#"+contenedor).html(data);
    });

}

function newlan(contenedor){
    var idioma=$('#idioma').val();
    var contenedor=contenedor;
    
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("insertalan.php",{
        idioma:idioma
        }, function(data){
        $("#"+contenedor).html(data);
    });

}

function newurb(contenedor){
    var urbanizacion=$('#urbanizacion').val();
    var contenedor=contenedor;
    
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("insertaurb.php",{
        urbanizacion:urbanizacion
        }, function(data){
        $("#"+contenedor).html(data);
    });

}

function newformat(contenedor){
    var formato=$('#format').val();
    var contenedor=contenedor;
    
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("insertafor.php",{
        formato:formato
        }, function(data){
        $("#"+contenedor).html(data);
    });

}



function newclient(contenedor){
    var codigo=$('#codigo').val();
    var nombres=$('#nombres').val();
    var direccion=$('#direccion').val();
    var telefono=$('#telefono').val();
    var urbanizacion=$('#urbname').val();
    var codigo=codigo.trim();
    var nombres=nombres.trim();
    var direccion=direccion.trim();
    var telefono=telefono.trim();
    var contenedor=contenedor;
    
    if(codigo===''){
        alert('ingresa código');
    }else if(nombres===''){
        alert('ingresa nombres');
    }else if(direccion==''){
        alert('ingresa direccion correcta');
    }else if(isNaN(telefono/2) || telefono=='' && telefono>=0){ //validar no se ingrese negativo
        alert('ingresa un telefono válido');
    }else{
    
    //alert(codigo);
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("insertaclient.php",{
        codigo:codigo,
        nombres:nombres,
        direccion:direccion,
        telefono:telefono,
        urbanizacion:urbanizacion
        
        
    }, function(data){
        $("#"+contenedor).html(data);
    });
}
}

function actualizar(){
    var codigo=$('#codigo').val();
    var codigo=codigo.trim();
    if(codigo==''){
        alert('Favor ingresa un código')
    }else{
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("conalumno.php",
    {codigo:codigo},
    function(data){
        $("#detalle").html(data);
    });
}
}

function actualizar1(codigo){
    var codigo=codigo;
    //alert(codigo);
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("conalumno.php",
    {codigo:codigo},
    function(data){
        $("#detalle").html(data);
    });

}

function modform(codigo){
    var codigo=$('#codigo').val();
    //alert(codigo);
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("modcliente.php",
    {codigo:codigo},
    function(data){
        $("#detalle").html(data);
    });

}

function actualizarenbd(contenedor){
    var codigo=$('#codigo').val();
    var nombres=$('#nombres').val();
    var direccion=$('#direccion').val();
    var telefono=$('#telefono').val();
    var urbanizacion=$('#urbname').val();
    var codigo=codigo.trim();
    var nombres=nombres.trim();
    var direccion=direccion.trim();
    var telefono=telefono.trim();
    var contenedor=contenedor;
    if(codigo===''){
        alert('ingresa código');
    }else if(nombres===''){
        alert('ingresa nombres');
    }else if(direccion==''){
        alert('ingresa direccion correcta');
    }else if(isNaN(telefono/2) || telefono=='' && telefono>=0){ //validar no se ingrese negativo
        alert('ingresa un telefono válido');
    }else{
    
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
        $.get("updateform.php",{
            codigo:codigo,
            nombres:nombres,
            direccion:direccion,
            telefono:telefono,
            urbanizacion:urbanizacion
    }, function(data){
        $("#"+contenedor).html(data);
    })
}
};

function borrar(codigo){
    var codigo=codigo;
    var mensaje= confirm("Estas seguro de borrar el dato?")
    if(mensaje){
    $.post("borrabd.php",{
        codigo:codigo
    }, function(data){
        $("#detalle").html(data);
    });
    }else{
        alert("sigue editando")
    }

}






//para ingresar videos
function newvid(contenedor){
    var codvideo=$('#codvideo').val();
    var titulo=$('#titulo').val();
    var genero=$('#genname').val();
    var idioma=$('#idioname').val();
    var formato=$('#forname').val();
    var ano=$('#ano').val();
    var numero=$('#cantidad').val();
    var codvideo=codvideo.trim();
    var titulo=titulo.trim();
    var ano=ano.trim();
    var numero=numero.trim();
    var contenedor=contenedor;
    
    if(codvideo===''){
        alert('ingresa código');
    }else if(titulo===''){
        alert('ingresa titulo');
    }else if(isNaN(ano/2) || ano=='' && ano>=0){ //validar no se ingrese negativo
        alert('ingresa un anio valido');
    }else if(isNaN(numero/2) || numero=='' && numero>=0){ //validar no se ingrese negativo
        alert('ingresa una cantidad valida');
    }else{
    
    //alert(codigo);
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("insertavid.php",{
        codvideo:codvideo,
        titulo:titulo,
        genero:genero,
        idioma:idioma,
        formato:formato,
        ano:ano,
        numero:numero        
        
    }, function(data){
        $("#"+contenedor).html(data);
    });
}
}

function actualizarvid(){
    var codvideo=$('#codvideo').val();
    var codvideo=codvideo.trim();
    if(codvideo==''){
        alert('Favor ingresa un código')
    }else{
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("convideo.php",
    {codvideo:codvideo},
    function(data){
        $("#detalle").html(data);
    });
}
}

function actualizarvid1(codvideo){
    var codvideo=codvideo;
   
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("convideo.php",
    {codvideo:codvideo},
    function(data){
        $("#detalle").html(data);
    });
}


function modvid(){
    var codvideo=$('#codvideo').val();
    //alert(codigo);
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("modvideo.php",
    {codvideo:codvideo},
    function(data){
        $("#detalle").html(data);
    });

}

function actualizarvidenbd(contenedor){
    var codvideo=$('#codvideo').val();
    var titulo=$('#titulo').val();
    var genero=$('#genname').val();
    var idioma=$('#idioname').val();
    var formato=$('#forname').val();
    var ano=$('#ano').val();
    var numero=$('#cantidad').val();
    var codvideo=codvideo.trim();
    var titulo=titulo.trim();
    var ano=ano.trim();
    var numero=numero.trim();
    var contenedor=contenedor;
    
    if(codvideo===''){
        alert('ingresa código');
    }else if(titulo===''){
        alert('ingresa titulo');
    }else if(isNaN(ano/2) || ano=='' && ano>=0){ //validar no se ingrese negativo
        alert('ingresa un anio valido');
    }else if(isNaN(numero/2) || numero=='' && numero>=0){ //validar no se ingrese negativo
        alert('ingresa una cantidad valida');
    }else{
    
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
        $.get("updateformvid.php",{
            codvideo:codvideo,
            titulo:titulo,
            genero:genero,
            idioma:idioma,
            formato:formato,
            ano:ano,
            numero:numero  
    }, function(data){
        $("#"+contenedor).html(data);
    })
}
};

function borrarvid(codvideo){
    var codvideo=codvideo;
    var mensaje= confirm("Estas seguro de borrar el video?")
    if(mensaje){
    $.post("borravidbd.php",{
        codvideo:codvideo
    }, function(data){
        $("#detalle").html(data);
    });
    }else{
        alert("sigue editando")
    }

}

//ficha agregar------------------------------
function newficha(contenedor){
    var codficha=$('#nroficha').val();
    var cliente=$('#cliname').val();
    var video=$('#vidname').val();
    var inidate=$('#inidate').val();
    var enddate=$('#enddate').val();
    var costo=$('#cost').val();
    var mora=$('#mora').val();
    var comentario=$('#sugestions').val();
    var codficha=codficha.trim();
    var costo=costo.trim();
    var mora=mora.trim();
    var comentario=comentario.trim();
    var contenedor=contenedor;
    
    if(codficha===''){
        alert('ingresa código');
    }else if(isNaN(costo/2) || costo=='' && costo>=0){ //validar no se ingrese negativo
        alert('ingresa número y positivo');
    }else if(isNaN(mora/2) || mora=='' && mora>=0){ //validar no se ingrese negativo
        alert('ingresa número y positivo');
    }else if(comentario===''){
        alert('Favor ingresa un comentario válido');
    }
    else{
    
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("insertaficha.php",{
        codficha:codficha,
        cliente:cliente,
        video:video,
        inidate:inidate,
        enddate:enddate,
        costo:costo,
        mora:mora,
        comentario:comentario        
        
    }, function(data){
        $("#"+contenedor).html(data);
    });
}
}

function actualizaficha(){
    var codficha=$('#nroficha').val();
    var codficha=codficha.trim();
    if(codficha==''){
        alert('Favor ingresa un código')
    }else{
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("conficha.php",
    {codficha:codficha},
    function(data){
        $("#detalle").html(data);
    });
}
}
function actualizaficha1(codficha){
    var codficha=codficha;
   
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("conficha.php",
    {codficha:codficha},
    function(data){
        $("#detalle").html(data);
    });
}

function modficha(){
    var codficha=$('#nroficha').val();
    //alert(codigo);
    document.getElementById("detalle").innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
    $.get("modficha.php",
    {codficha:codficha},
    function(data){
        $("#detalle").html(data);
    });

}

function actualizarfichaenbd(contenedor){
    var codficha=$('#nroficha').val();
    var cliente=$('#cliname').val();
    var video=$('#vidname').val();
    var inidate=$('#inidate').val();
    var enddate=$('#enddate').val();
    var costo=$('#cost').val();
    var mora=$('#mora').val();
    var comentario=$('#sugestions').val();
    var codficha=codficha.trim();
    var costo=costo.trim();
    var mora=mora.trim();
    var comentario=comentario.trim();
    var contenedor=contenedor;
    
    if(codficha===''){
        alert('ingresa código');
    }else if(isNaN(costo/2) || costo=='' && costo>=0){ //validar no se ingrese negativo
        alert('ingresa número y positivo');
    }else if(isNaN(mora/2) || mora=='' && mora>=0){ //validar no se ingrese negativo
        alert('ingresa número y positivo');
    }else if(comentario===''){
        alert('Favor ingresa un comentario válido');
    }
    else{
    
    document.getElementById(contenedor).innerHTML="<img src='img/preload1.gif' width='16' height='16'>";
        $.get("updateformfic.php",{
            codficha:codficha,
            cliente:cliente,
            video:video,
            inidate:inidate,
            enddate:enddate,
            costo:costo,
            mora:mora,
            comentario:comentario
    }, function(data){
        $("#"+contenedor).html(data);
    })
}
};

function borrarfic(codficha){
    var codficha=codficha;
    var mensaje= confirm("Estas seguro de borrar la ficha?")
    //alert(codficha);
    if(mensaje){
    $.post("borraficbd.php",{
        codficha:codficha
    }, function(data){
        $("#detalle").html(data);
    });
    }else{
        alert("sigue editando")
    }

}