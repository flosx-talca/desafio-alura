const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-area_mensaje");
const texto1 = document.querySelector(".principal__salida_mensaje_inicial");
const texto2 = document.querySelector(".principal__salida_mensaje_inicial_pequeno");
const botonCopiar = document.querySelector(".btn_copiar");


function botonEncriptar(){
    const texto = encriptarTexto(textArea.value);
    mensaje.value=texto;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
    texto1.remove();
    texto2.remove();
    botonCopiar.style.display = "inline";

}


function botonDesencriptar(){
    const texto = desencriptarTexto(textArea.value);
    mensaje.value=texto;
    textArea.value="";
    /*mensaje.style.backgroundImage = "none";
    texto1.remove();
    texto2.remove();
    botonCopiar.style.display = "inline";*/

}

function encriptarTexto(textoEncriptado){
    let matriz = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //console.table(matriz);
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i = 0; i < matriz.length; i++){
        if(textoEncriptado.includes(matriz[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matriz[i][0],matriz[i][1]);

        }

        
    }
    return textoEncriptado;
}


function desencriptarTexto(textoDesencriptado){
    let matriz = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //console.table(matriz);
    //textoEncriptado = textoEncriptado.toLowerCase();
    for(let i = 0; i < matriz.length; i++){
        if(textoDesencriptado.includes(matriz[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matriz[i][1],matriz[i][0]);

        }

        
    }
    return textoDesencriptado;
}

function copiarContenido(){
    mensaje.select();
   navigator.clipboard.writeText(mensaje.value)
    .then(() => {
        //console.log('Text copied to clipboard');
        //alert('Text copied to clipboard: ' + mensaje.value);
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });
}


