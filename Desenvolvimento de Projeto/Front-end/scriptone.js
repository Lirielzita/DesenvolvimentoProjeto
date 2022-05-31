//Emanoela Rodrigues Erthal

var dicionario
const setDic = async () => { await fetch('tres.txt').then(response => response.text()).then(text => {
    dicionario = text.split("\n");

})}

const botao = document.getElementById("botao")
const div_principal = document.getElementById("palavra")
const input_principal = document.getElementById("inputPalavra")
const erro = document.getElementById("erro")
var palavra
const main = async () => { //Executa o programa depois do dicionário ter carregado
    await setDic()

    palavra = dicionario[parseInt(Math.random() * dicionario.length)].toLowerCase() // requisição da palavra pra um bd ou lista


    for (let optionone = 0; optionone < palavra.length; optionone++) { //Cria os inputs onde será digitado as letras
        new_input = document.createElement("input")
        new_input.className = ("texto_letra")
        new_input.setAttribute("maxlength", "1")
        new_input.setAttribute("autofocus", "")
        div_principal.appendChild(new_input)





    }
    console.log(palavra) //Mostra a palavra escolhida no Console apenas para verificação por parte dos autores
    div_principal.style.width = (palavra.length * 5) + "%"
}

main()

botao.onclick = () => {

    let i = 0
    let conclusao = false
    var newWord = ""
    var element = document.querySelectorAll(".texto_letra").forEach((l) => {
        newWord += l.value
    })
    for (let optionone = 0; optionone < dicionario.length; optionone++) { //Verifica se a palavra existe
        if (newWord == dicionario[optionone].toLowerCase()) {
            erro.style.display = "none"
            conclusao = true
            // Verificar se algum dos inputs esta nulo ou igual a " "
            document.querySelectorAll(".texto_letra").forEach((l) => {
                {
                    if (l.value === palavra[i]) { //Adiciona a classificação "Certa" para a letra digitada no lugar certo.
                        l.classList.remove("certo")
                        l.classList.remove("tem")
                        l.classList.remove("errado")
                        l.classList.remove("não_classificada")

                        l.classList.add("certo")

                    } else if (palavra.includes(l.value) && l !== "") { //Adiciona a classificação "Tem" para a letra digitada no lugar errado.
                        l.classList.remove("certo")
                        l.classList.remove("tem")
                        l.classList.remove("errado")
                        l.classList.remove("não_classificada")

                        l.classList.add("tem")

                    } else { //Adiciona a classificação "Errado" para a letra que não há na palavra.
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
    if (!conclusao) { //Adiciona a classificação "Não classificada" para a palavra digitada.
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