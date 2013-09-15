# Setup For Firefox OS App Development {#setup}

To develop and test apps made for Firefox OS you need only a recent version of the Firefox Browser, the add-on called "Firefox OS Simulator" and a good text editor for programming[^editors].

[^editors]: There are many good editors out there with different levels of complexity and features. A very popular one that I recommend for those that don't have a favorite one is [SublimeText](http://sublimetext.com/). Personally, I use [WebStorm](http://www.jetbrains.com/webstorm/) which is a complete IDE for web app creation.

## Getting Firefox

Different desktop browsers have different engines for rendering web pages: Google Chrome and Opera use Blink (a fork of WebKit), Internet Explorer uses Trident, while Safari uses WebKit. Mozilla has its own engine, called Gecko which is used in Firefox desktop, Firefox for Android, and Firefox OS. As these products use the same engine, it is possible to develop for Firefox OS using the Firefox desktop browser.  

Another reason is that Mozilla ships a Firefox OS Simulator as a Firefox add-on.

The current stable version of Firefox may be [downloaded here](http://getfirefox.com). Just follow the instructions there on how to install it on your machine.

## Installing the Firefox OS Simulator

After installing Firefox, the next step is the installation of the Firefox OS simulator that will be used to test our applications. With Firefox installed and running, go to the **Tools** menu and select **Add-ons**.

![*Tools* menu with *Add-ons** menu selected](images/originals/tools.png)

Using the search box on the top right corner, search for **Firefox OS Simulator** and install the add-on by clicking the install button.

![Add-on manager showing the simulator add-on](images/originals/addons-simulator.png)

After the installation of the add-on, you will be able to access the simulator by going to the menu **Tools -> Web Developer -> Firefox OS Simulator**. 

![Where you can find the simulator after is installed](images/originals/tools-web-developer-simulator.png)

## Summary

In this chapter we learned that all we need to develop Firefox OS apps is the Firefox browser and the Firefox OS Simulator (and a good editor).

Now that we have setup all the tools we need, lets learn some basic concepts before we build our first app.