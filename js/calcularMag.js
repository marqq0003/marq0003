function calcularMag ()
{
    var masa= 5.97E24;
    var radio= 6378e3;
    var volumen= (4/3)*Math.PI*radio*radio*radio;
    var densidad= masa/volumen;
    var d=document.getElementById("resultadoA");
    d.innerHTML=densidad+' m/s';
}