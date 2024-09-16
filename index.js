const { select, input, checkbox } = require('@inquirer/prompts')
// select mostra uma lista
// input é o campo de entrada para o usuário digitar
// checkbox
const fs = require("fs").promises
// 

let mensagem = "Bem-vindo ao app de metas!"

let metas

const carregarMetas = async () => {
    try{
        const dados = await fs.readFile("metas.json", "utf-8")
        metas = JSON.parse(dados)
    }
    catch(erro){
        metas = []
    }
}

const salvarMetas = async () => {
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
} // As últimas duas opções da vírgula servem para configurar o arquivo JSON

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta: " })

    if (meta.length == 0) {
        mensagem = "A meta não pode ser vazia."
        return
    }
    metas.push(
        {
            value: meta,
            checked: false
        }) // Checked sempre começa como falsa porque você está querendo cadastrar uma meta.
    // Não faria sentido se esse meta já estivesse cumprida.

    mensagem = "Meta cadastrada com sucesso!"
}

const deletarMetas = async () => {
    if (metas.length == 0){
        mensagem = "Não há nenhuma meta para ser deletada. Adicione alguma primeiro"
        return
    }
    
    const metasDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })

    const itensADeletar = await checkbox({
        message: "Selecione o item que deseja deletar",
        choices: [...metasDesmarcadas],
        instructions: false
    })
    
    if (itensADeletar.length == 0){
        mensagem = "Nenhum item foi selecionado para ser deletado!"
        return
    }

    itensADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })

    mensagem = "Meta(s) deletada(s) com sucesso!"
}

const listarMetas = async () => {
    if (metas.length == 0){
        mensagem = "Não há nenhuma meta para ser listada. Adicione alguma primeiro"
        return
    }

    const respostas = await checkbox({
        message: "Use as SETAS para mudar de meta, o ESPAÇO para marcar/desmarcar e o ENTER para finalizar essa etapa",
        choices: [...metas],
        instructions: false
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0) {
        mensagem = "Nenhuma meta selecionada!"
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true
    })

    mensagem = "Meta(s) marcada(s) como concluída(s)"
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
        // Poderia ter sido feito da seguinte maneira também:
        // return !meta.checked
    })
    if (abertas.length == 0) {
        mensagem = "Parabéns! Vocẽ não possui nenhuma meta aberta 😄"
        return
    }

    await select({
        message: "Metas abertas: " + abertas.length,
        choices: [...abertas]
    })
}


const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })
    if (realizadas.length == 0) {
        mensagem = "Não existem metas realizadas 😢"
        return
    }

    await select({
        message: "Metas realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
}

const mostrarMensagem = () => {
    console.clear()

    if (mensagem != ""){
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

//-------------------------------------------------------

const start = async () => {
    await carregarMetas()

    while (true) {
        mostrarMensagem()
        await salvarMetas()
        
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        // o await é: espere o usuário digitar alguma coisa!
        // Se não colocasse o await, o código entrava no while e começava o loop.
        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta()
                break
            case "deletar":
                await deletarMetas()
                break
            case "listar":
                await listarMetas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}

start()

