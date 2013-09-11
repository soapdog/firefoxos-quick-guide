# The Firefox OS Simulator {#simulator}

![Firefox OS Simulator Dashboard](images/originals/simulator-dashboard.png)

We've installed the Firefox OS Simulator on [the chapter about preparing the environment](#setup) and we've used it on the [chapter about building our first app](#firstapp). Now we're going to take a deeper look into the simulator features and learn how to do the most common tasks.

To know more about it visit [the MDN page about the simulator](https://developer.mozilla.org/en-US/docs/Tools/Firefox_OS_Simulator).

## Adding Apps

You can add both hosted and packaged apps to the simulator. Lets see how to add each type of app.

### Adding packaged apps

I am focusing on packaged apps on this book mostly because I think they are easier to work with. Because of that you already saw how to add packaged apps to the simulator during [our first app creation](#firstapp) but we're going to recap this so that the process becomes more clear.

To add a new packaged application click the **Add Directory** button on the **Simulator Dashboard** as shown in the screen shot below.

![Showing the *Add Directory* button that adds a packaged app to the simulator](images/originals/simulator-add-directory.png)

When you click on the button highlighted on the image, Firefox opens a file selection dialog. You should browse your hard drive and select the **app manifest file** for the application that you want to add to the simulator. If everything happens correctly, the application will be added and the simulator will launch with your app running. If there is anything wrong with your manifest then an error report will be shown on the dashboard. 

![Example of an invalid manifest](images/originals/simulator-invalid-manifest.png)

Whenever you update your application you should click **Refresh** to update the version of the app on the simulator (you can also press CMD/CTRL+R on the simulator window). 

### Adding hosted apps

If you're building a hosted app then you should test it by using a web server. Do not try to use the method described above for hosted apps because you may miss some errors that will only happen on a hosted environment such as serving the manifest with the wrong *MIME type*.

Most of the hosted apps are not applications built exclusive for Firefox OS but responsive design based websites that are able to adapt themselves to different devices and resolutions. These web apps usually have a complex backend that needs to be in-place for the application to work and thats why you need to test the app using a real web server running your backend stuff. To add your app, fill the URL of your application in the text entry box on the top and click the **Add URL** button.

![Adding a hosted app to the simulator](images/originals/simulator-add-url.png)

After clicking the button, the manifest is verified and if it is correct the application is added and the simulator is launched with your application running. Like when we're adding packaged apps, if something wrong happens with in the manifest you will see a report.

Whenever you update your application you should click **Refresh** to update the version of the app on the simulator (you can also press CMD/CTRL+R on the simulator window) (yes, this is a copy and paste from the same paragraph from the previous section that is here just for the sake of consistency).

## Debugging

After the application is added to the simulator we're able to debug it by clicking the **Connect** button next to the application listing on the dashboard. This will launch the simulator with your application running and the **JavaScript Console** open and connected to your app.

![What button to press](images/originals/simulator-press-connect.png)

After pressing this button you will see a screen like this:

![Developer Tools connected to the app running on the simulator](images/originals/simulator-connected.png)

With the tools connected to your app you can test your JavaScript, debug your DOM, edit styles, etc. Like those startup guys like to say: *pivot until your app is good*.

Once your app is running well on the simulator is time to test on a real device.

## Pushing apps to the device

Nothing replaces testing on a real device. On the simulator you test things by using a mouse and clicking on a computer screen, on a real device you use your fingers on a touchscreen, its a very different experience. As an example why this type of testing matters, let me tell you a brief story: Some years ago I was building a puzzle game not unlike bejeweled with Raphael Eckhardt (the designer who created the cover of this book). This game involved dragging and dropping some pieces on a board and was working pretty well on the simulator but when we tested on the phone we realized our pieces were too small and when placing a hand over the screen the board would vanish behind the hand and the dragged piece was smaller than a finger tip, in summary, our UX sucked very bad. That happened because we're kept trying things only on the simulator with a mouse that used a tiny cursor. When we decided to try with our fatter-than-a-cursor fingers we realized we need to rework our UI. And thats why you should test on real devices and test often.

You can buy a developer preview phone running Firefox OS on the [Geeksphone Shop](http://shop.geeksphone.com/en/). I recommend using a [Geeksphone Keon](http://www.geeksphone.com/) because this device has similar specs to the devices that are being launched. You can also buy a device targeted at consumers if you happen to live in one of the countries where they are already available. A third way is that you can replace Android with Firefox OS in some devices (some specific devices only, chance of bricking, don't blame me) but I don't recommend this unless you're a power user and like to spend a lot of time hacking.

If you have a Firefox OS device (and have any needed drivers installed) then you can push apps directly from the simulator to the device if the device is connected to the computer. When the simulator detects that you plugged a Firefox OS phone it displays a notice saying **Device Connected**.

![Device Connected!](images/originals/simulator-device-connected.png)

If your phone is connected (and detected) the simulator will add a new button next to **Refresh** and **Connect** called **Push**. When you press this button, a **permission request dialog** appears on the device screen asking for confirmation to install the pushed app.

![Which button to press to push apps to the connected device](images/originals/simulator-press-push.png)

And below we can see the permission request screen.

![Not the best picture in the world but shows the permission screen (sorry for the face it was 4:25 AM)](images/originals/simulator-remote-push.jpg)

With the application running on the device you can use *remote debugging* to connect a JavaScript console and debug the app.

## Summary

In summary the Firefox OS Simulator Rocks!!! Besides felling awesome and empowered, by this point in the book you already have a pretty good grasp on how the Firefox OS app development workflow works and thats why on the next chapter we're going to show how to distribute your apps.