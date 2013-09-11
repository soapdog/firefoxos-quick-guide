# Basic Concepts {#concepts}

Before we get our hands dirty and build our first app, lets learn some basic concepts about developing for Firefox OS. We learned on the [introduction](#introduction) that the apps are based on HTML5 just like web pages but we don't know what are the differences between a web page and an open web app. If we use our collective knowledge about other mobile platforms we can agree that the minimum requirements for an application are:

* To have an icon that the user can click to launch the app.
* To have a name.
* To work offline when possible.

Looking at the big picture, a Firefox OS app is just a web page that has an icon, a name and is usually able to work offline depending on the app is implemented. All that data about an application such as name, icon and more is defined in a *application manifest file* that is the focus of our next section.

## The Application Manifest

The [manifest]https://developer.mozilla.org/docs/Apps/Manifest) is a [JSON](http://json.org) file that describes an open web app. Usually this file is called **manifest.webapp** and lives next to your main HTML file that is usually called **index.html**.

<<[Sample Manifest](code/sample_manifest.webapp)

Above we can the the manifest for an application called memos[^memos]. Among other things it describes who created the application, which icons are used, what is the name of the app, what file is used to launch the app (in this case it is *index.html*), what hardware access permissions your app requires, etc. This file is used by Firefox OS to add the application to the device and by the Firefox Marketplace to display the application on the catalog as we can see in the image below.

[^memos]: This is a sample app for Firefox OS that can be [seen on the Firefox Marketplace](https://marketplace.firefox.com/app/memos) whose the [source code is on GitHub](https://github.com/soapdog/memos-for-firefoxos).

![Memos app shown at the Firefox Marketplace](images/originals/memos-marketplace.png)

The same information from the manifest is used by the system to add the app to the device as we can see on the following screenshot.

![Memos on the simulator](images/originals/memos-simulator.png)

By gathering your HTML, CSS, JavaScript files and a manifest file you already have an application ready to run on Firefox OS. Moving on our topic about basic concepts lets learn more about what application types exists.

## Types of Application

Firefox OS has two types of applications: hosted apps and packaged apps.

* **Hosted Apps:** Are hosted on a web server just like normal websites and when launched by the user a request is made to the remote server.
* **Packaged Apps:** Are distributed as a zip files and copied to the device when installed.

There are pros and cons for both approaches. Hosted apps are easier to update because all you need to do is to change the files on the server but its harder to make them work offline because that requires technologies such as [**appcache**](https://developer.mozilla.org/pt-BR/docs/HTML/Using_the_application_cache) which is not the most straight forward thing. Keep in ming that there is a little overhead when launching the appcache enabled app because the system needs to check if the cache is up to date before launching the app. Packaged apps on the other hand are always on the device and do not need to validate any type of cache storage before launching but updating them involves more work because you need to ship the new version to the Firefox Marketplace or if you're distributing them on your own channel, you will need to create update routines in your app. 

There are no rules about what type of application is best or worse. Personally, I'd rather build packaged apps because I don't like using appcache and dealing with web hosting servers for apps. At this point I must say that the tools available for JavaScript developers already deal with appcache generation and deployment of hosted apps and that those tools make our life much easier[^js-tools]. In the end it is a personal choice, for some scenarios it is better to build hosted apps, for others it makes no sense. In this book we're going to build packaged apps  because this allows me to ignore the whole *how to work with web server* explanation. If you want to know more about distributing hosted apps, check [the hosted applications link at the developer hub](https://marketplace.firefox.com/developers/docs/hosted).

[^js-tools]: There are many useful tools out there, check out [Grunt](gruntjs.com), [Volo](http://volojs.org/), [Yeoman](http://yeoman.io/), [Bower](http://bower.io/). There is a lot of overlap among these tools, its a matter of preference which one you use. (I like Volo more than Grunt mostly because Volofiles are prettier than Gruntfiles IMHO).

Now that we understand the two types of application, lets dive deeper and learn more about the different levels of hardware access they can have.

## Hardware Access Levels

There are three levels of hardware access on Firefox OS and each level has more access to APIs than the previous level.

* **Plain (a.k.a. web):** This is the standard level. Hosted apps are plain web apps and packaged apps that do not declare a type property in their manifest file are plain web apps as well. These apps have access to the most common APIs such as picking a photo from the camera or album, geolocation, etc.
* **Privileged:** This type of app has access to all APIs that plain apps can access plus some more. Only **packaged apps can be privileged apps**. These apps have access to deeper levels of the system such as the Contacts API.
* **Certified:** This level is only available to Mozilla and its partners. Certified apps are able to access all the APIs such as telephony and more. An example of certified app is the Firefox OS dialer application.

Usually most applications do not need anything beyond what plain web apps can use but sometimes your app requires privileged access for it to be able to use some API. When we build a privileged app and we send it to the Firefox Marketplace it undergoes a more rigorous approval process (and that is good) than plain apps because it can access more sensitive APIs.

On [the page about the WebAPI on the Mozilla Wiki](https://wiki.mozilla.org/WebAPI) we can see what APIs are implemented on what platforms and what access level is needed to use each API.

![Access levels for the APIs](images/originals/webapi-access.png)

As we can see on the image above, any application can access the *Geolocation API* but only privileged apps can access the *WIFI Information API*.

## The WebAPI

On Firefox OS we need only web technologies to build applications as capable as native apps on other platforms. All the needs for hardware or device access are taken care with the WebAPI. To learn more about the list of available APIs for the current Firefox OS version check out [the WebAPI page on the Mozilla Wiki](https://wiki.mozilla.org/WebAPI).

Lets review some code examples to see how easy those APIs are. Don't take this examples as a full documentation of the WebAPI, they are just a small sample to make you understand how we can access device features using JavaScript.

### Example #1: Making calls

Imagine that you have an application that needs to open the dialer with a phone number already filled in. You can just use the following code:

<<[Sending a phone number to the dialer](code/webapi_samples/dial.js)

This code only opens the dialer app with the number already filled in. The user still needs to tap the dial button to place the call. This kind of API that requires an explicit user action before executing is pretty common and is a good security pattern because requires user interaction before allowing some things to happen. Other APIs that can place calls without user interaction are available for more elevated access levels. Certified apps can place calls without interaction for example. The API used in the code above is available to all apps though.

This API is a Web Activity, to learn more about this type of API check [this article on the Mozilla Blog](https://hacks.mozilla.org/2013/01/introducing-web-activities/). 

### Example #2: Saving a contact

Hypothetical situation number two: Imagine that you have a company intranet and you want to provide a way to transfer a contact from the online intranet address book to the phone address book. You can do that with the Contacts API.

<<[Saving a contact](code/webapi_samples/contact.js)

This API creates an object with the contact data and saves it into the phone address book without requiring user interaction. Because of that this API is only available for *privileged apps*. This pattern where you create an object with a success and an error callback is used in many of the WebAPIs.

To learn more about this API, read [the page about the *Contacts API* on the Mozilla Wiki](https://wiki.mozilla.org/WebAPI/ContactsAPI).

### Example #3: Picking an image from the camera

Very common situation #3: You're building an application that applies fancy filters to pictures, you want to place a button on your app that allows the user to pick a photo from the album or from the camera.

<<[Picking an image](code/webapi_samples/pick.js)

Here we see another example of a [WebActivity](https://hacks.mozilla.org/2013/01/introducing-web-activities/). These activities are available for all application. In this specific sample we're using a *pick* activity and passing it the *MIME Types* of the files that we wish to retrieve. When this code is executed, the system shows a screen to the user asking where he wants to retrieve the image from (camera, gallery, wallpapers). If the user selects an image, the success callback is triggered. If the user cancels the operation, the error callback is executed. On the image below we can see the dialog that is opened asking the user from where he wants to retrieve the photo from:

![Example of the *pick activity*](images/originals/pick_image.png)

## Summary

In this chapter we saw some basic concepts about Firefox OS which are going to be expanded on the next chapters. Now it is about time we get our hands dirty and create an app!


