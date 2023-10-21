function generar(){
    var tamano = document.getElementById("tamanoText").value;
    var ancho = document.getElementById("anchoText").value;
    var color = document.getElementById("colorText").value;
    var enfoque = document.getElementById("enfoqueText").value;
    var desenfoque = document.getElementById("desenfoqueText").value;
    var numFotos = 20;
    var galeria = document.getElementById("fotos");

    if(galeria.innerHTML != ""){
        galeria.innerHTML = "";
        generarImg();
    } else {
        generarImg();
    }

    function generarImg() {
        for (let i = 1; i<= numFotos; i++){
            if(i <= 9) {
                galeria.innerHTML += '<img id="img'+i+'" src="images/image0'+ i +'.jpg" alt="Foto">';
                document.getElementById("img"+i).style = "margin: 5px; \
                                                          width: "+tamano+"px; \
                                                          border: "+ancho+"px solid #"+color+";\
                                                          filter: blur("+desenfoque+"px);";
            }else {
                galeria.innerHTML += '<img id="img'+i+'" src="images/image'+ i +'.jpg" alt="Foto ">';
                document.getElementById("img"+i).style = "margin: 5px; \
                                                          width: "+tamano+"px; \
                                                          border: "+ancho+"px solid #"+color+"; \
                                                          filter: blur("+desenfoque+"px);";
            }
        }
    }
}
