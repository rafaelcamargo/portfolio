title: Tratando dados em JavaScript de maneira similar ao operador pipe da linha de comando
date: 2024-03-31
description: Uma das funcionalidades mais formidáveis da interface de linha de comando é o operador pipe. Seria então possível alcançarmos com JavaScript uma abordagem que se aproximasse da intuitividade e da simplicidade oferecida pelo operador pipe? 
keywords: linha de comando, pipe, operador, reduce, javascript
lang: pt-BR

---

Uma das funcionalidades mais formidáveis da interface de linha de comando é o operador pipe. A possibilidade de utilizar os dados resultantes de uma operação como dados de entrada para a operação seguinte torna o processo intuitivo, além de abreviar consideravelmente a quantidade de código escrito, tornando o fluxo de desenvolvimento extremamente produtivo.

Veja a sequência de comandos a seguir, por exemplo. Ela lê o conteúdo de um arquivo chamado contatos.txt, ordena-o, remove os contatos duplicados e, por fim, salva o resultado em um novo arquivo chamado contatos_unicos_ordenados.txt.
``` bash
cat ./contatos.txt | sort | uniq > ./contatos_unicos_ordenados.txt
```

Uma operação relativamente comum no desenvolvimento de websites é a conversão de um texto em um trecho de URL (*slug*). Para alcançar esse resultado, precisamos garantir que eventuais acentos sejam trocados por seus equivalentes caracteres sem acento, espaços desnecessários e caracteres especiais sejam removidos e, por fim, espaços sejam substituídos por hífens. Por exemplo, para a entrada "*== As crianças ainda acreditam  em Papai Noel? ==*" teríamos "*as-criancas-ainda-acreditam-em-papai-noel*".

A implementação desse tipo de tratamento costuma ser um passo a passo semelhante a esse:
``` javascript
function buildSlug(text){
  let slug = text.toLowerCase().trim();
  slug = removeAccents(slug);
  slug = removeUnnecessarySpaces(slug);
  slug = removeSpecialChars(slug);
  return replaceSpacesWithDashes(slug);
}
```

Embora a solução seja legível e intuitiva, o código não é nada sucinto. Além disso, uma mesma variável tem seu valor reatribuído três vezes ao longo do processo, uma abordagem que não é considerada bacana do ponto de vista funcional.

Uma alternativa a essa solução seria usarmos o resultado de uma operação como entrada da operação seguinte de maneira direta, sem intermediários, ou seja, sem necessitarmos de uma variável temporária de estado:
``` javascript
function buildSlug(text){
  return replaceSpacesWithDashes(
    removeSpecialChars(
      removeUnnecessarySpaces(
        removeAccents(
          text.toLowerCase().trim()
        )
      )
    )
  );
}
```
Temos agora um código bem mais compacto e funcional, mas a legibilidade e a intuitividade sofreram forte degradação. Ao invés de simplesmente lermos as operações linha a linha, precisamos avançar a leitura até a função `removeAccents` para, só depois, entender que seu retorno alimentará a função `removeUnnecessarySpaces` e assim por diante.

Haveria então uma terceira abordagem capaz de reunir legibilidade e brevidade? Há algum tempo tenho percebido o tremendo poder oferecido pelo método nativo `reduce` do JavaScript. Percebi então que para casos como o descrito aqui ele pode ser uma ótima opção. Para tal, reduzimos um dado inicial ao resultado dessa cadeia de operações:
``` javascript
function buildSlug(text){
  return [
    removeAccents,
    removeUnnecessarySpaces,
    removeSpecialChars,
    replaceSpacesWithDashes
  ].reduce((result, perform) => perform(result), text.toLowerCase().trim());
}
```
Com essa solução, todas as operações são facilmente identificadas de maneira sequencial numa lista, melhorando consideravelmente a legibilidade do código e, na sequência, cada operação é executada recebendo como dado de entrada exatamente o dado resultante da operação anterior, sem a necessidade de qualquer variável de estado e expressada por apenas uma única linha de código.

Caso você tenha se interessado pelo poder do método reduce, visite sua [documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) e conheça melhor seus detalhes e formas de uso.
