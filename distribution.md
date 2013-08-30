# Distribuindo Seus Apps

Temos o aplicativo pronto basta saber como fazemos para distribuir o treco. Nesse capítulo veremos como distribuir o seu aplicativo **fora do Firefox Marketplace**. Como vimos na [Introdução](#introduction) a Mozilla não tenta impedir sua liberdade de maneira nenhuma portanto podemos distribuir nossas criações como acharmos melhor.

Essa parte de distribuição fora do Firefox Marketplace faz mais sentido (na minha opinião) para aplicativos de interesse segmentado como por exemplo apps para utilização interna em empresas ou somente para os seus clientes. Aplicativos no marketplace estão disponíveis para qualquer um baixar ou comprar. A única maneira de um app que está no marketplace restringir a utilização é com algum sistema de usuários dentro do app (e mantido por um backend) como é o caso de apps como o *Evernote* que pede uma conta do seu próprio sistema para utilização da app. Outro caso onde faz sentido uma distribuição fora do Marketplace é quando você já tem um canal de marketing montado e é capaz de atingir um grande número de pessoas independente do mercadinho. Por exemplo se um site como o *Jovem Nerd* faz um app para Firefox OS, faz sentido distribuir o app no próprio site (além de distribuir também no marketplace).

O processo de distribuição de aplicativos hospedados e empacotados é semelhante porém com chamadas a funções diferentes por isso vou mostrá-los separadamente. Independente se o seu app é hospedado ou empacotado você deve criar um botão ou página que execute a chamada de instalação. Isso pode ser um botão tipo **Instale o Nosso App** ou um endereço especial que quando aberto causa a execução da rotina de instalação. Ao executar as chamadas de instalação, o Firefox OS pergunta para o usuário se ele deseja instalar o app ou não portanto não tem como instalar um app sem a confirmação do mesmo.

## Aplicativos hospedados 

<<[Rotina para instalação de uma app hospedada](code/distribution/hosted_apps_distribution.js)

No exemplo acima `manifestURL` deve conter o endereço do arquivo de manifesto. Ao executar essa rotina o Firefox OS pede para o usuário confirmar a instalação do app e dependendo da ação do mesmo o callback de erro ou de sucesso é chamado.

Para maiores informações sobre essas rotinas veja a [página na MDN sobre instalação de aplicativos](https://developer.mozilla.org/pt-BR/docs/Apps/JavaScript_API).

## Aplicativos empacotados

A instalação de aplicativos empacotados é bem semelhante porém em vez de chamar `mozApps.install()` devemos chamar `mozApps.installPackage()` como podemos ver no exemplo abaixo.

<<[Rotina para instalação de uma app empacotado](code/distribution/packaged_apps_distribution.js)

W> Perigo: Eu tenho a impressão que a instalação de apps empacotados fora do marketplace ainda não é possível na versão atual do Firefox OS. Por mais que a API esteja documentada acho que ela ainda não foi totalmente implementada. Eu nunca testei. Aviso dado. Se funcionar me manda email para eu atualizar o livro.

## Conclusão

Vimos rapidamente como é realizada a instalação de um aplicativo fora do Firefox Marketplace atraves das rotinas de instalação e gerenciamento e de **Open Web Apps**. Existem várias outras rotinas como por exemplo para detectar se a app está instalada ou não (assim você pode esconder o botão de instalar se a app já está instalada). Para saber mais sobre essas rotinas não deixe de ver a [página na MDN sobre instalação de aplicativos](https://developer.mozilla.org/pt-BR/docs/Apps/JavaScript_API) (eu já falei isso nesse capítulo, eu sei sou prolixo).

No próximo capítulo vamos ver como distribuir seu app no Firefox Marketplace.
