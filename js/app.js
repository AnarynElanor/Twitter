var cuadrodeTexto = document.getElementById("areaTexto");
var autor = document.getElementById("autor");
var contenedorLetras=document.getElementById("charConter");
var contador = 0;
var botonEnviar =document.getElementById("enviar");
var longitud = cuadrodeTexto.length;



enviar.addEventListener("submit",mostrarTweet);
areaTexto.addEventListener("keyup" ,contadorLetras);
botonEnviar.addEventListener("click",mostrarTweet);
areaTexto.addEventListener("keydown",contadorLetras);
//document.addEventListener("click",main);
areaTexto.addEventListener("click",ignorar);
botonEnviar.addEventListener("click",ignorar);
autor.addEventListener("click",ignorar);

function contadorLetras(event){
  var totalTweet=140;
  contador= cuadrodeTexto.value.length;
  //contenedorLetras.innerHTML= contador + "/140";
  contenedorLetras.innerHTML= totalTweet- contador;
}

function mostrarTweet(event){
  var tweetStories = document.getElementById("tweetStories");
  var article = document.createElement("article");
  var tweet = document.createElement("span");
  var sign = document.createElement("label");
  sign.innerHTML= "@" +autor.value + "<hr>";
  tweet.innerHTML = cuadrodeTexto.value + "<br>";


tweet.appendChild(sign);
article.appendChild(tweet);
tweetStories.appendChild(article);

cuadrodeTexto.value = "";
cuadrodeTexto.length = 0;
autor.value ="";
}
//function main (){
  //contadorClick++;
  //document.getElementById("contadorClicks").innherHTML = "Numero de clicks: " + contadorClick;
//}

function ignorar(event){
  event.stopPropagation();
}
