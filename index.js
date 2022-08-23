const inputOriginal = document.querySelector("#txt_original")
const outputEncrypted = document.querySelector("#txt_encrypted")


function encrypt(txtEncrypted){
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    txtEncrypted = txtEncrypted.toLowerCase();

    for(let i=0; i<matrixCode.length; i++){
        if(txtEncrypted.includes(matrixCode[i][0])){
            txtEncrypted = txtEncrypted.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return txtEncrypted;
}

function decrypt(txtDecrypted){
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    txtDecrypted = txtDecrypted.toLowerCase();

    for(let i = 0; i<matrixCode.length; i++){
        if(txtDecrypted.includes(matrixCode[i][1])){
            txtDecrypted = txtDecrypted.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return txtDecrypted;
}


function btnEncrypt(){
    const txtEn = encrypt(inputOriginal.value);
    outputEncrypted.value = txtEn;
    inputOriginal.value = "";
    recImage();
}

function btnDecrypt(){
    const txtDe = decrypt(inputOriginal.value);
    outputEncrypted.value = txtDe;
    inputOriginal.value = "";
    recImage()
}

function btnCopyTxt(){
    outputEncrypted.select();
    navigator.clipboard.writeText(outputEncrypted.value);
    outputEncrypted.value = "";
    recImage()
}


function recImage() {
    if (outputEncrypted.value.length >= 1){
        outputEncrypted.style.backgroundImage = "none";
    } else {
        outputEncrypted.style.backgroundImage = "url('imgs/img_encriptar.png')";
    }
}

function btnClearTxt(){
    outputEncrypted.value = "";
    recImage()
}


let txtCopied = document.querySelector('#copy_txt');
let txtEncrypted = document.querySelector('#btn_encrypt');
let txtDecrypted = document.querySelector('#btn_decrypt');

txtCopied.addEventListener("click", function() {
    this.textContent = "Texto Copiado!";
})
txtCopied.addEventListener("mouseout", function() {
    this.textContent = "Copiar Texto";
})

txtEncrypted.addEventListener("click", function() {
    this.textContent = "Texto Encriptado!";
})
txtEncrypted.addEventListener("mouseout", function() {
    this.textContent = "Encriptar";
})

txtDecrypted.addEventListener("click", function() {
    this.textContent = "Texto Desencriptado!";
})
txtDecrypted.addEventListener("mouseout", function() {
    this.textContent = "Desencriptar";
})