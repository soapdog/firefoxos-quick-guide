# Ferramentas do Desenvolvedor

O Firefox possui diversas ferramentas para auxiliar os desenvolvedores web a fazerem o seu trabalho. Muita gente ainda usa o [FireBug](https://addons.mozilla.org/pt-BR/firefox/addon/firebug/) e não sabe que o Firefox ja inclui ferramentas próprias. Nessa sessão vamos ver rapidamente algumas ferramentas que são muito úteis para quem está desenvolvendo apps.

Quem estiver interessado em conhecer mais sobre essas ferramentas e o que mais virá por ai pode dar uma olhada na [página da MDN sobre ferramentas do desenvolvedor](https://developer.mozilla.org/en-US/docs/Tools).

## Conhecendo o Modo de Design Adaptável

Uma das coisas mais cômodas de quando estamos desenvolvendo para web é o fato de podermos simplesmente salvar o HTML e recarregar no browser para vermos as mudanças sem a necessidade de um compilador ou coisa do gênero. Por mais que o simulador do Firefox OS também permita esse tipo de workflow as vezes queremos simplesmente ir testando as coisas no Firefox no desktop mesmo. Esse tipo de teste no desktop é muito comum quando estamos lidando com aplicativos hospedados que devem se adaptar para desktops, tablets e telefones. Nesses casos você pode utilizar o **Modo de Design Adaptável** para adaptar a tela (e o viewport) para tamanhos comuns de tablet e telefones e ver como seu trabalho fica nessas telas.

A utilização do modo de design adaptável é especialmente importante para quem está trabalhando com [**media queries**](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) pois permite que você redimensione a tela do jeito que bem entender e teste o seu CSS.

O modo de design adaptável pode ser ativado no **menu Ferramentas -> Desenvolvedor Web -> Modo de Design Adaptável**[^responsive-design-view] como podemos ver na imagem abaixo.

[^responsive-design-view]: Em inglês *Responsive Design View*.

![Ativando o Modo de Design Adaptável](images/originals/responsive-design-view.png)

Ao ativar esse modo, a tela do Firefox se modifica de maneira que você possa alterar o tamanho do viewport utilizando as laterais da tela ou a caixa de seleção.

![Exemplo do Modo de Design Adaptável](images/originals/responsive-view-sample.png)

A maioria dos telefones rodando Firefox OS que já estão no mercado funcionam com uma resolução de 480x320 porém em vez de simplesmente fazer as coisas pensando nessa resolução é mais legal utilizar media queries e a metodologia chamada de design responsivo. Para quem quer saber mais sobre design responsivo eu recomendo o livro [Responsive Web Design](http://www.abookapart.com/products/responsive-web-design) e o [Mobile First](http://www.abookapart.com/products/mobile-first). A editora nacional [**Casa do Código**](http://casadocodigo.com.br) esta com livros muito bons a preços muito acessíveis também, dos livros do catálogo deles, os mais interessantes para o assunto em questão são  [Web Design Responsivo](http://www.casadocodigo.com.br/products/livro-web-design-responsivo) e [A Web Mobile](http://www.casadocodigo.com.br/products/livro-web-mobile). Para quem quiser entrar de cabeça, eles tem um [pacote de livros de web responsiva e mobile](http://www.casadocodigo.com.br/products/colecao-webdesign).

Em resumo o modo de design adaptável permite que a gente teste os nossos apps em diversos tamanhos de tela sem ser necessário ficar redimensionando a janela principal do Firefox. Na minha opinião é uma das ferramentas mais úteis do mundo e eu não sei por que os demais navegadores ainda não copiaram...


## Outras Ferramentas

As ferramentas de desenvolvedor do Firefox são similares às do FireBug e do Google Chrome. Elas permitem que você interaja com o DOM e com o ambiente do JavaScript da página que está carregada e muito mais. Com elas você pode testar suas funções JavaScript, enviar comandos de depuração e status via o [objeto console](https://developer.mozilla.org/en-US/docs/Web/API/console) e manipular tanto o DOM como o CSS da página. São ferramentas imprescindíveis para quem está trabalhando com web.

![Página com o Console de JavaScript visível](images/originals/console-open.png) 

Além do *console de JavaScript* existem várias outras ferramentas como um [*editor de estilo*](https://developer.mozilla.org/en-US/docs/Tools/Style_Editor), [*monitor de rede*](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor), [*profiler de JavaScript*](https://developer.mozilla.org/en-US/docs/Tools/Profiler), [*depurador de JavaScript*](https://developer.mozilla.org/en-US/docs/Tools/Debugger), [*inspetor de páginas*](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector) entre outros.

Como vimos no aplicativo que construímos no capítulo anterior, o console pode ser utilizado para verificar o andamento do nosso programa. Existem muitos desenvolvedores web que ainda utilizam *alerts()* espalhados pelo código para debugar coisas, aprender a utilizar as ferramentas do desenvolvedor é um passo muito importante na formação de qualquer um (sem contar que poupa um tempo desgraçado).

Uma ferramenta que vale um destaque é o [*depurador remoto*](https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging) que permite que você conecte um telefone rodando Android ou Firefox OS ao seu computador e utilize as ferramentas de desenvolvedor do seu computador para depurar o que esta rodando no aparelho móvel.

## Conclusão

Esse foi um capítulo expositivo para dar ao leitor referências para aprender mais sobre as ferramentas que vem dentro do Firefox. A utilização dessas ferramentas facilita muito a vida da gente e quando aliamos elas com o simulador do Firefox OS temos uma combinação imbatível para construção de apps por isso que no próximo capítulo vamos aprender um pouco mais sobre o simulador.