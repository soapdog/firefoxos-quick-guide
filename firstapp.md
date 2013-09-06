# Our First App {#firstapp}

![Memos, a minimalist notepad app](images/originals/memos-app.png)

In this chapter we're going to rebuild the **Memos** application which is a note taking application I built to use an example in my talks. This app has three screens. The first is the main screen and has a list of your notes. When you click a note (or add a new one) you're moved to the detail screen that allows you to edit the content and title of the given note as we can see in the shot below.

![Memos, editing screen](images/originals/memos-editing-screen.png)

On the screen shown above the user can choose to delete the selected note by clicking on the trash icon. This will cause a confirmation screen to show as we can see in the following screen.

![Memos, note removal confirmation screen](images/originals/memos-delete-screen.png)

The source code for Memos is available at [my Github Repo](https://github.com/soapdog/memos-for-firefoxos) and it is better to fetch it to understand this chapter by exploring all files. Another copy of the source code is available on the **code** folder inside the [github repository for this book](https://github.com/soapdog/firefoxos-quick-guide).

Memos uses [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB/Using_IndexedDB) to store the notes and the [Gaia Building Blocks](http://buildingfirefoxos.com/building-blocks) to build the interface. In a future update to this book I will talk more about the building blocks but on this first version I am just going to use them and you can check the link above to learn more about it.

The first step is to create a folder for the application, lets call this folder **memos**.

## Creating the manifest

Memos manifest is pretty simple. Create a file named **manifest.webapp** on the **memos** folder. Manifests are [JSON](http://json.org) files that describes an application. In this file we place things such as the name of the app, who the developer is, what icons are used, what file is used to launch the app, what hardware access permission it needs and more.

Abaixo podemos ver o conteúdo do manifesto do Memos, atenção ao copiar pois é fácil errar uma vírgula e tornar o seu JSON inválido. Para validar o seu JSON você pode utilizar várias ferramentas, uma delas que é especifica para validação de manifestos que é o [http://appmanifest.org/](http://appmanifest.org/). Para aprender mais sobre manifestos visite [a página na MDN sobre manifestos](https://developer.mozilla.org/pt-BR/docs/Apps/Manifest).

Below we can see the contents of the Memos app manifest. Attention when copying this data because its very easy to place a comma on the wrong place and create an invalid JSON. There are many tools that you can use to validate JSON files but there is a special one that is built specifically for validating app manifests. You can check out this online tool at [http://appmanifest.org/](http://appmanifest.org/). To learn more about app manifests read [this page on MDN about manifests](https://developer.mozilla.org/docs/Apps/Manifest).

<<[Memos manifest file (*manifest.webapp*)](code/memos/manifest.webapp)

Lets review the fields from the manifest above.

|Field		|Description                                                                        |
|-----------|-----------------------------------------------------------------------------------|
|name		|This is the application name.		                                                |
|version	|This is the current version of the app. 										    |
|launch_path|What file is used to launch your application.					                    |
|permissions|What permissions your app requests. More information about this below.				|
|developer  |Who developed this application 													|
|icons		|The icons used by the app in many different sizes.									|


A parte mais interessante desse manifesto é a entrada de permissões onde pedimos a permissão para *storage* que permite que utilizemos o IndexedDB sem limitação de espaço[^storage-permission] (graças a isso podemos armazenar quantas notas quisermos no nosso programa).

The most interesting part of this manifest is the permissions field where we ask for the *storage* permission that allows us to use IndexedDB without size restriction[^storage-permission] (thanks to that permission we can store as many notes as we want).

[^storage-permission]: To learn more about pemrissions read [the page on MDN about app permissions](https://developer.mozilla.org/en-US/docs/Web/Apps/App_permissions).

Now that the manifest is ready lets move on to the HTML.

## Building the HTML

Before getting our hands dirty and crafting out HTML lets take a brief detour to talk quickly about the [Gaia Building Blocks](http://buildingfirefoxos.com/building-blocks) which are a collection of reusable CSS and JS with the *look and feel* of Firefox OS that you can use on your own apps.

Just like in the World Wide Web you're not required to use the *look and feel* of Firefox OS on your app. Using or not using the Gaia Building Blocks is a personal decision that has implications for branding, convenience, usefulness for your own project and more. The important thing to understand is that your app will not suffer any type of prejudice or penalty on the Firefox Marketplace by not using the Gaia look and feel. I am using it here because I am not a good designer so ready made UI toolkits appeal to me (its that or hiring a designer).

The HTML structure that we use in this program was built following the patterns adopted by the Gaia Building Blocks where each screen is a `<SECTION>` and the elements follow a predefined format. The ideal way of going on now is to download the source code from the [memos repository]
(https://github.com/soapdog/memos-for-firefoxos) so that you have the Building Blocks available for use.

W> Warning: The Building Blocks version I used is not the current one and I've changed the original files so do not download the current version from their website and use the one provided on the Memos repository for this chapter (In the real world, use the version from their site).

### Including the Building Blocks

Antes de mais nada, copie as pastas **shared** e **style** para a pasta Memos para que possamos utilizar o Building Blocks. Vamos começar o nosso arquivo **index.html** com os *includes* necessários para o programa

Before doing anything else copy the **shared** and the **styles** folder to the **memos** folder so that we can use the Building Blocks in our app. Lets begin our **index.html** files by including the needed bits.

~~~~~~~~
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/style/base.css" />
    <link rel="stylesheet" type="text/css" href="/style/ui.css" />
    <link rel="stylesheet" type="text/css" href="/style/building_blocks.css" />
    <link rel="stylesheet" type="text/css" href="shared/style/headers.css" />
    <link rel="stylesheet" type="text/css" href="shared/style_unstable/lists.css" />
    <link rel="stylesheet" type="text/css" href="shared/style_unstable/toolbars.css" />
    <link rel="stylesheet" type="text/css" href="shared/style/input_areas.css" />
    <link rel="stylesheet" type="text/css" href="shared/style/confirm.css" />
    <title>Memos</title>
</head>
~~~~~~~~

Na *linha 01* declaramos o tipo do documento como sendo HTML 5. Da *linha 05 até a linha 15* incluímos os CSS dos diversos componentes que são utilizados no aplicativo tais como cabeçalhos, listas, áreas de entrada de dados entre outros.

### Construíndo a tela principal

Agora podemos passar a implementação das telas. Como falamos anteriormente, cada tela do programa é uma **<section>** dentro do **<body>** do HTML que deve ter um atributo *role* com valor *application* tipo `<body role="application">`. Isso é utilizado pelos seletores dos CSS do Building Blocks. Vamos construír a primeira tela (e declarar o body).

~~~~~~~~
<body role="application">

<section role="region" id="memo-list">
    <header>
        <menu type="toolbar">
            <a id="new-memo" href="#"><span class="icon icon-add">add</span></a>
        </menu>
        <h1>Memos</h1>
    </header>
    <article id="memoList" data-type="list"></article>
</section>
~~~~~~~~

Nossa tela tem um **<header>** que possui um botão para adicionar novas notas e o nome do programa. Possui também um **<article>** que é utilizado para conter a lista de notas armazanadas no app. Nós utilizaremos as IDs do **<article>** e do **botão** para capturar eventos quando chegarmos na parte em JavaScript.

Repare que a criação da tela é um HTML bem tranquilo de se entender, construir a mesma tela em outras linguagens é muito mais trabalhoso. Simplesmente declaramos nossos componentes e damos IDs para elementos que desejamos referenciar posteriormente. 

Agora que temos a tela principal pronta, vamos montar a tela de edição que é mais complicada.

### Montando a tela de edição

~~~~~~~~
<section role="region" id="memo-detail" class="skin-dark hidden">
    <header>
        <button id="back-to-list"><span class="icon icon-back">back</span>
        </button>
        <menu type="toolbar">
            <a id="share-memo" href="#"><span class="icon icon-share">share</span>
            </a>
        </menu>
        <form action="#">
            <input id="memo-title" placeholder="Memo Title" required="required" type="text">
            <button type="reset">Remove text</button>
        </form>
    </header>
    <p id="memo-area">
        <textarea placeholder="Memo content" id="memo-content"></textarea>
    </p>
    <div role="toolbar">
        <ul>
            <li>
                <button id="delete-memo" class="icon-delete">Delete</button>
            </li>
        </ul>
    </div>
    <form id="delete-memo-dialog" role="dialog" data-type="confirm" class="hidden">
        <section>
            <h1>Confirmation</h1>
            <p>Are you sure you want to delete this memo?</p>
        </section>
        <menu>
            <button id="cancel-delete-action">Cancel</button>
            <button id="confirm-delete-action" class="danger">Delete</button>
        </menu>
    </form>
</section>
~~~~~~~~

Essa tela de edição contém a tela de diálogo utilizada quando o usuário tenta deletar uma nota por isso ela é mais complicada. 

No topo da tela que é marcado pelo **<header>** temos o botão de voltar para a tela principal, uma caixa de entrada de texto que é utilizada para mostrar e modificar o título da nota e um botão utilizado para enviar a nota por email.

Depois da toolbar que fica no topo, temos um parágrafo contendo uma área para a entrada de texto da nota e então uma outra toolbar com um botão para deletar a nota que está aberta.

Esses três elementos e seus nós filhos formam a tela de edição e após essa tela temos um **<form>** que na verdade representa a caixa de diálogo utilizada pela tela de confirmação da remoção da nota. Essa caixa de diálogo é bem simples contendo uma mensagem informativa e um botão para cancelar a ação de deletar a nota e um para confirmar.

Ao fecharmos essa **<section>** terminamos todas as telas do programa e o restante do código HTML serve apenas para incluir os arquivos de JavaScript utilizados pelo programa.

~~~~~~~~
<script src="/js/model.js"></script>
<script src="/js/app.js"></script>
</body>
</html>
~~~~~~~~

## Construíndo o JavaScript

Agora vamos programar de verdade e dar vida ao nosso app. Para efeitos de organização separei o código em dois arquivos de JavaScript:

* **model.js:** que contém as rotinas para lidar com o armazenamento e alteração das notas porém não contém a lógica do programa ou algo relacionado a sua interface e tratamento de entrada de dados.
* **app.js:** responsável por ligar os elementos do HTML às rotinas correspondentes e contém a lógica do app.

Os dois arquivos devem ser postos em uma pasta chamada **js** ao lado das pastas **style** e **shared**.

### model.js

No Firefox OS utilizaremos o [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB/Using_IndexedDB) para guardar as notas. Como pedimos a permissão de *storage* podemos grava quantas notas a memória do aparelho permitir.

A parte do código do model.js que mostrarei abaixo é responsável por abrir a conexão e criar o *storage* se necessário.

A> Importante: Esse código foi escrito para ser entendido facilmente e não representa as melhores práticas de programação para JavaScript. Variáveis globais são utilizadas (ARGH!) entre outros problemas. Fora isso o tratamento de erros é basicamente inexistente. O mais importante desse livro é ensinar o *worlflow* de como programar apps para Firefox OS.

~~~~~~~
var dbName = "memos";
var dbVersion = 1;

var db;
var request = indexedDB.open(dbName, dbVersion);

request.onerror = function (event) {
    console.error("Can't open indexedDB!!!", event);
};
request.onsuccess = function (event) {
    console.log("Database opened ok");
    db = event.target.result;
};

request.onupgradeneeded = function (event) {

    console.log("Running onUpgradeNeeded");

    db = event.target.result;

    if (!db.objectStoreNames.contains("memos")) {

        console.log("Creating objectStore for memos");

        var objectStore = db.createObjectStore("memos", {
            keyPath: "id",
            autoIncrement: true
        });
        objectStore.createIndex("title", "title", {
            unique: false
        });

        console.log("Adding sample memo");
        var sampleMemo1 = new Memo();
        sampleMemo1.title = "Welcome Memo";
        sampleMemo1.content = "This is a note taking app. Use the plus sign in the topleft corner of the main screen to add a new memo. Click a memo to edit it. All your changes are automatically saved.";

        objectStore.add(sampleMemo1);
    }
}
~~~~~~~

A> Importante: Novamente me perdoem pelas variáveis globais, isso aqui é um app educativo apenas. Outro detalhe é que eu removi os comentários dos código colados no livro para economizar espaço. O código fonte no github está comentado.

O código acima cria um objeto *db* e um objeto *request*. O objeto *db* é utilizado por outras funções no código para manipular o registro das notas.

Na implementação da função `request.onupgradeneeded` aproveitamos para criar uma nota de exemplo desta forma assim que o programa liga pela primeira vez e essa função é executada, o banco de dados é inicializado com uma nota de boas vindas.

Com nossa conexão aberta e armazenamento inicializado é hora de implementar as funções para manipulação das notas.

~~~~~~~~
function Memo() {
    this.title = "Untitled Memo";
    this.content = "";
    this.created = Date.now();
    this.modified = Date.now();
}

function listAllMemoTitles(inCallback) {
    var objectStore = db.transaction("memos").objectStore("memos");
    console.log("Listing memos...");

    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            console.log("Found memo #" + cursor.value.id + " - " + cursor.value.title);
            inCallback(null, cursor.value);
            cursor.continue();
        }
    };
}

function saveMemo(inMemo, inCallback) {
    var transaction = db.transaction(["memos"], "readwrite");
    console.log("Saving memo");

    transaction.oncomplete = function (event) {
        console.log("All done");
    };

    transaction.onerror = function (event) {
        console.error("Error saving memo:", event);
        inCallback({
            error: event
        }, null);

    };

    var objectStore = transaction.objectStore("memos");

    inMemo.modified = Date.now();

    var request = objectStore.put(inMemo);
    request.onsuccess = function (event) {
        console.log("Memo saved with id: " + request.result);
        inCallback(null, request.result);

    };
}

function deleteMemo(inId, inCallback) {
    console.log("Deleting memo...");
    var request = db.transaction(["memos"], "readwrite").objectStore("memos").delete(inId);

    request.onsuccess = function (event) {
        console.log("Memo deleted!");
        inCallback();
    };
}
~~~~~~~~

Acima criamos uma função construtora para montar novas notas já com alguns campos inicializados. A seguir implementamos funções para listar, salvar e remover as notas. Essas funções em geral sempre aceitam um parametro `inCallback` que é uma função de retorno para ser executada após o processamento da função. Isso é necessário dada a natureza assíncrona das chamadas ao IndexedDB. Todas as callbacks tem a mesma assinatura que é `callback(error, value)` onde um dos valores é nulo dependendo do que aconteceu.

A> Como esse é um livro de caráter introdutório eu optei por não utilizar [*Promises*](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise) visto que muitos desenvolvedores ainda não estão familiarizados com o conceito. Eu recomendo fortemente a utilização desse tipo de solução que torna o código mais legível e fácil de manter.

Com nossas funções para o armazenamento e manipulação de notas prontas vamos agora implementar a lógica da nossa app no arquivo **app.js**

### app.js

Esse arquivo contém a nossa lógica do programa. Como o código é grande demais para colocar todo de uma vez só vou quebra-lo em partes e colocar aos pouquinhos.

~~~~~~~~
var listView, detailView, currentMemo, deleteMemoDialog;

function showMemoDetail(inMemo) {
    currentMemo = inMemo;
    displayMemo();
    listView.classList.add("hidden");
    detailView.classList.remove("hidden");
}


function displayMemo() {
    document.getElementById("memo-title").value = currentMemo.title;
    document.getElementById("memo-content").value = currentMemo.content;
}

function shareMemo() {
    var shareActivity = new MozActivity({
        name: "new",
        data: {
            type: "mail",
            body: currentMemo.content,
            url: "mailto:?body=" + encodeURIComponent(currentMemo.content) + "&subject=" + encodeURIComponent(currentMemo.title)

        }
    });
    shareActivity.onerror = function (e) {
        console.log("can't share memo", e);
    };
}

function textChanged(e) {
    currentMemo.title = document.getElementById("memo-title").value;
    currentMemo.content = document.getElementById("memo-content").value;
    saveMemo(currentMemo, function (err, succ) {
        console.log("save memo callback ", err, succ);
        if (!err) {
            currentMemo.id = succ;
        }
    });
}

function newMemo() {
    var theMemo = new Memo();
    showMemoDetail(theMemo);
}
~~~~~~~~

Primeiro declaramos algumas variáveis globais para armazenar umas referências a alguns elementos que pretendemos utilizar dentro das funções. Das variáveis globais, a mais interessante é `currentMemo` que é um objeto que guarda qual nota o usuário está vendo.

As funções `showMemoDetail()` e `displayMemo()` funcionam juntas, a primeira carrega a nota escolhida em `currentMemo` e manipula o CSS dos elementos para que a tela de visualização/edição seja mostrada e a segunda se encarrega de pegar o conteúdo de `currentMemo` e adicionar a tela. Dava para fazer as duas coisas dentro de uma função só mas quando eu estava experimentando com esse app eu separei as funções para que a inserção do conteúdo da nota na interface ficasse separado da manipulação das telas, desta forma eu pude brincar mais com variações das funções.

A função `shareMemo()` utiliza uma [WebActivity](https://hacks.mozilla.org/2013/01/introducing-web-activities/) para criar uma nova mensagem no programa de email com o conteúdo da nota.

A função `textChanged()` pega os dados dos campos de entrada e coloca novamente em `currentMemo` e então salva a nota. Isso é feito pois a idéia do programa é que o usuário nunca precise explicitamente salvar uma nota. Toda alteração nas caixas de entrada de texto causam a execução dessa rotina e a atualização da nota no banco de dados.

A função `newMemo()` cria uma nova nota e abre a tela de edição para ela.

~~~~~~~~
function requestDeleteConfirmation() {
    deleteMemoDialog.classList.remove("hidden");
}

function closeDeleteMemoDialog() {
    deleteMemoDialog.classList.add("hidden");
}

function deleteCurrentMemo() {
    closeDeleteMemoDialog();
    deleteMemo(currentMemo.id, function (err, succ) {
        console.log("callback from delete", err, succ);
        if (!err) {
            showMemoList();
        }
    });
}

function showMemoList() {
    currentMemo = null;
    refreshMemoList();
    listView.classList.remove("hidden");
    detailView.classList.add("hidden");
}
~~~~~~~~

A função `requestDeleteConfirmation()` é responsável por mostrar a tela de confirmação de remoção de nota.

As funções `closeDeleteMemoDialog()` e `deleteCurrentMemo()` são acionadas pelos botões de cancelamento e de confirmação de remoção da nota.

A função `showMemoList()` faz a faxina antes de mostrar a lista de notas pois limpa o valor de `currentMemo` afinal se estamos vendo a lista de notas então não estamos vendo nenhuma nota e faz com que a tela principal seja mostrada.

~~~~~~~~
function refreshMemoList() {
    if (!db) {
        // HACK:
        // this condition may happen upon first time use when the
        // indexDB storage is under creation and refreshMemoList()
        // is called. Simply waiting for a bit longer before trying again
        // will make it work.
        console.warn("Database is not ready yet");
        setTimeout(refreshMemoList, 1000);
        return;
    }
    console.log("Refreshing memo list");

    var memoListContainer = document.getElementById("memoList");


    while (memoListContainer.hasChildNodes()) {
        memoListContainer.removeChild(memoListContainer.lastChild);
    }

    var memoList = document.createElement("ul");
    memoListContainer.appendChild(memoList);

    listAllMemoTitles(function (err, value) {
        var memoItem = document.createElement("li");
        var memoP = document.createElement("p");
        var memoTitle = document.createTextNode(value.title);

        memoItem.addEventListener("click", function (e) {
            console.log("clicked memo #" + value.id);
            showMemoDetail(value);

        });

        memoP.appendChild(memoTitle);
        memoItem.appendChild(memoP);
        memoList.appendChild(memoItem);


    });
}
~~~~~~~~

A função `refreshMemoList()` modifica o DOM ao construir elemento por elemento a lista de notas contidas no banco de dados. Seria muito mais fácil utilizar uma template com handlebars ou coisa semelhante mas como esse é um app *vanilla javascript* fizemos tudo na mão. Essa função é chamada pela `showMemoList()` que foi mostrada anteriormente.

Essas são todas as funções do nosso programa. A única parte de código que falta é a inicialização dos eventos e a chamada inicial para `refreshMemoList()`.

~~~~~~~
window.onload = function () {
    // elements that we're going to reuse in the code
    listView = document.getElementById("memo-list");
    detailView = document.getElementById("memo-detail");
    deleteMemoDialog = document.getElementById("delete-memo-dialog");

    // All the listeners for the interface buttons and for the input changes
    document.getElementById("back-to-list").addEventListener("click", showMemoList);
    document.getElementById("new-memo").addEventListener("click", newMemo);
    document.getElementById("share-memo").addEventListener("click", shareMemo);
    document.getElementById("delete-memo").addEventListener("click", requestDeleteConfirmation);
    document.getElementById("confirm-delete-action").addEventListener("click", deleteCurrentMemo);
    document.getElementById("cancel-delete-action").addEventListener("click", closeDeleteMemoDialog);
    document.getElementById("memo-content").addEventListener("input", textChanged);
    document.getElementById("memo-title").addEventListener("input", textChanged);

    // the entry point for the app is the following command
    refreshMemoList();

};
~~~~~~~

Agora todos os nossos arquivos estão prontos e podemos testar o aplicativo no simulador.

## Testando o app no simulador

Antes de testarmos o aplicativo no simulador é melhor garantirmos que todos os arquivos estão no lugar certo. Sua pasta deve se parecer com essa aqui:

![Lista de arquivos do Memos](images/originals/memos-file-list.png)

Se você desconfia que pode haver algo errado com o que você digitou basta comparar sua versão com a que está no [meu GitHub](https://github.com/soapdog/memos-for-firefoxos) (Existe uma cópia do código do app na pasta **code** dentro do [repositório do livro](https://github.com/soapdog/guia-rapido-firefox-os) ).

Para abrir o *Dashboard do Simulator* vá no menu **Ferramentas -> Desenvolvedor Web -> Firefox OS Simulator**.

![Como abrir o dashboard do simulador](images/originals/tools-web-developer-simulator.png)

Com o dashboard aberto, clique no botão **Add Directory** e navegue até a pasta do código fonte do Memos e selecione o arquivo de manifesto.

![Adicionando um novo aplicativo](images/originals/simulator-add-directory.png)

Se tudo funcionar corretamente você vera o aplicativo Memos na lista de apps.

![Memos aparecendo no dashboard](images/originals/memos-on-dashboard-display.png)

Ao adicionar o app, o simulador ligará automaticamente com o app aberto para você testar. Pronto, você ja pode testar as funcionalidades do Memos. Parabéns você criou e testou seu primeiro app. Não é um app complexo ou revolucionário mas te ajudou a entender o *workflow* de desenvolvimento. Lembre-se sempre que você alterar o código fonte do aplicativo, você deve apertar o botão **Refresh** para atualizar a cópia que está instalada no simulador.

## Conclusão

Parabéns você construiu seu primeiro aplicativo móvel para Firefox OS e testou ele no simulador. No próximo capítulo apresentaremos as ferramentas do desenvolvedor que irão facilitar a sua vida na hora de programar.

