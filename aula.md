## Linguagem de programação

Maneira de dar instruções ao computador.

Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.

> 💡 **Algoritmo**: Sequência de passos lógica e finita para resolução de um problema.

## Peças de uma linguagem

- Comentários
- Declaração de variáveis (const, let)
- Operadores (atribuição, concatenação, matemáticos, lógicos)
- Tipos de dados (string, number, boolean)
- Estrutura de dados (functions, object, array)
- Controle de fluxo (if/else)
- Estrutura de repetição (for, while)

## Fases da resolução de um problema

1. Coletar os dados
2. Processar os dados (manipular, alterar, ...)
3. Apresentar os dados

## Escopo e variáveis

- Variáveis globais e locais
- Constantes

## Tipos de dados

- Strings (textos): "", '', ``
- Number (número): 2, 1.4, -150 
- Function: {}
- Boolean: true, false

## Operadores

- Operador de atribuição de valor: =
- Operador de concatenação: +
- Operadores de comparação: ==  !=  <=  >=  < >
- Spread operator: ...

## Arrays

- Uma lista que contém qualquer tipo de dado
- Métodos de array: push, [find, forEach, filter, map - São HOF: Higher Order Functions]

## Objetos

- Atributos e métodos
- Criação e manipulação de objetos
- Acesso a propriedades de objetos

## Functions

- Criar, passar argumento
- Executar
- Arrow Function / Named Function

## Estrutura de repetição

- While: while () {}

## Condicionais

- Switch: switch (option){ case 1:; case 2:; case 3:; ...; Default:}
- if/else: if (){} else{}

## Módulos em Node.JS (npm)

- Importação de módulos (require, CommonJS)
- Biblioteca "inquirer" para criar prompts interativos
- FS (File System)

Para conseguirmos utilizar o menu do switch da melhor maneira, precisamos adicionar um módulo à parte
NPM significa node package manager, ou seja, gerenciador de pacotes do node. Essa instalação é feita
através terminal.

APós baixar a o pacote desejado, irá aparecer uma nova pasta chamada "modules" do node dentro da pasta
onde você está trabalhando, no caso, dentro do seu "app".

O arquivo "package.json" que foi criado junto com a instalação do módulo do node.js "inquirer", diz
quais são os módulos utilizados.

Visando uma questão de organização, importância e tamanho, não vamos realizar o git push/pull dos módulos
do node.js ou qualquer arquivo "inútil" e pesado que possa estar dentro do nosso projeto, para isso
existe o ".gitignore" que avisa para o gerenciador de arquivos do git que esses arquivos ou pastas não
devem ser levados em consideração no controle de versionamento. 

## JSON

- JavaScript Object Notation (.json)
- JSON.parse(): transforma de JSON para JavaScript
- JSON.stringify(): transforma de JavaScript para JSON

## Programação assíncrona e promessas:

- Uso de funções assíncronas (async/await)