function encryptar() {
    let textarea = document.getElementById("texto");
    let palabra = textarea.value;

    let encriptado = palabra.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    let right = document.getElementById("right");
    right.innerHTML = `
        <div class="message">
            <textarea id="textoEncriptado" class="inputText right" readonly>${encriptado}</textarea>
            <button class="btn copy" onclick="copiarTexto('textoEncriptado')">Copiar texto</button>
        </div>
    `;
}

function copiarTexto(id) {
    let textoEncriptado = document.getElementById(id);
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function decryptar() {
    let textarea = document.getElementById("texto");
    let palabra = textarea.value;

    let desencriptado = palabra.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    let right = document.getElementById("right");
    right.innerHTML = `
        <div class="message">
            <textarea id="textoDesencriptado" class="inputText right" readonly>${desencriptado}</textarea>
            <button class="btn copy" onclick="copiarTexto('textoDesencriptado')">Copiar texto</button>
        </div>
    `;
}
