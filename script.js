<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src=""></script>
</head>
<body>
    <div id="hola"></div>
    <div id="hola2"></div>
    <div id="hola3"></div>
    <div id="hola4"></div>
    <div id="hola5"></div>
    <div id="hola6"></div>
    <div id="hola7"></div>
    <div id="hola8"></div>
    <div id="hola9"></div>
    


    <script>
        let articulo = {
    nombre: "Caguamas",
    descripcion: "Bien helodias" ,
    precio: 25,
    cantidad: 30,
    // imagen: URL("https://blog.tacoguru.com/wp-content/uploads/2018/07/Template-Blog-No-Carrusel-4.png")
}

 document.getElementById('hola').innerHTML = articulo.nombre;
 document.getElementById('hola2').innerHTML = articulo.descripcion;
 document.getElementById('hola3').innerHTML = articulo.precio;
 document.getElementById('hola4').innerHTML = articulo.cantidad;
 
 

let venta = {
    articulos: articulo.nombre,
    total: 25,
    ID: 1234,
    mail: "equipo6@gmail.com"
}

document.getElementById('hola5').innerHTML = venta.articulos.nombre;
 document.getElementById('hola6').innerHTML = venta.total;
 document.getElementById('hola7').innerHTML = venta.ID;
 document.getElementById('hola8').innerHTML = venta.mail;


       
        
    </script>
</body>