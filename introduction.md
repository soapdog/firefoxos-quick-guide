# Introdução {#introduction}

## O Firefox OS

![Firefox OS](images/originals/firefox_os_simulator.png)

O [Firefox OS](http://www.mozilla.org/pt-BR/firefox/os/) é a nova plataforma móvel livre desenvolvida pela [Mozilla](http://mozilla.org) e pelos seus parceiros. Aparelhos com Firefox OS já estão à venda em diversos países e serão lançados ainda esse ano no Brasil. 

Voltado inicialmente para mercados emergentes, o Firefox OS tem como objetivo trazer o próximo milhão de pessoas para a web. Para conseguir isso os aparelhos com Firefox OS são construídos para serem ótimos como *o primeiro smartphone* de alguém e tem preços muito competitivos. No Brasil, 78% das pessoas ainda estão usando *feature phones*, o objetivo é ser uma alternativa interessante para essas pessoas migrarem desses aparelhos para smartphones rodando Firefox OS. 

Infelizmente em mercados emergentes como o Brasil smartphones com uma performance aceitável ainda são muito caros. Pessoas podem comprar smartphones baratos mas as plataformas utilizadas atualmente para esse tipo de aparelho estão sendo construídas com foco em smartphones de alta performance deixando esses aparelhos baratos com uma performance ruim e indesejável. 

Outro fator importante quando falamos de Firefox OS é que os atuais sistemas móveis mais populares são pequenas ilhas proprietárias onde você está amarrado as vontades do fabricante que possui privilégios de mandar e desmandar na plataforma. Nesses sistemas proprietários você em geral só pode distribuir seus aplicativos em canais autorizados e o fabricante fica com um percentual de todas as transações financeiras que passam pelo aplicativo. 

Além de amarrar os desenvolvedores através das lojinhas de apps, esses sistemas possuem sistemas de desenvolvimento próprios incompatíveis entre si como por exemplo a Apple com o Objective-C/Cocoa e a Google com o Java para Android. Dessa forma, para construir um app nativo para iOS e Android, o desenvolvedor precisa aprender as duas linguagens e recriar o programa duas vezes. O Firefox OS traz para o mundo mobile uma proposta diferente ao ter o HTML5 como sistema de desenvolvimento de apps nativos. O HTML5 é o sistema aberto e livre utilizado pelos navegadores modernos da web e aplicativos construídos baseados em tecnologia possuem potencial para serem multiplataforma com facilidade (da menos trabalho para garantir que um app web funciona em várias plataformas do que construir o mesmo app várias vezes para cada uma).

## A plataforma que o HTML5 merece

A web está em todo lugar desde o seu computador, ao seu telefone celular, à sua SmartTV e até no seu videogame. A linguagem da programação da web, o JavaScript, é uma das linguagens mais difundidas no mundo estando presente em basicamente todos os tipos de aparelhos[^JS-anywhere]. Quando as pessoas falam sobre HTML5 elas estão em geral falando da união de três tecnologias: O HTML 5, CSS 3 e o JavaScript. Essa tríade é super poderosa, o HTML 5 simplifica o HTML e expande suas capacidades em relação ao XHTML 1.0, o CSS 3 vem com mais capacidades para layout e animação e o JavaScript de hoje é uma linguagem fantástica que serve tanto para iniciantes quanto para programadores experientes.

[^JS-anywhere]: Para ter uma idéia assista a [palestra JavaScript Anywhere do Jaysdon](http://jaydson.org/javascript-everywhere-no-fisl-14/).

O Firefox OS é basicamente uma extensão móvel da web onde o HTML5 está em primeiro lugar. Ao tornar o HTML5 um cidadão de primeira classe em sua plataforma a Mozilla torna o novo sistema acessível à milhões de desenvolvedores web. O HTML5 funciona muito bem em navegadores modernos em desktops e laptops porém não havia antes do Firefox OS uma plataforma móvel que fizesse jus ao mesmo. Enquanto outros vendedores produzem navegadores que implementam o HTML5, o Firefox OS vai além disso implementando não só o HTML5 mas também toda uma série de APIs para acesso ao hardware via JavaScript.

## Acesso ao hardware com WebAPI

Outras plataformas anteriores também tentaram criar sistemas operacionais cuja criação de aplicativos estava baseada em tecnologias web. Assim que o iPhone foi lançado, a única maneira de criar apps era através de webapps. O WebOS também utilizava HTML, CSS e JavaScript para a criação de apps. O que diferencia o Firefox OS dessas plataformas é que ele oferece acesso ao hardware e a componentes do sistema via JavaScript. No iOS os webapps não tem esse tipo de acesso e portanto apps baseados *apenas em web* se tornam cidadãos de segunda classe incapazes de competir com aplicativos nativos. 

Por acesso ao hardware estamos falando de coisas como por exemplo acessar os contatos do telefone, enviar SMS, acessar a câmera e as fotos do aparelho. No Firefox OS graças a coleção de APIs chamadas de [WebAPI](https://wiki.mozilla.org/WebAPI), o desenvolvedor pode aproveitar todas essas funcionalidades utilizando nada além das tecnologias do HTML5. 

Outra diferença é que ao contrário de plataformas anteriores como por exemplo o WebOS que também promovia o acesso ao hardware via JavaScript porém que não tentou tornar suas APIs um padrão da web a ser adotado pelos outros vendedores, a Mozilla está trabalhando em conjunto com o W3C e outros grupos para que a WebAPI se torne um padrão aberto da web e possa ser implementado por outros vendedores como por exemplo o Google e a Apple. Conforme as APIs forem implementadas pelos demais fabricantes, seus aplicativos precisarão de cada vez menos mudanças para funcionar em plataformas diferentes.

A WebAPI não esta sendo implementada somente para o Firefox OS, a Mozilla também esta implementando a mesma API no Firefox para Desktop e no Firefox Mobile no Android. Assim aplicativos construídos com base nessas APIs estarão aptos a rodar no Desktop, no Firefox OS e no Android, onde quer que o Firefox rode.

## Liberdade para desenvolvimento e distribuição

Como tudo da Mozilla, o Firefox OS é construído as claras e livre. Todo o desenvolvimento pode ser acompanhado pelo [GitHub da Mozilla](https://github.com/mozilla-b2g/B2G). Com o Firefox OS você tem a liberdade para acompanhar e contribuir com o desenvolvimento do sistema e também a liberdade para distribuir seus aplicativos como desejar seja na sua própria página web ou no [Firefox Marketplace](https://marketplace.firefox.com/).

A idéia principal é que você não fique preso a Mozilla para nada. Se você quiser pegar o código fonte do sistema e modifica-lo para as suas necessidades você pode. Se quiser construir aplicativos para utilização interna da sua empresa ou se quiser distribuir suas criações somente em sua própria página você também pode. Em outras plataformas, você esta em geral amarrado a distribuir seus aplicativos somente via a loja autorizada do fabricante e portanto sujeito aos critérios e ao processo de aprovação do mesmo. O Firefox Marketplace também possui um processo e critérios de aprovação porém você é livre para não utilizar ele se não quiser. Assim como na web, onde você é livre para hospedar sua página como achar melhor, no Firefox OS você também é.

## Conclusão

Em resumo o HTML 5 chegou para ficar e melhora a cada dia que passa. O Firefox OS que é o novo sistema operacional móvel da Mozilla totalmente livre e construído as claras oferece uma implementação robusta do HTML 5 e vai além ao oferecer APIs de acesso ao hardware via JavaScript. Essas APIs estão sendo padronizadas junto aos órgãos competentes e promovidas para adoção por outros fabricantes.

No próximo capítulo vamos ver o que é necessário para criar aplicativos para Firefox OS. Vamos juntos que em breve já teremos um app rodando.