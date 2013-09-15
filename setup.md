# Setup For Firefox OS App Development {#setup}

## The Gecko Engine
Browsers use different engines for rendering web pages: Google Chrome and Opera use Blink (a fork of WebKit), Internet Explorer uses Trident, while Safari uses WebKit. Mozilla has its own engine, called Gecko which is used in Firefox desktop, Firefox for Android, and Firefox OS. As these products use the same engine, it is possible to develop for Firefox OS using the Firefox desktop browser (but with some caveats[^engines]).

[^engines]: Although the same engine is used for all Mozilla products, the version of the engine in Firefox OS is generally behind that of the desktop browser. This is because the release cycle of Firefox OS is currently slower than that of the Desktop browser. In practice, this will mean that some features may not be available (or work as expected) when you try them out in Firefox OS - so always make sure you test your applications on a device that runs Firefox OS. Also, be mindful that users might also be on different versions of Firefox OS, so they might not have all the bleeding edge features. Be sure to always provide a fallback in case where some feature is unavailable.

## What applications do you need?

To develop and test apps made for Firefox OS you will need:

 * A recent version of the [Firefox Browser](http://getfirefox.com).
 * The [Firefox OS Simulator](https://addons.mozilla.org/en-US/firefox/addon/firefox-os-simulator/). 
 * A text editor for programming[^editors].
 
[^editors]: There are many good editors out there with different levels of complexity and features. A very popular one that I recommend for those that don't have a favorite one is [SublimeText](http://sublimetext.com/). Personally, I use [WebStorm](http://www.jetbrains.com/webstorm/) which is a complete IDE for web app creation.
  
## Installing the Firefox OS Simulator

After installing Firefox, the next step is the installation of the Firefox OS simulator that will be used to test our applications. With Firefox installed and running, go to the **Tools** menu and select **Add-ons**.

![*Tools* menu with *Add-ons** menu selected](images/originals/tools.png)

Using the search box on the top right corner, search for **Firefox OS Simulator** and install the add-on by clicking the install button.

![Add-on manager showing the simulator add-on](images/originals/addons-simulator.png)

After the installation of the add-on, you will be able to access the simulator by going to the menu **Tools -> Web Developer -> Firefox OS Simulator**. 

![Where you can find the simulator after is installed](images/originals/tools-web-developer-simulator.png)

Alternatively, you can navigate to the [Firefox OS Simulator](https://addons.mozilla.org/en-US/firefox/addon/firefox-os-simulator/) addon page, and download the simulator from there. 

## Summary

In this chapter we learned that all we need to develop Firefox OS apps is the Firefox browser and the Firefox OS Simulator (and a good text editor).

Now that we have setup all the tools we need, lets learn some basic concepts before we build our first app.