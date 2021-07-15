title: Formatando qualidade
date: 2020-01-17
description: Era meados de 2018 e eu precisava criar uma aplicação de uso interno na empresa onde trabalhava. O projeto era colocar no ar um cliente web para monitorar as releases da aplicação principal da empresa. Eu era o único front-end trabalhando no projeto e, tendo totais poderes para estruturar a aplicação da maneira que eu achasse melhor, não pude deixar passar a oportunidade de orientar a aplicação à qualidade.
keywords: eslint, eslint, formatação, código, qualidade
lang: pt-BR

---

Era meados de 2018 e eu precisava criar uma aplicação de uso interno na empresa onde trabalhava. O projeto era colocar no ar um cliente web para monitorar as releases da aplicação principal da empresa. Eu era o único front-end trabalhando no projeto e, tendo totais poderes para estruturar a aplicação da maneira que eu achasse melhor, não pude deixar passar a oportunidade de orientar a aplicação à qualidade.

Desde 2017 eu tenho configurado o limite mínimo de cobertura de testes unitários em 100% nas aplicações - pessoais e profissionais - que tenho trabalhado. Nesse projeto não foi diferente. Mas desta vez, eu queria encontrar uma maneira de garantir alguns outros aspectos sobre qualidade. Eu queria encontrar uma maneira de impedir que funções e arquivos inflassem tendendo ao descontrole. Queria impedir condições aninhadas que aos poucos vão tornando o retorno de uma função cada vez menos previsível e, portanto, péssimo para ler e manter. Queria encontrar uma espécie de alarme que tocasse toda vez que um módulo, classe ou função ameaçasse concentrar mais responsabilidade do que devesse.

Foi procurando por ferramentas que pudessem me auxiliar a verificar a qualidade do código que percebi o quanto o ESLint era subutilizado na empresa onde trabalhava. A grande maioria dos programadores que utilizam o ESLint em seus projetos, focam as configurações da ferramenta em aspectos sintáticos. Lá não era diferente. Estipulamos a utilização de ponto e vírgula ao final da declaração, oitenta colunas como comprimento máximo da linha, dois espaços como tamanho de indentação, e assim por diante. Porém, ao ler a documentação da ferramenta em detalhes, percebi que ela oferece a possibilidade de você verificar não apenas a sintaxe do código, mas também aspectos relacionados à qualidade. Particularmente, gostei muito de três regras:

## Complexidade Ciclomática

Quantidade linear de caminhos que o código da sua aplicação pode tomar. Uma função com alto valor de complexidade ciclomática certamente não possui apenas uma única responsabilidade. Lendo apenas seu nome, não é mais possível prever seu resultado. Defino para essa regra o valor máximo de três. Isso significa na prática que uma função pode conter um *if/else* ou, no máximo, dois *if*.

## Limite de linhas

Módulos/classes que contém centenas de linhas representam um mal cheiro no código. Muito provavelmente estão concentrando mais responsabilidades do que deveriam. Não é raro tropeçarmos em arquivos nomeados como *helpers* que na prática se tornam baús sem fundo e crescem indeterminadamente. Definindo o limite de cem linhas por arquivos, forço mais uma vez a desconcentração de responsabilidades. Módulos e classes devem ser tão pequenos quanto suas responsabilidades.

## Limite de declarações

Assim como a complexidade ciclomática, um grande número de declarações indica também que a função está se responsabilizando por mais coisas do que deveria. Defino para essa regra o limite de 5 declarações por função.

Assim como o limite mínimo para testes unitários, não inicio mais nenhum projeto sem essas regras. Essas restrições colaboram com um fator importante. A todo momento sou pressionado a refletir sobre como organizo meu código. Nada impede que você faça uma entrega de sucesso hoje focando apenas em ter um código que satisfaça os requisitos especificados. Mas se preocupar em como organizar o código antes mesmo de fazê-lo satisfazer qualquer especificação garantirá o sucesso da entrega de hoje e de todas as demais.

P.S.: [Aqui](https://github.com/glorious-codes/glorious-pitsby/blob/master/.eslintrc.json), você confere um arquivo real de configuração que mostra como tenho lidado com complexity, max-lines e max-statements em meus projetos.
