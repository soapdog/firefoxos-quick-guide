# Introduction {#introduction}

## The Firefox OS

![Firefox OS](images/originals/firefox_os_simulator.png)

[Firefox OS](http://www.mozilla.org/firefox/os/) is a new mobile platform developed by [Mozilla](http://mozilla.org) and its partners. Devices running Firefox OS are already available in many countries and will reach even more countries by the end of this year.

Targeted at developing markets, Firefox OS has the mission to bring the next million people online. To achieve this, Firefox OS devices are built to serve as a *great first smartphone* along with competitive prices. Those devices are not to be compared with high-end smartphones such as the Apple iPhone 5 and Samsung Galaxy S4, they are built to be an alternative to feature phones so that people using said devices are able to upgrade to a Firefox OS one at an affordable cost and receive the *full smartphone experience*.

Unfortunately in developing markets such as Brasil and Colombia smartphones with a good performance are too expensive for the average worker. People are able to buy cheap phones but the platforms used in these phones are being built with high-end devices in mind and the experience in such cheap devices tend to be horrible.

Another important factor when we speak about Firefox OS is that the current mainstream mobile operating systems are little closed proprietary islands where the vendor has the privilege to force his way on the developers and users regardless of their wishes (remember when Apple tried banning languages other than Objective-C from the iTunes App Store?). In those systems you can only distribute your apps on authorized channels and the vendor usually keeps a part of all the money that flows thru the device.

Besides locking the developers to authorized distribution channels, these systems lock you to their own development toolkits. If you want to build a native app for both iOS and Android using the official toolkits you will need to code one app using Objective-C and another with Java and will reuse very little between projects (maybe reuse some graphical assets). That kind of effort requires that the developer learns two languages and build the same software twice. Firefox OS brings a new idea to the mobile world by using HTML5 as the native development system. HTML5 is usually a marketing term used to mean the collection of technologies known as HTML 5, CSS 3 and JavaScript which are all open and free standards used by the major web browsers to render web applications. By leveraging HTML5, Firefox OS is already open to millions of web developers and apps built for the system are easier to port to another platforms by using wrappers such as [Phonegap](http://phonegap.com).

## The Platform That HTML5 Deserves

The web is everywhere. Its on your computer, mobile phone, smart TV and even in your video game. The programming language of the web, JavaScript, is one of the most popular languages on the planet. When people talk about HTML5 they usually mean the collection of three technologies known as HTML5, CSS 3 and JavaScript. HTML 5 simplifies HTML and expands its features when compared to XHTML 1.0 and HTML 4.0. CSS 3 has lots of new features that make it a lot easier to create beautiful layouts and animations. The current implementation of JavaScript is a fantastic language that is useful for both beginners and seasoned developers.

Firefox OS is basically an extension of the mobile web where HTML5 is the main technology. By making HTML5 a first class citizen, Mozilla opens its platform for millions of web developers. While other browser vendors implement HTML5 in their mobile offerings, Firefox OS goes beyond that by offering a collection of APIs to access the underlining hardware and system using JavaScript, these APIs are collectively known as WebAPI.

## Accessing The Hardware Using The WebAPI

Some earlier platforms also tried to create operating systems that used web technologies for app creation. For example, when the iPhone was introduced to the world, the only way to create apps was using web technologies but those apps had no hardware or device access thus apps *based only on web technologies* became second class citizens unable to compete with native apps in that system.

When we say *hardware access* we actually mean device access. We're talking about things such as accessing phone address book, sending SMS, accessing the camera and picture albums. On Firefox OS, thanks to the collection of APIs known as [WebAPI](https://wiki.mozilla.org/WebAPI), the developer has access to all those features using nothing but web technologies. 

Another earlier platform, WebOS, also offered hardware access via JavaScript but never tried to standardize its APIS. Mozilla is working with the W3C and other stakeholders to make sure that the WebAPIs are a standard and that other vendors are able to adopt them. As these APIs are implemented by other vendors, your apps will require less and less changes to work across different platforms.

The WebAPI is not being implemented only for Firefox OS devices, Mozilla is implementing it for the other platforms that the Firefox OS browser runs such as the desktop and android. This way, you can use your *open web app* in Firefox OS, Firefox for the desktop and Firefox for Android.

## Freedom to Develop and Distribute

Like everything that Mozilla does, Firefox OS is developed in the open and is free. All development can be followed on [Mozilla B2G repository](https://github.com/mozilla-b2g/B2G). On Firefox OS you have the freedom to follow and contribute with the development of the system and you also have the freedom to distribute your applications on your own channels or on [The Firefox Marketplace](https://marketplace.firefox.com/).

The main idea is that you're not locked to Mozilla for anything. If you want to pick the source code for the system and change it for your own needs, just do it. If you need to build apps for internal use on your company or if you want to distribute your creations only on your own web site, you're free to do it. Usually, in other platforms you're locked into the official app store as the only channel to distribute your apps. Firefox OS also has an official market called Firefox Marketplace which has an approval process but you're free to distribute your app outside this store if you want. Like in the web where you can host your web site anywhere you want, on Firefox OS you can do the same with your applications. 

## Summary

HTML 5 is here to stay and will only get better. Firefox OS is the new open mobile operating system by Mozilla totally based on web technologies. This system is built on the open and offers a robust HTML5 implementation that goes beyond the other platforms by offering the WebAPI which are a collection of *hardware access APIs using JavaScript*. These new APIs are being standardized and are available for other vendors to adopt.

On the next chapter we'll see what we need to develop apps for Firefox OS. Let move on and soon we'll have a running app.