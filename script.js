const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-area_mensaje");


function encriptarTexto(textoEncriptado){
    let matriz = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //console.table(matriz);
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i = 0; i < matriz.length; i++){
        if(textoEncriptado.includes(matriz[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matriz[i][0],matriz[i][1]);

        })

        
    }
    return textoEncriptado;
}
