const { select } = require('@inquirer/prompts');

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
                console.log("Vamos cadastrar!");
                break;
            case "listar":
                console.log("Vamos listar!");
                break;
            case "sair":
                console.log("Até a próxima!");
                return;
        }
    }
}

start();

