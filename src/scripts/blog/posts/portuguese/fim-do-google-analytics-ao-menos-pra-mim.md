title: Fim do Google Analytics, ao menos pra mim.
date: 2023-07-28
description: Após ter conhecido um serviço chamado Plausible em 2020, comecei a remover o Google Analytics dos meus sites, um a um, até me tornar totalmente livre do serviço do Google em Fevereiro deste ano.
keywords: google analytics, plausible, GDPR, CCPA, PECR
lang: pt-BR

---

Era mais ou menos metade de 2020 quando ouvi Plausible pela primeira vez. Era um tweet de Jason Fried elogiando o serviço, uma ferramenta de Web Analytics. Jason destacava a abordagem não invasiva que o Plausible adota para medir a utilização de um website. Diferentemente do Google Analytics, o Plausible não usa cookies, não cruza dados entre dispositivos, tampouco entre sites. Seu objetivo é apenas coletar dados gerais sobre o uso do website, não rastreando dado algum que se refira a um indivíduo específico.

Gostei da abordagem do recém descoberto serviço e fui pesquisar um pouco mais. Descobri então que, enquanto o Google Analytics já é considerado [ilegal](https://plausible.io/blog/google-analytics-illegal) em diversos países da Europa, o Plausible opera em conformidade com [GDPR](https://gdpr-info.eu/) *(General Data Protection Regulation)* da União Européia, [CCPA](https://oag.ca.gov/privacy/ccpa) *(California Consumer Privacy Act)*, e [PECR](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/what-are-pecr/) *(Privacy and Electronic Communications Regulations)* do Reino Unido.

Eu já estava plenamente convencido da superioridade ética do Plausible sobre o Google Analytics, mas havia um pequeno problema. O Google Analytics era gratuito, o Plausible custava seis dólares por mês. Depois de fazer as contas e entender que seis dólares seria o custo total para utilizar o Plausible em todos os sites que eu tinha na época, e que esse custo não aumentaria enquanto a soma das visualizações de página de todos os sites não ultrapassasem 10 mil, topei contratar o serviço. A certeza de que a contratação do Plausible tinha sido um boa ideia ficou escancarada depois de eu ver pela primeira vez a terrível interface gráfica do Google Analytics 4.

![Animação mostrando o rodapé do site Pitsby e o dashboard público do Plausible](../../images/plausible-public-analytics.gif)  
_Pitsby e o dashboard público do Plausible_

Comecei instalando o Plausible no meu site pessoal, e pouco a pouco fui aplicando-o nos demais sites que mantenho: [Pitsby](https://pitsby.com), [Taslonic](https://taslonic.com), [Glorious Codes](https://glorious.codes). Os sites [Four-Day Week](https://4dayweek.rafaelcamargo.com) e [Bordiple](https://bordiple.rafaelcamargo.com) já nasceram na era pós Google Analytics e desde a primeira visita já tiveram seus dados contabilizados pelo Plausible. Para finalizar, a funcionalidade do Plausible que mais me impressionou foi a de poder tornar públicas as estatísticas dos meus sites *open-source*. Isso me permitiu não apenas incluir uma mensagem no rodapé informando aos usuários que naquele site eles estão livres de cookies, mas também incluir o link do Plausible que permite ao próprio visitante visualizar as estatísticas do site que está visitando.
