title: Dominando a formatação de data com Intl.DateTimeFormat no JavaScript
date: 2024-05-29
description: Durante muito tempo, bibliotecas como MomentJS e DateFNS reinaram absolutas quando o assunto era manipulação de datas. Embora elas ainda continuem satisfazendo casos de uso bem peculiares, se o que você precisa é simplesmente formatar uma data, talvez você já consiga atender sua necessidade apenas com JavaScript nativo.
keywords: Intl, DateTimeFormat, moment.js, date-fns, formatação, data
lang: pt-BR

---

Ao surgir a necessidade de apresentar uma data em um formato específico, algumas bibliotecas JavaScript nos vem logo à cabeça, como a `moment.js` e, mais recentemente, a `date-fns`. Embora essa bibliotecas ainda satisfaçam casos de uso muito peculiares, elas já não são mais essenciais quando a tarefa em questão é a simples formatação de uma data.

Amplamente suportada pelos Browser desde 2016, e atualmente com cobertura global de aproximadamente 96%, a API nativa `Intl` é capaz de apresentar datas em formatos altamente elaborados. E o mais importante, tudo isso sem adicionar 1Kb sequer à sua aplicação.

Para demonstrar a simplicidade do construtor `DateTimeFormat` da API `Intl`, observe o seguinte paralelo entre ele e as bibliotecas mencionadas acima:

``` javascript
import moment from 'moment';
import { format } from 'date-fns';

const date = new Date(2024, 4, 29, 0);

moment(date).format('DD/MM/YYYY');
// → 29/05/2024

format(date, 'dd/MM/yyyy');
// → 29/05/2024

Intl.DateTimeFormat('pt-BR').format(date);
// → 29/05/2024
```

Só com esse exemplo, já é possível ver muitas vantagens, mas o poder do `Intl.DateTimeFormat` está apenas começando. Perceba que o primeiro argumento que `DateTimeFormat` recebe é o *locale* para o qual você pretende formatar a data. Caso o *locale* não seja informado, o *default locale* definido no Browser será utilizado. Porém, a assinatura do construtor recebe um outro parâmentro. Esse outro parâmetro é um objeto composto de várias opções. Começemos então a verificar cada uma delas.

## Formatos longos

Se o que você precisa é um formato de data que contemple texto e não apenas dígitos, observe as possibilidades que a opção `month` oferece.

``` javascript
const date = new Date(2024, 4, 29, 0);
const opts = { day: 'numeric', year: 'numeric' };

Intl.DateTimeFormat('pt-BR', { ...opts, month: 'long' }).format(date);
// → 29 de maio de 2024

Intl.DateTimeFormat('pt-BR', { ...opts, month: 'short' }).format(date);
// → 29 de mai. de 2024

Intl.DateTimeFormat('pt-BR', { ...opts, month: 'narrow' }).format(date);
// → 29 de M de 2024
```

## Dias da semana

Se pintar a necessidade de informar não apenas o dia do mês, mas também o dia da semana, basta usar a opção `weekday`.

``` javascript
const date = new Date(2024, 4, 29, 0);
const opts = { day: '2-digit', month: '2-digit', year: '2-digit' };

Intl.DateTimeFormat('pt-BR', { ...opts, weekday: 'long' }).format(date);
// → quarta-feira, 29/05/24

Intl.DateTimeFormat('pt-BR', { ...opts, weekday: 'short' }).format(date);
// → qua., 29/05/24

Intl.DateTimeFormat('pt-BR', { ...opts, weekday: 'narrow' }).format(date);
// → Q, 29/05/24
```

## Horas, minutos e segundos

Além do dia, mês e ano, datas podem envolver também horário. Neste caso, você pode utilizar as opções `hour`, `minute` and `second` para determinar a quantidade de dígitos (`numeric` ou `2-digit`) a serem utilizados.

``` javascript
const date = new Date(2024, 4, 29, 5, 30, 20);
const opts = { minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('pt-BR', { ...opts, hour: 'numeric' }).format(date);
// → 5:30:20

Intl.DateTimeFormat('pt-BR', { ...opts, hour: '2-digit' }).format(date);
// → 05:30:20
```

## Fuso horário

Caso seja necessário incluir o fuso horário ao formato, a opção `timeZoneName` pode ser utilizada. Observe a seguir as duas possibilidades oferecidas.

``` javascript
const date = new Date(2024, 4, 29, 5, 30, 20);
const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('pt-BR', { ...opts, timeZoneName: 'long' }).format(date);
// → 05:30:20 Horário Padrão de Brasília

Intl.DateTimeFormat('pt-BR', { ...opts, timeZoneName: 'short' }).format(date);
// → 05:30:20 BRT
```

Ainda lidando com tempo, é possível apresentar a data em um fuso horário diferente do horário local. A opções que faz essa conversão é chamda `timeZone`. Observer a seguir a mesma data e horário utilizada no exemplo acima, mas formatada com o fuso horário de Los Angeles (EUA).

``` javascript
const date = new Date(2024, 4, 29, 5, 30, 20);
const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('pt-BR', { ...opts, timeZone: 'America/Los_Angeles' }).format(date);
// → 01:30:20
```

**Dica:** Na Wikipedia, você pode conferir todos os [identificadores de fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

Juntando a possibilidade de aplicar um fuso horário específico com a possibilidade de exibir o nome do fuso horário, podemos obter o seguinte resultado.

``` javascript
const date = new Date(2024, 4, 29, 5, 30, 20);
const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('pt-BR', {
  ...opts,
  timeZone: 'America/Los_Angeles',
  timeZoneName: 'long'
}).format(date);
// → 01:30:20 Horário de Verão do Pacífico
```

## 12 vs. 24 horas

Por fim, caso você precise alternar o padrão de horário de 12h para 24h ou vice-versa, é possível utilizar a opção `hour12` para forçar essa mudança.

``` javascript
const date = new Date(2024, 4, 29, 15, 30, 20);
const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('pt-BR', { ...opts, hour12: true }).format(date);
// → 03:30:20 PM

Intl.DateTimeFormat('en-US', { ...opts, hour12: false }).format(date);
// → 15:30:20
```

É muito provável que para efetuar cálculos, comparações, e casos de uso mais avançados envolvendo data você ainda precise instalar uma biblioteca, mas se o que você precisa é simplesmente apresentar uma data em um formato específico, a API `Intl` tem grandes chances de satisfazer suas necessidades. Se você deseja conhecer mais sobre essa API, visite a [documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) disponível na Mozilla Developers Network (MDN).
