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

On *line 01* we declare the DOCTYPE as HTML5. From *line 05 up to 15* we include the CSS from the various components that we're going to use in our app such as headers, lists, text entry fields and more.

### Building the main screen

Now we can start building the various screens. As spoken earlier, each screen used by our app is a `<section>` inside the HTML `<body>`. The body tag must have an attribute *role* with its value equal to *application* because that is used by the CSS selectors to build the interface, so our body tag will be `<body role="application">`. Lets build the first screen and declare our body tag as well.

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

Our screen has a `<header>` containing a button to add new notes and the application name. The screen also has an `<article>` which will be used to hold the list of stored notes. We're going to use the button and the article IDs to capture events when we reach the JavaScript implementation part.

Be aware that each screen is a fairly straight forward HTML chunk. Building these same screens in another languages usually requires a lot more work. All we're doing is declaring our components and giving them IDs when they are controls that we're going to reference later.

Now that the main screen is done, lets build the editing screen that is a bit more complex.

### Building the editing screen

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

The editing screen is a bit more complex because it also holds the dialog box used when the user tries to delete a note.

On the top of the screen (a.k.a the `<header>`) we have a back button to return the main screen, a text entry field that is used to hold the title of the given note and a button that is used to share the note over email.

After the top toolbar we have a paragraph holding a `<textarea>` that is used to hold the content of the note and then another toolbar with a trashcan button used to delete the current note.

These three elements and their child nodes contain the editing screen. After them we have a `<form>` that is used as a dialog box containing the confirmation screen that is presented when the user tries to delete a note. This dialog box is pretty easy containing only an information text and two buttons, one for deleting the note and another for canceling the action.

Now that we're closing this `<section>` we have all our screens implemented and the remaining HTML code is only there to include the JavaScript files and close the html file.

~~~~~~~~
<script src="/js/model.js"></script>
<script src="/js/app.js"></script>
</body>
</html>
~~~~~~~~

## Crafting the JavaScript code

Now we're going to start coding for real and give life to our app. To better organize this code, I've divided the JavaScript code in two files:

* **model.js:** contains the routines to deal with storage and retrieval of notes but does not contain app logic or anything related to the interface or data entry.
* **app.js:** attaches the HTML elements with their event handlers and contains the app logic.

Both files should be placed inside a **js** folder next to the **style** and **shared** folders.

### model.js

We're going to use [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB/Using_IndexedDB) to store our notes. Since we asked the *storage* permission on the app manifest we can store as many notes as we want (a.k.a. until de device runs out of memory).

The part of the code from *model.js* that is shown below is responsible for open the connection and creating the storage.

A> Important: This code was written to be understood easily and does not represent the best practices for JS programming. Some global variables are used (I'm so going to hell for this) among other tidbits. The error handling code is basically non-existant. The main objective of this book is to teach the *workflow* of developing apps for Firefox OS and not teaching best JS patterns. That being said, depending on feedback, I will update the code in this book to better reflect best practices if enough people think it will not impact the beginners.

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

A> Important: Forgive me again for the globals, this is an educational resource only. Another details is that I removed the comments from the source code to save space in the book. If you pick the source from GitHub you will get all the comments.

The code above created a *db* object and a *request* object. The *db* object is used by other functions in the source to manipulate the notes storage.

On the implementation of the `request.onupgradeneeded` function we also create a welcome note. This function is executed when the application runs for the first time (or when the db version changes). This way once the application launches for the first time, the database is initialized with a single welcome note.

With our connection open and the storage initialized its time to implement the basic functions for note manipulation.

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

On the piece of code above we create a constructor function that creates new Memos with some fields already initialized. After that we implement functions for listing, saving and removing notes. Many of these functions receive a callback parameter called `inCallback` which is a function to be called after the function does its thing. This is needed due to the asynchronous nature of IndexedDB. All callbacks have the same signature which is `callback(error, value)` where one of the values is null depending on what happened.

A> Since this is a beginner book I've opted not to use [*Promises*](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise) since many beginners are not familiar with the concept. I recommend with all my heart using such concepts to create easier to maintain code that is more pleasant to read.

Now that our note storage and manipulation functions are ready lets implement our app logic in a file called **app.js**.

### app.js

This file will contain our app logic. Since the source code is to large for me to place it all at once on the book, I will break it in parts and explain each part piece by piece.

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

