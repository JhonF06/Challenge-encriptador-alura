const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const error = document.querySelector(".ojos")
const caja =document.querySelector(".caja2")
const avisos =document.querySelector(".avisos")
const btncopi = document.querySelector(".copiar")


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "",
    caja.style.background = "none" 
    avisos.style.display= "none"
    mensaje.style.display= "block"
    btncopi.style.display = "block"  
}

function encriptar(sistema){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    sistema = sistema.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(sistema.includes(matriz[i][0])){
            sistema = sistema.replaceAll(matriz[i][0], matriz[i][1])
        }

    }
    return sistema
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    caja.style.background = "none" 
    avisos.style.display= "none"
    mensaje.style.display= "block"
    btncopi.style.display = "block"
}

function desencriptar(reversa){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    reversa = reversa.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(reversa.includes(matriz[i][1])){
            reversa = reversa.replaceAll(matriz[i][1], matriz[i][0])

        }

    }
    return reversa
}

function copiar(){
    const copiado = document.querySelector(`#sistema`);

    navigator.clipboard.writeText(mensaje.value).then(() => {
      console.log('Contenido copiado al portapapeles');
    }).catch (err => {
      console.error('Error al copiar: ', err);
    })

}