# Distributing Your Apps {#distribution}

Now that our application is ready we need to figure out a way to get it to our users. In the [introduction chapter](#introduction) I mentioned that, unlike Apple, Mozilla does not force you to use their distribution channels - we're free to spread our creations as we wish. In this chapter we're going to learn how to distribute our app **outside the [Firefox Marketplace](http://marketplace.firefox.com)**. 

In my humble opinion, distributing your application outside the Mozilla Marketplace makes sense in the following two situations. 

 1. You're developing an application for internal use within your company, or to a restricted/limited group of users. If you ship it to the marketplace then it will be available to anyone and if you want to restrict the usage of the app to a group of people then you will need some kind of authentication scheme with a server backend or something similar. For example, when the *Evernote* application is launched for the first time, it asks the user to log in their servers.   

 2. You already have a huge user-base that you can tap into for your app distribution. An example of this would be a news paper, like the *Financial Times*, which can simply distribute their app on their own website and reach most of their users. Remember that you can distribute your application outside the marketplace and in the marketplace at the same time, so if you already have your own marketing channel you can leverage that while still using the marketplace for reaching new users outside your own channel.

The distribution process for hosted and packaged apps is similar, but it uses different functions. Thats why I'm discussing them separately. Regardless if your app is hosted or packaged, the workflow is usually the same: you provide a button or link on your own home page that says something similar to **Click to Install Our App**,  or you use a special URL that when launched causes the installation routine to run. In both cases, a dialog is presented to the user asking him or her to confirm that they want to install the given app.

## Hosted Apps 

<<[Code for hosted app installation](code/distribution/hosted_apps_distribution.js)

In the sample above `manifestURL` contains the address for the manifest file. When this code runs, the system asks the user to confirm his desire to install the given application and depending on the choice of the user it runs the success or the error callback. 

To learn more about this API check [the MDN page about application installation](https://developer.mozilla.org/docs/Apps/JavaScript_API).

## Packaged Apps

Packaged app installation is similar but instead of calling `mozApps.install()` we call `mozApps.installPackage()` as shown in the sample code below.

<<[Code for packaged app installation](code/distribution/packaged_apps_distribution.js)

W> Warning: I have the impression that packaged app installation outside of the marketplace is not possible on Firefox OS version 1.0.1. Even though the API is documented, I have never tried it. Please if you try it, send me feedback so that I can update this book.

## Summary

This chapter discussed options for distributing applications outside of the Firefox Marketplace by using the installation and management APIs for *Open Web Apps*. There are many other routines available to do things such as checking if your application is installed (so that you can hide that *Click Here To Install* button). To learn more about those APIs check out the [MDN page about application installation](https://developer.mozilla.org/docs/Apps/JavaScript_API) (yes, gave you this link before - this time, click it! There is important stuff there).

In the next chapter we're going to learn how to distribute our apps through the Firefox Marketplace.
