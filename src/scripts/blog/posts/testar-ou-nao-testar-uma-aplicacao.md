title: Testar ou não testar uma aplicação?
date: 2021-11-19
description: Acredite você ou não, todo software é testado enquanto é desenvolvido. A opção 'sem testes' pode até existir na teoria, mas na prática eles sempre são feitos. A questão é definir como você os faz.
keywords: testes automatizados, aplicação, desenvolvimento
lang: pt-BR

---

Essa é uma pergunta recorrente no desenvolvimento de software. Respostas para essa pergunta costumam gerar debates acalorados que confrontam vários pontos de vista. Mas apesar da pergunta parecer complexa ao sugerir um dilema, a única resposta possível me parece bem óbvia.

Alguns dizem que testes adicionam ao projeto um custo adicional porque demandam mais tempo de desenvolvimento. Minha visão é um pouco diferente. Acredite você ou não, todo software é testado enquanto é desenvolvido. A opção "sem testes" pode até existir na teoria, mas na prática eles sempre são feitos. A questão é definir como você os faz.

Vejamos por exemplo o caso de um desenvolvedor que considera estar desenvolvendo uma aplicação sem testes. Ele implementa alguns campos de formulário, adiciona um botão para submeter os dados, e assim por diante. Tão logo escreve essas linhas de código, ele abre o Browser, preenche os campos, e clica no botão que submete os dados. Verifica então se algo que ele esperava que acontecesse de fato aconteceu. Caso não tenha acontecido, ele ajusta o código até que o comportamento esperado aconteça. Interagir com uma aplicação no Browser durante o desenvolvimento para verificar se ela se comporta como deveria pode ilusoriamente transmitir a ideia de que isso é "desenvolver sem testes". Embora tenha sido feito manualmente no Browser, o desenvolvedor fez o teste. Observe que para concluir até mesmo o desenvolvimento de poucas linhas de código é necessário testá-las.

O dilema entre testar ou não uma aplicação é falso. O dilema real é se devemos testá-la de maneira manual ou automatizada.

Ao escolher testá-la manualmente, você opta pela estratégia na qual um desenvolvedor precisa abrir o Browser não apenas para garantir que a nova funcionalidade funcione, mas também para garantir que ela não causou defeitos a nenhuma outra funcionalidade já existente. Essa estratégia soa um pouco cara pra mim. A outra estratégia seria fazer testes manuais apenas para novas funcionalidades, deixando a cargo dos clientes verificar se o resto da aplicação continua funcionando como o esperado. Me parece uma estratégia ainda mais cara...

A outra estratégia é testar cada nova funcionalidade de maneira automatizada. Ao invés de verificar o comportamento esperado no Browser, você o verifica executando uma suíte de testes automatizados. O esforço necessário para escrever um teste automatizado é muito parecido com aquele despendido no Browser. A grande diferença é que o teste manual precisa ser executado por um ser humano, é repetitivo, tedioso e demora muito. O teste automatizado é escrito pelo desenvolvedor uma vez apenas e executado milhares de vezes por uma máquina num espaço de tempo infinitamente menor do que o tempo que um ser humano levaria para fazer o mesmo trabalho. Enfim, uma estratégia razoável.

Mas por quê tanta gente tem a impressão que testes manuais são mais baratos do que testes automatizados? Minha resposta para essa pergunta é que existe uma outra ilusão envolvida no processo. A ilusão que todo desenvolvedor está automaticamente preparado para escrever testes automatizados simplesmente porque sabe programar.

Apesar de compartilharem alguns requisitos comuns, desenvolver uma aplicação e escrever testes automatizados são atividades bastante distintas. Saber programar é somente um dos requisitos necessários para escrever testes automatizados. Anos de experiência desenvolvendo aplicações não significa necessariamente anos de experiência escrevendo testes automatizados. Larga experiência desenvolvendo grandes aplicações não significa larga experiência desenvolvendo grandes aplicações de alta qualidade. Possuir dezenas de habilidades necessárias para desenvolver uma aplicação não significa possuir dezenas de habilidades necessárias para escrever testes automatizados. Assim sendo, da próxima vez que um desenvolvedor alegar que vai demorar mais tempo para desenvolver uma nova funcionalidade por que precisará escrever testes automatizados, tenha em mente que o desenvolvimento não tomará mais tempo por causa dos testes. Tomará mais tempo porque esse desenvolvedor não reúne ainda todas as habilidades necessárias para escrever testes automatizados.
