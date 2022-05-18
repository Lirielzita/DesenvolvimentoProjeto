var dicionario
fetch('Lista-de-Palavras.txt').then(response => response.text()).then(text => {
    dicionario = text.split("\n");

})

const botao = document.getElementById("botao")
const div_principal = document.getElementById("palavra")
const input_principal = document.getElementById("inputPalavra")
const erro = document.getElementById("erro")
var palavra
function main() {

    var dicionario_bom = dicionario.filter((p) => p.length === 3)
    palavra = dicionario_bom[parseInt(Math.random() * dicionario_bom.length)].toLowerCase() // requisição pra um bd ou lista


    for (let optionone = 0; optionone < palavra.length; optionone++) {
        new_input = document.createElement("input")
        new_input.className = ("texto_letra")
        new_input.setAttribute("maxlength", "1")
        new_input.setAttribute("autofocus", "")
        div_principal.appendChild(new_input)





    }
    console.log(palavra)
    div_principal.style.width = (palavra.length * 5) + "%"
}
setTimeout(main, 5000)


botao.onclick = () => {

    let i = 0
    let conclusao = false
    var newWord = ""
    var element = document.querySelectorAll(".texto_letra").forEach((l) => {
        newWord += l.value
    })
    for (let optionone = 0; optionone < dicionario.length; optionone++) {
        if (newWord == dicionario[optionone].toLowerCase()) {
            erro.style.display = "none"
            conclusao = true
            var element = document.querySelectorAll(".texto_letra").forEach((l) => {
                {
                    if (l.value === palavra[i]) {
                        l.classList.remove("certo")
                        l.classList.remove("tem")
                        l.classList.remove("errado")
                        l.classList.remove("não_classificada")

                        l.classList.add("certo")
                    } else if (palavra.includes(l.value) && l !== "") {
                        l.classList.remove("certo")
                        l.classList.remove("tem")
                        l.classList.remove("errado")
                        l.classList.remove("não_classificada")

                        l.classList.add("tem")
                    } else {
                        l.classList.remove("certo")
                        l.classList.remove("tem")
                        l.classList.remove("errado")
                        l.classList.remove("não_classificada")

                        l.classList.add("errado")
                    }

                }

                i++

            })
        }

    }
    if (!conclusao) {
        document.querySelectorAll(".texto_letra").forEach((l) => {
            l.classList.remove("certo");
            l.classList.remove("tem");
            l.classList.remove("errado");
            l.classList.remove("não_classificada");

            l.classList.add("não_classificada");
        })

        erro.style.display = "block"
    }



}