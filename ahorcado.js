$( document ).ready(function() {
    

//Variables
var lista = ["manzana","naranja","sandia","pera","mango"]

var palabra = lista[Math.floor(Math.random()*lista.length)]

console.log(palabra);

//Separar la palabra en arreglo de caracteres
var palabraseparada = palabra.split("");

//Hacer un span por cada char
$.each(palabraseparada, function(index, value) {
  $('<span />', {
    "text": "_"  +  "  "
  }).appendTo('#contenedor');
});


var intentos = 3;
console.log(intentos)



//$(".letra").click(function() {

  //  var letraclick = $(this).attr("value")

    // $.each(palabraseparada, function(index, letra) {

      // if (letraclick == letra){

        // document.getElementsByTagName('span')[index].innerHTML = letraclick;

       
       //}

    // else {

      // intentos -= 1;

      //}

      //})

      //console.log(intentos);

    //})

//});




$(".letra").click(function() {

    var letraclick = $(this).attr("value")

    if(palabra.indexOf(letraclick) != -1) {

      for(var i=0; i<palabra.length; i++) {

        if(palabra[i]==letraclick)

    {

      document.getElementsByTagName('span')[i].innerHTML = letraclick;

    }
      }

    alert('si encontrada')
    

    }
    else
    {
    intentos --
      alert("Tienes" + intentos)
      
    }

        
       

    })

});
