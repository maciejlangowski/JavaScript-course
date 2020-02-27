/*tworzymy dwie zmienne - dla id content i dla guzika*/

var content = document.getElementById("content");
var button = document.getElementById("show-more");

/* tworzymy funkcje onclick dla guzika. Jesli content otwarty to
zmniejsz go. W przeciwnym razie - zwieksz 
Czyli jesli content ma klase open to nadaj mu klase " " co oznaczac
bedzie zmniejszenie okienka.
W przeciwnym razie (czyli jak bedzie mial inna klase niz open) to
nadaj mu klase open, ktora oznacza rozszerzenie okienka (zgodnie ze
zdefiniowana klasa open w style.css) */

/* chcemy tez zeby guzik pokazywal show less jesli
okienko bedzie rozszerzone i na odwrot */

button.onclick = function(){
    if(content.className == "open"){
        content.className = "";
        button.innerHTML="show more";
    }
    else{
        content.className = "open";
        button.innerHTML="show less";
    }
}


