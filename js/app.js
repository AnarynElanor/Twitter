var cuadrodeTexto = document.getElementById("areaTexto");// declarar  variable  para obtener un Id area  texto
//var autor = document.getElementById("autor"); //declarar  variable  y guardar datos de quien manda msj.
var contenedorLetras=document.getElementById("charConter"); // declara variable para  contar numero de los caracteres
var contador = 0;                                            // declarar variable contador con inicio 0
var botonEnviar =document.getElementById("enviar");
var longitud = cuadrodeTexto.length; // declarar numero de caracteres es su longitus


// declarar los eventos
botonEnviar.addEventListener("submit",mostrarTweet);
areaTexto.addEventListener("keyup" ,contadorLetras);
botonEnviar.addEventListener("click",mostrarTweet);
areaTexto.addEventListener("keydown",contadorLetras);
areaTexto.addEventListener("click",ignorar);
botonEnviar.addEventListener("click",ignorar);
//autor.addEventListener("click",ignorar);


function contadorLetras(event){ //funcion  que  va  a contar el numero de  caracteres
  var totalTweet=140;
  contador= cuadrodeTexto.value.length;
 
  contenedorLetras.innerHTML= totalTweet-contador;  //muestra los caracteres  restantes
  
  if(contador > 140){  // primera  condicion  si contador es mayor a  140
    botonEnviar.disabled = true; // inhabilita  el boton de  Twitter, una  vez superados los 120 caracteres  
  }else if(contador <=140){  // primera  condicion  si contador es mayor a  140
    botonEnviar.disabled = false;
  }



  if(contador >= 120 && contador < 130){   // condicion  si  contador es igual a  120
       contenedorLetras.style.color = "blue";  // contador  cambia de  color a   rojo
    
  }else if (contador >= 130){  // condicion  si el contador  es igual a 130
    contenedorLetras.style.color = "red";  //  contador  cambia de  color
    
  }
}

function mostrarTweet(event){          // funcion   toma el texto ingresado, lo guarda  ycuando se da el envento summit  y muestra en tweetStorie
  var tweetStories = document.getElementById("historial");
  var article = document.createElement("article");
  var tweet = document.createElement("span");
  var sign = document.createElement("label");     // crea un elemento ingresados en label "autor"
  sign.innerHTML=  "<br>" + mostrarHora(); 
  tweet.innerHTML = cuadrodeTexto.value + "<br>";
  article.setAttribute('id','tw-impreso')


  tweet.appendChild(sign);
  article.appendChild(tweet);
  tweetStories.appendChild(article);

  cuadrodeTexto.value = ""; // considera  en  los  datos  ingresados datos en blanco
  cuadrodeTexto.length = 0; // considera si la longitud  hay 0 datos
  autor.value =""; //  si  en el autor no  hay datos
}




function mostrarHora() {   //funcion de hora
  var fecha = new Date();  //  fecha
  var hora = fecha.getHours(); // hora
  var minuto = fecha.getMinutes(); // minutos
     if(minuto < 10) {
         minuto = "0" + minuto;
     }

  var horaImprimible = hora + ":" + minuto;
  return horaImprimible;
}





function ignorar(event){
  event.stopPropagation();
}