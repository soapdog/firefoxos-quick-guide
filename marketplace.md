# O Firefox Marketplace

![Firefox Marketplace](images/originals/marketplace.png)

O [Firefox Marketplace](http://marketplace.firefox.com) é o mercadinho do Firefox onde você pode pegar ou comprar apps para o Firefox OS, Firefox Desktop e Firefox para Android. Ele é o principal canal para distribuição de aplicativos para Firefox OS porém você não precisa usá-lo se não quiser.

Para distribuir apps no marketplace você precisa estar identificado via [Mozilla Persona](https://login.persona.org/about). Basta clicar **Sign Up** e seguir as instruções. Uma vez identificado, você esta pronto para enviar apps para o Firefox Marketplace.

## Checklist antes de pensar em enviar o seu app

Todo aplicativo que é enviado para o marketplace passa por um processo de aprovação. Aplicativos normais passam por um processo menos rigoroso que aplicativos privilegiados pois utilizam APIs menos sensíveis. Antes de enviar o aplicativo familiarize-se com [os critérios de avaliação do marketplace](https://developer.mozilla.org/en-US/docs/Web/Apps/Publishing/Marketplace_review_criteria). Os pontos mais importantes são:

* O Firefox OS não tem um botão de voltar como o navegador ou o Android. Se dentro da sua app o usuário navegar para algum ponto e não tiver como voltar mais (ficar preso em uma tela), seu app será rejeitado.
* Seu app deve conter os ícones 60x60 utilizados pelo Firefox OS e uma descrição detalhada do que ele faz no manifesto.
* Seu aplicativo deve fazer o que diz a descrição dele. Você não pode falar que o seu app faz uma coisa que ele não faz.
* Se o seu app pede uma permissão para alguma funcionalidade ele deve usá-la. Marcar o app como privilegiado e não utilizar nada das APIs privilegiadas fará com que o seu app seja rejeitado com um pedido para alterar o tipo para normal.
* Seu app precisa ter uma política de privacidade bem explicada no marketplace.
* O manifesto e o aplicativo devem vir do mesmo domínio no caso de apps hospedados.

Existem outros critérios como mostrado nos links acima. Vale a pena estudar esses critérios antes de enviar o app afinal perde-se muito tempo tendo o aplicativo rejeitado por uma bobagem que você resolve em cinco minutos.

## Preparando seu app para envio

A preparação do seu app para envio depende do tipo de app que ele é. Aplicativos hospedados simplesmente precisam estar disponíveis em algum servidor web. Aplicativos empacotados devem ser zipados antes do envio e merecem mais atenção.

Muita gente comete o erro de selecionar a pasta que contém os arquivos do aplicativo e mandar zipar. Isso faz com que o zip contenha uma pasta e essa pasta contenha todos os arquivos. Esse não é o jeito correto de zipar apps para Firefox OS. O correto é fazer com que o zip contenha diretamente os arquivos do aplicativo. Mais especificamente, o que é necessário é que o manifesto esteja na *raiz do arquivo zip*, ou seja, que ele não esteja dentro de nenhuma pasta dentro do arquivo compactado. No Mac OS X e no Linux podemos navegar no terminal até dentro da pasta que está o nosso aplicativo e executar um comando como `zip -r meuapp.zip *` como podemos ver na captura de tela a seguir.

![Zipando corretamente os arquivos](images/originals/marketplace-preparing-packaged-app.png)

O arquivo zip final é o que enviaremos para o marketplace.

## Envio para o Firefox Marketplace

De posse do seu app pronto e da certeza que ele preenche todos os requisitos para ser aprovado, você deve navegar para **Meus Envios**[^meus-envios] utilizando o botão da engrenagem.

![Meus Envios](images/originals/marketplace-my-submissions.png)

Dentro da página de gerência dos seus aplicativos, você deve clicar em **Enviar um novo aplicativo** no menu superior.

![Link para enviar novo aplicativo](images/originals/marketplace-new-app.png)

Esse link o levará para o formulário de entrada de novo aplicativo que pode ser visto na tela abaixo.

![Enviar novo app](images/originals/marketplace-step-1.png)

Nessa tela você pode selecionar as seguintes opções:

* Se o aplicativo é hospedado ou empacotado.
* Se ele é gratuíto ou pago (ou com *in-app purchases*).
* Quais aparelhos ele funciona (Firefox OS, Firefox Desktop, Firefox for Mobile no Telefone, Firefox for Mobile no Tablet).

Feitas essas escolhas você passa para a segunda tela. Nesse livro estamos fazendo o processo para o envio de um app empacotado porém os demais tipos de app tem um workflow semelhante.

Estamos assumindo para efeito desse exemplo um aplicativo empacotado gratuito para Firefox OS. Nesse caso, ele pede que a gente faça upload to arquivo que preparamos na etapa anterior.

[^meus-envios]: Em português *My Submissions*.

Após o envio do arquivo ele será processado e um relatório com mais opções será mostrado.

![Depois do envio do arquivo zip](images/originals/marketplace-step-1_5.png)

Como podemos ver na captura, esse programa que eu enviei não contém erros mas contém seis avisos. Fora isso podemos marcar os **requisitos mínimos** para que o app seja instalado. No caso desse exemplo, o último requisito, que fala sobre resolução de tela qHD deve ser desmarcado visto que esse aplicativo funciona em qualquer resolução.

O próximo passo chamado **Passo #3: Detalhes** é onde você preenche as informações sobre o seu aplicativo tais como categoria, descrição, fornece capturas de tela entre outros.

![Preenchendo detalhes](images/originals/marketplace-step-3.png)

Após preencher os detalhes o processo de envio está concluído e ai basta aguardar a aprovação dos revisores do marketplace. Parabéns você tem um aplicativo no Firefox OS!!!

Na página de [Gerência de Aplicativos](https://marketplace.firefox.com/developers/submissions) você pode verificar o status dos seus envios e alterar detalhes se necessário.

Para saber mais sobre o envio de aplicativos para o Firefox Marketplace leia [esse artigo na central do desenvolvedor do Firefox OS](https://marketplace.firefox.com/developers/docs/submission).

## Conclusão

Parabééééns!!!! Você agora tem um aplicativo no Firefox Marketplace, você esta desbravando um mercado todo novo! 

Espero que tenha gostado desse guia rápido. Eu pretendo atualizar esse guia constantemente (inclusive achando um bom editor para consertar meu analfabetismo) portanto fique atento para novidades. Se você baixou esse livro do Leanpub então fique tranquilo que você será avisado das atualizações.

Não deixe de me dar algum feedback. Eu fiquei a noite inteira acordado escrevendo esse livro, ou seja, eu realmente gosto desse projeto! Eu fico constantemente olhando o Twitter onde minha conta é [@soapdog](http://twitter.com/soapdog).

Agora que você faz parte dos criadores de aplicativos para Firefox OS venha fazer parte da [Comunidade Mozilla Brasil](http://mozillabrasil.org.br) e ajudar projetos livres como o Firefox OS a crescer ainda mais.
