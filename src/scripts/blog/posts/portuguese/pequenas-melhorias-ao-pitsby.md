title: Pequenas melhorias ao Pitsby
date: 2022-08-12
description: Antes tarde do que nunca. Passado um bom tempo desde a última melhoria, bons ares voltaram a soprar na versão mais recente da biblioteca. Desempenho e aparência foram os pontos que receberam melhorias. Além da simplicidade, daqui em diante você vai documentar seus componentes com mais velocidade e estilo.
keywords: pitsby, documentação, componentes, storybook, desempenho, aparência
lang: pt-BR

---

Mais de um ano depois da última melhoria na biblioteca, era mais que chegada a hora de alguns novos avanços. Se Pitsby é ainda uma palavra que jamais ecoou nos seus ouvidos, saiba que ele é uma ferramenta que almeja facilitar a documentação de componentes gráficos usados em aplicações web. O motivo principal por trás de sua criação foi oferecer uma [alternativa ao Storybook](https://rcamargo.medium.com/the-alternative-to-storybookjs-fc48b18bfdeb), ferramenta muito popular à época, devido a minha tremenda insatisfação com sua experiência de uso. Essas recentes melhorias, poucas mas significativas, focaram em dois pontos.

## Desempenho

O primeiro deles, melhorar o desempenho do *live-reload* durante o desenvolvimento da documentação. Para tal, algumas etapas do processo de atualização do *web app* foram reorganizadas (e até eliminadas), não demandando mais sua recompilação. Com isso, pude eliminar o uso do *Webpack Dev Server* em prol de uma biblioteca bem mais simples e enxuta chamada [*Live Server*](https://github.com/tapio/live-server). A aplicação contendo a documentação é agora compilada uma única vez e, a cada mudança nos arquivos que compõem a documentação, somente o arquivo impactado é atualizado ou recriado.

## Aparência

Sim, a aparência das mensagens exibidas no terminal importa. Arrisco dizer que a aparência de *qualquer* texto importa, esteja ele onde estiver. Uma prova disso seria o tormento de ter que programar sem um editor capaz de destacar a sintaxe da linguagem com uma bela paleta de cores. A versão mais recente do Pitsby abandona as mensagens monocromáticas em favor de mensagens melhor formatadas e coloridas, potencializando o significado de cada uma delas e facilitando sua leitura.

![Pitsby live reload](../../images/pitsby-live-reload.gif)  
_Pitsby live reload_

Se você já utiliza a ferramenta, desfrute dessas melhorias instalando a versão mais recente. Se ainda não a conhece, visite [pitsby.com](https://pitsby.com) e a experimente agora mesmo.
