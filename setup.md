# Setup For Firefox OS App Development {#setup}

To develop and test apps made for Firefox OS you need only a recent version of the Firefox Browser, the add-on called Firefox OS Simulator and a good text editor for programming[^editors].

[^editors]: There are many good editors with different levels of complexity and features. A very popular one that I recommend for those that don't have a favorite one is [SublimeText](http://sublimetext.com/). Personally, I use [WebStorm](http://www.jetbrains.com/webstorm/) which is a complete IDE for web app creation.

## Getting Firefox

Different browsers have different engines for rendering web pages and for executing JavaScript. Google Chrome and Opera use an engine called Blink (a fork of WebKit), Safari uses WebKit and Firefox has an engine called Gecko that is used on the Firefox desktop browser, Firefox for android browser and Firefox OS. Thats why using Firefox desktop browser is the way to go for developing for Firefox OS, they use the same engine.

Another reason is that Mozilla ships a Firefox OS Simulator as an Firefox add-on thus requiring Firefox desktop browser to work.

The current stable version of Firefox may be [downloaded here](http://getfirefox.com). Just follow the instructions there on how to install it on your machine.

## Installing the Firefox OS Simulator

After installing Firefox, the next step is the installation of the Firefox OS simulator that will be used to test our applications. With Firefox installed and running, go to the **Tools** menu and select the **Add-ons** as you can see on the image below:

![*Tools* menu with *Add-ons** menu selected](images/originals/tools.png)

Using the search box on the top right corner, search for **Firefox OS Simulator** and install the add-on by clicking the install button.

![Add-on manager showing the simulator add-on](images/originals/addons-simulator.png)

After the installation of the add-on, you will be able to access the simulator by going to the menu **Tools -> Web Developer -> Firefox OS Simulator**. 

![Where you can find the simulator after is installed](images/originals/tools-web-developer-simulator.png)

## Summary

In this chapter we learned that all we need to develop Firefox OS apps is the Firefox browser and the Firefox OS Simulator (and a good editor).

Now that we have setup all the tools we need, lets learn some basic concepts before we build our first app.