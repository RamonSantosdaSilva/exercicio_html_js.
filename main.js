const form = document.getElementById('formCamp');

function validarCampos (validaCampo){
    let campA = document.getElementById('camp1')
    let campB = document.getElementById('camp2')
    return campA.value >= campB.value;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const compValido = document.getElementById('camp1')
    if(!validarCampos(compValido.value)) {
        alert("Sucesso: Campos corretos")
    } else {
        alert("Erro: Campo A está Maior")
    }
})

console.log(form)