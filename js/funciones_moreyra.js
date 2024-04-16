//eclarar una función que le pida al usuario ingresar un número (pueden utilizar prompt).
//Calcular el iva (21%) del número ingresado. 
//Luego mostrar en pantalla el valor total con y sin el iva.



var letraUsuario;
            var numeroUsuario;
            var puntos;
            var PALO = ['ORO', 'BASTO', 'ESPADA', 'COPA', 'ORO', 'BASTO', 'ESPADA', 'COPA','ORO', 'BASTO', 'ESPADA', 'COPA'];
             //Le pida al usuario que ingrese un número entre 0 y 25, y una letra, y las almacene cada dato en una variable. (Pista: prompt() ) 
             var letraUsuario = prompt("Ingrese un PALO DE CARTAS: ORO, BASTO, ESPADA O COPA ");
             var numeroUsuario = prompt("Ingrese un numero entre 1 y 12: ");
             numeroUsuario = numeroUsuario - 1;
               if (numeroUsuario>=0 && numeroUsuario<=11){
                        if (letraUsuario==PALO[numeroUsuario]){
                            alert("Ha ganado, ADIVINO LA CARTA "+PALO[numeroUsuario]+"  NUMERO:  "+parseInt(numeroUsuario+1));
                             puntos = 100;
                        }else{
                            alert("Ha perdido");
                            puntos = 0;
                        }
               }else{
                alert("El numero ingresado no esta entre 1 y 12");
                puntos = -100;
               }
               $(document).ready(function(){
         $("a").click(function(evento){    
              evento.preventDefault();
                });
           });

           function calcularPuntos()
            {
                //alert("Tu puntaje es de: 100");
                 document.writeln("<h1>JUEGO ADIVINE LA CARTA DE UN MASO ESPAÑOL <h1>");
                 document.writeln("<h1>Tu puntaje es de: </h1>",puntos);
             
   
            }