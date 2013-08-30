# O Simulador do Firefox OS

![Dashboard do Simulador do Firefox OS](images/originals/simulator-dashboard.png)

No capítulo [Se Preparando Para Desenvolver Apps Para Firefox OS](#setup) nós instalamos o simulador do Firefox OS, no capítulo [Nosso Primeiro App](#firstapp) utilizamos o simulador para testar o memos, agora vamos aprofundar o nosso conhecimento sobre o mesmo vendo como as tarefas mais comuns são realizadas.

Para saber mais sobre o simulador visite [a página na MDN sobre o simulador](https://developer.mozilla.org/en-US/docs/Tools/Firefox_OS_Simulator).

## Adicionando Apps

Você pode adicionar aplicativos empacotados ou hospedados no simulador. O procedimento é similar porém com diferenças sutis por isso vamos ver cada um deles separadamente.

### Adicionando aplicativos empacotados

O foco desse livro são os aplicativos empacotados simplesmente por que eu acho mais fácil trabalhar com eles portanto você ja sabe como fazer para adicionar um app que está em uma pasta dentro do seu computador afinal nós fizemos isso quando fomos testar o [Nosso Primeiro App](#firstapp) porém vamos repetir a explicação aqui para que fique mais claro.

Para adicionar um aplicativo empacotado devemos clicar no botão **Add Directory** no **Dashboard do Simulador** como podemos ver abaixo.

![Mostrando o botão utilizado para adicionar aplicativos empacotados ao simulador](images/originals/simulator-add-directory.png)

Ao clicar no botão destacado na imagem, o Firefox abre uma janela para seleção de arquivos. Nessa janela você deve navegar no seu HD e localizar o **arquivo de manifesto** do aplicativo que deseja adicionar. Se tudo ocorrer bem, o app sera adicionado e o simulador ligará com o app em execução. Caso tenha algo de errado com o seu manifesto o simulador irá avisar.

![Exemplo de manifesto inválido](images/originals/simulator-invalid-manifest.png)

Sempre que você fizer alguma alteração no aplicativo você pode apertar o botão **Refresh** para atualizar o app no simulador.

### Adicionando aplicativos hospedados

Mesmo que o aplicativo que você pretende lançar como hospedado esteja dentro da mesma máquina que está rodando o simulador, você deve testá-lo utilizando um servidor web. Se você utilizar o procedimento descrito acima para testar um app hospedado pode ser que você tenha algum bug na configuração do seu servidor (tipo servir o manifesto com o MIME Type errado) que você não irá perceber.

Muitos dos aplicativos hospedados não são exclusivos para Firefox OS e sim sites/webapps adaptáveis para o dispositivo que está acessando naquele momento. Esse tipo de site normalmente possui sistemas de backend que você não tem como testar direito com o procedimento de aplicativos empacotados portanto o ideal é testar a partir do servidor web. Para fazer isso você deve escrever o endereço do site ou do manifesto no campo de texto ao lado do botão **Add URL**.

![Adicionando um app hospedado ao simulador](images/originals/simulator-add-url.png)

Ao clicar no botão, o manifesto é verificado e caso esteja correto o aplicativo é adicionado ao simulador que prontamente é iniciado com o app rodando. Assim como o procedimento para apps empacotados o dashboard mostrará se der algum erro no manifesto.

Sempre que você fizer alguma alteração no aplicativo você pode apertar o botão **Refresh** para atualizar o app no simulador.

## Debugando

Com o aplicativo rodando no simulador já estamos aptos a depurá-lo. Para isso basta clicar no botão **Connect** ao lado da entrada do aplicativo no dashboard do simulador. Isso irá abrir o simulador com o aplicativo escolhido rodando e conectar o **Console de Javascript** no app. Abaixo podemos ver qual botão apertar.

![Qual botão apertar para depurar um app](images/originals/simulator-press-connect.png)

Após apertar esse botão você verá uma tela semelhante a esta:

![Ferramentas do desenvolvedor conectadas ao simulador](images/originals/simulator-connected.png)

Com as ferramentas ligadas você pode testar o JavaScript, depurar o DOM, mudar o estilo das coisas, enfim como diz a galera de startup *pivotar até seu app dar certo*.

Após seu app estar rodando bem no simulador é hora de testar em um aparelho de verdade.

## Enviando para o aparelho

Nada substitui testar em um aparelho de verdade. No simulador você fica clicando as coisas com o mouse em uma tela de computador, em um aparelho real você coloca seus dedos em uma tela de telefone, é uma experiência bem diferente. Só para exemplificar esse tipo de coisa: a alguns anos atrás eu e o Raphael Eckhardt (que fez a capa do livro) estavamos fazendo um jogo tipo puzzle não muito diferente de um bejeweled da vida que envolvia arrastar e soltar peças do jogo no "tabuleiro". Enquanto testavamos no simulador tudo estava uma maravilha porém quando colocamos no telefone notamos que a mão ficava na frente do tabuleiro e que as peças eram tão pequenas que sumiam embaixo do dedo enquanto arrastavamos. Pronto tivemos que mudar nossa arte e nosso UX pois mouses são muito diferentes de mãos.

Você pode comprar um aparelho de desenvolvedor rodando Firefox OS na [loja da geeksphone](http://shop.geeksphone.com/en/). Eu recomendo o [Geeksphone Keon](http://www.geeksphone.com/) pois ele é mais similar aos aparelhos que estão sendo vendidos para os consumidores finais em termos de resolução e capacidade. Você pode também instalar o Firefox OS em alguns aparelhos que rodam Android porém esse tipo de coisa é destinada somente a entusiastas que sabem muito bem o que estão fazendo e possuem mais bugs que as versões que rodam nos Geeksphone e ZTEs.

Caso você possua um aparelho que rode o Firefox OS e esteja com seus drivers em dia você pode enviar aplicativos direto do simulador para o telefone conectado ao computador. Quando o simulador detecta que você plugou um telefone com Firefox OS ele mostra um aviso **Device Connected**.

![Aparelho Conectado!](images/originals/simulator-device-connected.png)

Com o telefone conectado (e detectado), o simulador irá adicionar um botão perto do botão **Connect** e **Refresh** chamado **Push**. Ao apertar esse botão, um pedido de **permissão aparece na tela do telefone** e caso o usuário aceite, o aplicativo é instalado no aparelho.

![Qual botão apertar para enviar o app para o aparelho conectado](images/originals/simulator-press-push.png)

E a janela de permissão se parece com a foto abaixo.

![Não é a melhor foto do mundo mas mostra a janela de permissão (são 4:25 AM)](images/originals/simulator-remote-push.jpg)

Com o aplicativo rodando no aparelho você pode utilizar *remote debugging* para conectar um console de javascript e depurar o seu app.

## Conclusão

A conclusão é o simulador do Firefox OS é legal demais!!! Brincadeiras a parte, a essa altura do livro você ja tem uma boa idéia de como funciona o desenvolvimento de aplicativos para o Firefox OS por isso no próximo capítulo vamos ver como distribuir nosso aplicativos.