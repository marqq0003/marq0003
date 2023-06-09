function calcula_magnitud(){
    var masa= 5.97E24;
    var radio= 6378e3;
    var volumen= (4/3)*Math.PI*radio*radio*radio;
    var densidad= masa/volumen;
    var d=document.getElementById("resultadoA");
    d.innerHTML=densidad+' m/s';
    }


    /*
    Para calcular la velocidad de escape de la Tierra, primero debemos convertir la unidad de medida de r de cm a m:

r = 6.37 x 10^8 cm = 6.37 x 10^6 m

Luego, podemos sustituir los valores dados en la ecuación:

v = sqrt(2G M/r)
v = sqrt(2 * 6.67 x 10^-11 Nm^2/Kg^2 * 5.98 x 10^27 Kg / 6.37 x 10^6 m)

v = sqrt(2 * 6.67 x 10^-11 * 5.98 / 6.37) m/s
v = sqrt(0.000011022) m/s
v = 0.1054 m/s


    */