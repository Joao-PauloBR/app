const { select, input } = require('@inquirer/prompts');
// input é o campo de entrada para o usuário digitar

let meta = {
    value: "Estudar programação 120 minutos por dia",
    checked: false
}

let metas = [meta];

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta: " });

    if (meta.length == 0) {
        console.log("A meta não pode ser vazia.");
        return cadastrarMeta();
    }
    metas.push(
        {
            value: meta,
            checked: false
        } // Checked sempre começa como falsa porque você está querendo cadastrar uma meta.
          // Não faria sentido se esse meta já estivesse cumprida.
    );
};

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
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        // o await é: espere o usuário digitar alguma coisa!
        // Se não colocasse o await, o código entrava no while e começava o loop.
        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta();
                console.log(metas);
                break;
            case "listar":
                //listarMeta();
                break;
            case "sair":
                console.log("Até a próxima!");
                return;
        }
    }
}

start();

