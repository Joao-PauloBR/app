const { select, input, checkbox } = require('@inquirer/prompts')
// select mostra uma lista
// input é o campo de entrada para o usuário digitar
// checkbox

let meta = {
    value: "Estudar programação 120 minutos por dia",
    checked: false
}

let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta: " })

    if (meta.length == 0) {
        console.log("A meta não pode ser vazia.")
        return cadastrarMeta()
    }
    metas.push(
        {
            value: meta,
            checked: false
        }) // Checked sempre começa como falsa porque você está querendo cadastrar uma meta.
        // Não faria sentido se esse meta já estivesse cumprida.
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as SETAS para mudar de meta, o ESPAÇO para marcar/desmarcar e o ENTER para finalizar essa etapa",
        choices: [...metas],
        instructions: false
    })
    
    metas.forEach ((m) => {
        m.checked = false
    })

    if (respostas.length == 0) {
        console.log("Nenhuma meta selecionada!")
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true
    })

    console.log("Meta(s) marcadas como concluída(s)")
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })
    if (realizadas.length == 0){
        console.log("Não existem metas realizadas 😢")
        return
    }

    await select({
        message: "Metas realizadas",
        choices: [...realizadas]
    })
}
//-------------------------------------------------------

const start = async () => {

    while (true) {

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
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
                console.log(metas)
                break;
            case "listar":
                await listarMetas()
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

