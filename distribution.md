# Distributing Your Apps {#distribution}

Now that our application is ready we need to figure our a way to ship it to our users. On the [introduction chapter](#introduction) we understood that Mozilla does not try to restrict your freedom in any way and that we're free to spread our creations as we wish. On this chapter we're going to learn how to distribute our app **outside the [Firefox Marketplace](http://marketplace.firefox.com)**. 

Distributing your application outside the Firefox Marketplace makes more sense (in my humble opinion) when you match one of two reasons. The first reason is when you're developing an application for internal use on your own company or to a restricted group. If you ship it to the marketplace then it will be available to anyone and if you want to restrict the usage of the app to a group of people then you will need some kind of authentication scheme with a server backend or something similar. For example the *Evernote* application when launched for the first time asks the user to provide its account credentials before allowing him in. The second reason is when you already have a huge userbase that you can tap for your app. An example of this user case is the *Financial Times* that can simply distribute the app on its own website and reach most of its users. Remember that you can distribute your application outside the marketplace and in the marketplace at the same time so if you already have your own marketing channel you can leverage that while still using the marketplace for reaching new users outside your own channel.

The distribution process for hosted and packaged apps is similar but it uses different functions and thats why I am showing them separate. Regardless if your app is hosted or packaged the workflow is usually the same, you provide a button or link on your own home page that says something similar to **Click to Install Our App** or an special address that when launched causes the installation routine to run. On both cases, a dialog is presented to the user asking him to confirm that he wants to install the given app (which is good for security).

## Hosted Apps 

<<[Code for hosted app installation](code/distribution/hosted_apps_distribution.js)

On the sample above `manifestURL` contains the address for the manifest file. When this code runs, the system asks the user to confirm his desire to install the given application and depending on the choice of the user it runs the success or the error callback. 

To learn more about this API check [the MDN page about application installation](https://developer.mozilla.org/docs/Apps/JavaScript_API).

## Packaged Apps

Packaged app installation is similar but instead of calling `mozApps.install()` we call `mozApps.installPackage()` as shown in the sample code below.

<<[Code for packaged app installation](code/distribution/packaged_apps_distribution.js)

W> Warning: I have the impression that packaged app installation outside of the marketplace is not possible on Firefox OS version 1.0.1. Even though the API is documented, I have never tried it. Please if you try it, send me feedback so that I can update this book.

## Summary

Vimos rapidamente como é realizada a instalação de um aplicativo fora do Firefox Marketplace atraves das rotinas de instalação e gerenciamento e de **Open Web Apps**. Existem várias outras rotinas como por exemplo para detectar se a app está instalada ou não (assim você pode esconder o botão de instalar se a app já está instalada). Para saber mais sobre essas rotinas não deixe de ver a [página na MDN sobre instalação de aplicativos](https://developer.mozilla.org/pt-BR/docs/Apps/JavaScript_API) (eu já falei isso nesse capítulo, eu sei sou prolixo).

We learned really quickly how to distribute applications outside of the Firefox Markeplace by using the installation and management APIs for *Open Web Apps*. There are many other routines available to do things such as checking if your application is installed (so that you can hide that *Click Here To Install* button). To know more about those APIs check out the [MDN page about application installation](https://developer.mozilla.org/docs/Apps/JavaScript_API) (yes, gave you this link before, this time, read it).

On the next chapter we're going to learn how to distribute our apps on the Firefox Marketplace.
