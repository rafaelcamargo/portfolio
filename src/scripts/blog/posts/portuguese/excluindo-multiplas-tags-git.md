title: Excluindo múltiplas tags Git
date: 2022-10-29
description: Excluir múltiplas tags pode se tornar um trabalho bastante penoso para quem não está suficientemente familiarizado com seu respectivo comando Git. Este texto oferece algumas estratégias que vão lhe fazer economizar muito tempo.
keywords: git, tags, excluir, múltiplas
lang: pt-BR

---

Embora não tão comum, você pode acabar se deparando com a situação onde precisa excluir diversas *tags* Git do seu projeto. Veja a seguir alguns comandos que podem ajudar nessa tarefa e escolha aquele que melhor se ajusta à sua necessidade.

## Excluindo *múltiplas* tags
Existem algumas maneiras de excluir mais de uma *tag* de uma só vez. A maneira mais direta é simplesmente passar uma lista de *tags* para o comando de exclusão:

Se você precisar excluir algumas poucas *tags*, você pode passá-las diretamente:
```
git tag -d <tag1> <tag2> <tag3> ...
```
O comando acima excluirá do seu repositório Git local todas as *tags* listadas. Para alcançar o mesmo resultado no seu repositório remoto, execute:
```
git push -d <remote> <tag1> <tag2> <tag3> ...
```

Caso a quantidade de *tags* seja grande demais para que você as informe uma a uma, é possível obtê-las filtrando as *tags* existentes a partir de um termo.

Tome como exemplo a seguinte lista:
```
v0.1.0
v0.2.0
v0.3.0
v0.4.0
v0.5.0
v0.6.0
testing0.6.0-a
testing0.6.0-b
testing0.6.0-c
...
testing0.6.0-z
```

Para excluir todas as tags que contenham o termo *testing*, basta executar o comando a abaixo. Ele excluirá todas as *tags* que satisfazem o termo passado para o comando *grep*.
```
git tag -d $(git tag | grep "testing")
```
Para alcançar o mesmo resultado no repositório remoto, execute:
```
git push -d <remote> $(git tag | grep "testing")
```

Como é possível notar, os comandos acima excluem todas as *tags* que **contêm** o termo *testing* no nome. Caso você precise inverter essa condição, ou seja, excluir todas as *tags* que **não contêm** um determinado termo, basta passar a flag *-v* para o comando *grep*.

Tome como exemplo a seguinte lista:
```
fruit-apple
fruit-orange
fruit-papaya
tree-tall
tree-small
color-blue
color-yellow
color-green
```

![Animação demonstrando a exclusão de múltiplas tags no terminal](../../images/deleting-git-tags.gif)  
_Excluindo múltiplas tags Git_

Para excluir todas as tags que **não** contêm o termo *fruit*, o comando a executar seria:
```
git tag -d $(git tag | grep -v "fruit")
```
Para alcançar o mesmo resultado no repositório remoto, execute:
```
git push -d <remote> $(git tag | grep -v "fruit")
```

## Excluindo *todas* as tags
Se você precisa excluir absolutamente todas as *tags* do seu projeto, execute o comando a seguir:
```
git tag -d $(git tag)
```
Para alcançar o mesmo resultado no repositório remoto, execute:
```
git push -d <remote> $(git tag)
```

Seja fazendo uma limpeza local ou remota, qualquer um desses comandos dará conta da tarefa quase que instantaneamente, poupando-lhe um precioso tempo. Para saber mais sobre o comando Git que gerencia *tags*, visite a [documentação oficial](https://git-scm.com/book/en/v2/Git-Basics-Tagging).
