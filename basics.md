# Conceitos

Antes de colocarmos as mãos na massa e construírmos nosso primeiro app vamos aprender alguns conceitos básicos para desenvolvimento para Firefox OS. Como sabemos os apps são baseados em HTML5 assim como uma página web mas ainda não sabemos o que diferencia um app de uma simples página web. Se pensarmos as demais plataformas móveis que conhecemos podemos chegar a alguns requisitos mínimos para um aplicativo móvel:

* Possuir um ícone.
* Possuir um nome.
* Funcionar offline quando possível.

No Firefox OS, um aplicativo é a grosso modo uma página web que possui um ícone, um nome e pode funcionar offline dependendo de como o desenvolvedor fizer o seu trabalho. Todas essas informações a respeito de um aplicativo tais como nome, ícone entre outras são definidas em um arquivo de manifesto como veremos na próxima sessão.

## O Manifesto

O [manifesto](https://developer.mozilla.org/pt-BR/docs/Apps/Manifest) é um arquivo do tipo [JSON](http://json.org) que descreve um aplicativo. Em geral esse arquivo se chama **manifest.webapp** e fica ao lado do seu arquivo principal HTML que normalmente chama **index.html**. 

<<[Exemplo de Manifesto](code/sample_manifest.webapp)

Acima podemos ver um exemplo de manifesto do aplicativo chamado memos[^memos]. Entre outras coisas ele descreve quem fez o aplicativo, qual icone e nome do mesmo, qual arquivo é utilizado para carregar o app (nesse caso o index.html), quais permissões de acesso ao hardware ele precisa, etc. Esse arquivo é utilizado pelo Firefox OS para adicionar o aplicativo ao aparelho e pelo Firefox Marketplace para criar a listagem do mesmo na loja como podemos ver na imagem abaixo:

[^memos]: Esse é um app de exemplo para Firefox OS que pode ser [visto no Firefox Marketplace](https://marketplace.firefox.com/app/memos) e cujo o [código fonte esta disponível no github](https://github.com/soapdog/memos-for-firefoxos)

![Listagem do memos no Firefox Marketplace](images/originals/memos-marketplace.png)

A mesma informação do manifesto é utilizada para colocar o aplicativo no aparelho como podemos ver na captura de tela do simulador a seguir:

![Memos no simulador](images/originals/memos-simulator.png)

De posse dos seus arquivos HTML, CSS, JavaScript e de um arquivo de manifesto, você ja tem um app pronto para rodar no Firefox OS. Continuando sobre o tópico sobre aplicativos vamos aprender sobre os tipos de aplicativos existentes

## Tipos de aplicativo

No Firefox OS existem dois tipos de aplicativos: aplicativos hospedados e aplicativos empacotados. 

* **Aplicativos Hospedados:** ficam armazenados em um servidor web assim como uma site e quando utilizados pelo usuário é feito um acesso ao servidor remoto caso o app não esteja no cache.
* **Aplicativos Empacotados:** são distribuídos como um arquivo zip e são copiados para o aparelho durante a instalação.

Existem prós e contras para as duas soluções. Aplicativos hospedados são mais fáceis de atualizar pois basta trocar os arquivos no servidor porém são mais difíceis de fazer funcionar offline pois precisam da utilização do [**appcache**](https://developer.mozilla.org/pt-BR/docs/HTML/Using_the_application_cache) para isso. Outro ponto é que mesmo utilizando o appcache, o aplicativo demora um pouco mais para ligar pois o cache precisa ser verificado. Aplicativos empacotados por outro lado estão no telefone desde a instalação e não precisam verificar cache nem nada antes de executar porém a atualização é mais complexa e incluí o envio da nova versão do app para o Firefox Marketplace e/ou a criação de rotinas de atualização dentro do mesmo caso você distribua o app fora do marketplace.

Não existe uma regra sobre qual tipo de aplicativo usar. Pessoalmente, eu prefiro construir aplicativos empacotados para não ter que lidar com o appcache e não ter que ficar hospedando o app em algum servidor. Aplicativos empacotados distribuídos no Firefox Marketplace ficam hospedados nos servidores da Mozilla e para mim isso é mais fácil. Vale a pena dizer que o mundo das ferramentas para desenvolvimento com JavaScript ja produziu geradores de arquivos de appcache que facilitam muito a vida de quem esta criando apps hospedados. A escolha é de cada um porém durante esse livro utilizarei aplicativos empacotados pois é mais fácil e mantém nosso foco nos apps e não em hospedar e servir apps via web. Para quem quiser saber mais sobre aplicativos hospedados, basta checar [o link de aplicativos hospedados na central do desenvolvedor](https://marketplace.firefox.com/developers/docs/hosted).

## Níveis de acesso ao hardware

Existem três níveis de acesso ao hardware no Firefox OS e cada nível possui APIs que pode e que não pode acessar.

* **Normal:** Os aplicativos normais possuem acesso as WebAPIs mais frequentemente utilizadas tais como geolocalização, pegar foto da câmera. Aplicativos hospedados e aplicativos empacotados que não declarem um tipo no manifesto são por definição normais.
* **Privilegiado:** Um aplicativo privilegiado tem acesso a todas as APIs disponíveis para um app normal e mais algumas. Uma exigência é que todos os aplicativos privilegiados sejam empacotados, ou seja, você não pode ter um aplicativo hospedado que seja privilegiado. Esses aplicativos tem acesso a APIs mais "profundas" do Firefox OS como por exemplo API de contatos sem interação com usuário.
* **Certificado:** Aplicativos certificados tem acesso total ao hardware e só podem ser construídos pela Mozilla e seus parceiros de hardware. Eles tem acesso por exemplo ao sistema de telefonia. Um exemplo de aplicativo certificado é o discador do Firefox OS.

Em geral a maioria dos aplicativos não precisa de nada além do que o acesso normal oferece porém as vezes é necessário um acesso privilegiado para podermos utilizar certas APIs. Quando criamos um aplicativo privilegiado e enviamos ele ao Firefox Marketplace o processo de aprovação é mais rigoroso (e isso é bom).

Na [página sobre as WebAPIs no wiki da Mozilla](https://wiki.mozilla.org/WebAPI) podemos ver quais APIs estão implementadas em quais plataformas e qual o nível de acesso necessário para utiliza-las.

![Níveis de acesso para cada API](images/originals/webapi-access.png)

Como podemos ver na imagem acima, o acesso a *Geolocation API* está disponível para todos os aplicativos enquanto a API *WIFI Information API* está disponível somente para aplicativos privilegiados.

## As WebAPIs

No Firefox OS não precisamos de nada além das tecnologias web para construir apps tão capazes quanto os apps nativos das outras plataformas. Toda a parte de acesso ao hardware é realizada através das WebAPIs. Para conhecer a lista de APIs disponíveis para a versão atual do Firefox OS basta [visitar a página sobre as WebAPIs no wiki da Mozilla](https://wiki.mozilla.org/WebAPI). 

Para ilustrar quão fáceis são essas APIs vou mostrar alguns exemplos de uso a seguir. 

### Exemplo #1: Realizar ligações

Imaginemos que você tem um programa que precisa abrir o discador do telefone com um número preenchido. Basta utilizar o código abaixo:

<<[Enviando um número para o telefone](code/webapi_samples/dial.js)

Esse código apenas abre o discador com o número preenchido, portanto o usuário do telefone precisa apertar o botão de discar para efetuar a ligação. Esse tipo de API que precisa de uma ação do usuário antes de executar sua função é bem comum e é uma forma de segurança afinal utilizando essa API você não tem como criar um programa que liga para algum lugar sem interferência do usuário. Outras APIs que são capazes de efetuar ligações sem a confirmacão do usuário estão disponíveis para níveis mais elevados de aplicativos. A API do exemplo está disponível para todos os aplicativos.

Essa API é uma Web Activity, para saber mais sobre esse tipo de API visite [este artigo no blog da Mozilla](https://hacks.mozilla.org/2013/01/introducing-web-activities/). 

### Exemplo #2: Salvar um contato

<<[Salvando um contato](code/webapi_samples/contact.js)

Essa API cria um objeto com os dados do contato e salva ele para a agenda do telefone sem interferência do usuário e está disponível somente para aplicativos privilegiados. Esse padrão onde se cria um objeto com um callback de sucesso e um de erro é muito utilizado nas WebAPIs.

Para saber mais sobre a API de contatos, visite [a pagina da *Contacts API* no wiki da Mozilla](https://wiki.mozilla.org/WebAPI/ContactsAPI).

### Exemplo #3: Pegando uma imagem da camera

<<[Pegando uma imagem](code/webapi_samples/pick.js)

Aqui vemos mais um exemplo de uma [WebActivity](https://hacks.mozilla.org/2013/01/introducing-web-activities/) (falaremos de web activities mais adiante no livro). As Web Activities estão disponíveis para todos os aplicativos. No caso desse exemplo utilizamos uma atividade do tipo *pick* e passamos os *MIME Types* desejados. Ao executar esse código, o sistema mostra uma tela para o usuário pedindo para ele selecionar da onde a imagem deve vir (câmera, álbum, wallpapers) e caso o usuário selecione uma imagem a callback de sucesso é executada, caso ele cancele a ação a callback de erro é executada. No caso de sucesso, o programa recebe um blob com a imagem. Na imagem abaixo podemos ver um exemplo do workflow:

![Exemplo da atividade *pick*](images/originals/pick_image.png)

## Conclusão

Nesse capítulo vimos alguns conceitos básicos sobre o Firefox OS que serão expandidos nos próximos capítulos. Agora é hora de colocar a mão na massa e fazermos um app!


