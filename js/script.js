
function alerta(elemento) {
    // alert("cargando informe meteorolígico");
    var lugar = elemento.innerText;
    alert("Cargando informe meteorilógico " + lugar);

    var h3Element = document.querySelector("h2");
    h3Element.textContent = lugar;
}

function eliminar_cookies() {
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}

//opcion 1

function cambiar_temperatura() {
    var elemento_select = document.querySelector("select");
    console.log(elemento_select.value);

    var grados_c = [24, 18, 27, 19, 21, 16, 26, 21];
    var grados_f = [75, 65, 80, 66, 69, 61, 78, 70];

    for (let i = 0; i < 8; i++) {
        var elemento_temp = document.querySelector(`#temp`+i);
        if (elemento_select.value== "F") {
            elemento_temp.innerText = grados_f[i];
        } else {
            elemento_temp.innerText = grados_c[i];
        }
        
    }
}

//opción 2
/*
    for(let i=0; i<8; i++){
        var tempElement = document.querySelector('#temp'+i);
        var temperature = tempElement.innerText;
        temperature = parseInt(temperature); //Transforms text to int
        console.log(temperature);

        var newTemp = 0;
        if(fOc === "C"){
            //F -> C
            newTemp = Math.round((temperature - 32) * 5 / 9);
        } else{
            //C -> F
            newTemp = Math.round((temperature * 9 / 5) + 32);
        }

        tempElement.innerText = newTemp;        
    }
    */
