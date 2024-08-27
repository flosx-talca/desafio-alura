const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-area_mensaje");
const texto1 = document.querySelector(".principal__salida_mensaje_inicial");
const texto2 = document.querySelector(".principal__salida_mensaje_inicial_pequeno");
const botonCopiar = document.querySelector(".btn_copiar");


function validaCaracteresEspeciales(validar){
    for(i=0;i<validar.length;i++){
        console.log(validar.charCodeAt(i));
        if ((validar.charCodeAt(i) >= 97 && validar.charCodeAt(i) <= 122 || validar.charCodeAt(i) == 32 || (validar.charCodeAt(i) >= 48 && validar.charCodeAt(i) <= 57))){

        }
        else{
            return false;
        }
    }
    if(i==0){
        return false;

    }
    return true;
}


function cumpleCondicion(){
    let caracteresEspeciales = true;
    caracteresEspeciales = validaCaracteresEspeciales(textArea.value);
    console.log(caracteresEspeciales);
    return caracteresEspeciales;
}


function botonEncriptar(){
    let pasoOK = cumpleCondicion();
    if (pasoOK){
        const texto = encriptarTexto(textArea.value);
        mensaje.value=texto;
        textArea.value="";
        mensaje.style.backgroundImage = "none";
        mensaje.style.display = "inline";
        texto1.remove();
        texto2.remove();
        botonCopiar.style.display = "inline";
    
    }
    else{
        alert("Ingresar solo minusculas, sin acentos ni caracteres especiales y al menos 1 caracter");

    }

}


function botonDesencriptar(){
    let pasoOK = cumpleCondicion();
    if (pasoOK){
        const texto = desencriptarTexto(textArea.value);
        mensaje.value=texto;
        textArea.value="";
    }
    else{
        alert("Ingresar solo minusculas, sin acentos ni caracteres especiales y al menos 1 caracter");

    }
}


function encriptarTexto(textoEncriptado){
    let matriz = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
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
        console.log('Texto copiado');
    })
    .catch(err => {
        console.error('Fallo al copiar texto ', err);
    });
}


