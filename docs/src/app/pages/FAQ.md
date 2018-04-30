# App Inventor IoT Frequently Asked Questions

Below is a list of frequently asked questions from MIT App Inventor users working with Internet of Things. Don't see your question in the list? You may also ask questions in our <a href="https://groups.google.com/forum/#!forum/mitappinventortest" target="_blank">forum</a>. This page will be updated with new questions and answers from time to time.

* [General](#/faq/faq/general)
* [Companion](#/faq/faq/companion)
* [Bluetooth Low Energy](#/faq/faq/ble)
* [Arduino](#/faq/faq/arduino)
* [BBC micro:bit](#/faq/faq/microbit)
* [LinkIt series boards](#/faq/faq/linkit)
* [MIT App Inventor Codi Bot](#/faq/faq/codibot) 

## <a name="/faq/faq/general"></a>General

### What is IoT?

IoT stands for Internet of Things. It refers to the growing interconnectedness of devices and people. By networking devices in our everyday lives, we can leverage those devices as a means of interacting with the world by sending and receiving data, and by sensing and effecting the environment in which things reside.

### Why would I want to use this?

The Internet of Things allows you to change your relationship with the objects in your everyday life. While there is an increase in "smart" objects (like refrigerators, home heating, and even lighting), most of the time we are only passive users of technology. With MIT App Inventor for IoT, you can have the power to build apps to control Internet of Things enabled devices around you &ndash; decide exactly how you want to interact with the world around you, and have more control over the data you share.

### How can I support MIT App Inventor?

Please participate in the <a href="https://groups.google.com/forum/#!forum/mitappinventortest" target="_blank">forums</a>, and consider a donation to the MIT App Inventor fund via <a href="https://giving.mit.edu/give/to?fundId=3832320" target="_blank">MIT Giving</a>.

### I want my school to use MIT App Inventor. How can I set that up?

For teachers, please see the materials at [http://teach.appinventor.mit.edu/](http://teach.appinventor.mit.edu).

### Can I sign up for any classes or conferences?

We maintain a list of classes and conferences related to MIT App Inventor on our [teach site](http://teach.appinventor.mit.edu/events/).

### How can I get started with MIT App Inventor?

We provide many [tutorials](http://appinventor.mit.edu/explore/ai2/tutorials.html) on our explore website. There is also a <a href="http://www.appinventor.org/book2" target="_blank">free book</a>) available online for your use in learning MIT App Inventor.

### How can I learn more about MIT App Inventor?

Please [read the About Us page](http://appinventor.mit.edu/explore/about-us.html) on our website.

### How much does it cost?

MIT App Inventor is free to use! However, you will need to provide your own IoT hardware and Android device.

### What hardware do I need to get started?

You will need an Android device (phone or tablet) that supports Android 5.0 or higher and has hardware support for Bluetooth 4.0 low energy. You will also need any of our supported Bluetooth low energy devices ([BBC micro:bit](#/microbit/microbitintro) or [Arduino 101](#/arduino101/arduino101intro), [LinkIt series board](#/linkit/linkitintro) and a computer to access the [MIT App Inventor site](http://ai2.appinventor.mit.edu) to build your apps.

### Does IoT have any special hardware requirements?

Our IoT extensions are built around Bluetooth 4.0 low energy. You will need an Android phone or tablet with harrdware for Bluetooth 4.0 or higher, running Android 5.0 (Lollipop) or higher to access the Bluetooth hardware. You will also need to obtain one or more supported peripherals for your BBC micro:bit, Arduino 101 or LinkIt series board.

### What version of Bluetooth do I need?

You will need a device that supports Bluetooth 4.0 or higher. The BluetoothClient component bundled with MIT App Inventor __will not work__, so please download our [Bluetooth 4.0 low energy extension](/assets/resources/edu.mit.appinventor.ble.aix).

### What are extensions?

Extensions are components that are published separately from  the main MIT App Inventor service. This allows extensions to be published by developers other than MIT and to be included or upgraded in projects at your discretion.

### How do I import extensions?

In the Designer view, open the __Extensions__ panel in the component palette. There will be a link entitled `Import Extension` (see below). Clicking on this link will open a file upload/import from URL dialog. Using the file uploader, you can upload an extension previously downloaded to your computer. Using the URL importer, you can enter any of the links to extensions from this site (among others) to import an extension from the web. For more information on the extensions mechanism, <a href="http://ai2.appinventor.mit.edu/reference/other/extensions.html" target="_blank">view the extensions overview document</a>.

<p style="text-align: center;">
![Go to Palette, then Extensions, then click Import Extension](/assets/faq/import_extension.png) ![Select the extension from your computer and click Import](/assets/faq/import_extension2.png)
</p>

### Why are the MIT App Inventor IOT components published as extensions?

We are releasing our Internet of Things components as extensions since they can be upgraded more frequently to address pontential bugs and security issues, and to allow for the release of new extensions as support for new platforms becomes available.

### Do you support ...?

We currently support Arduino 101, micro:bit and LinkIt series boards(Arduino variant). We plan to add support for additional Arduino variants and Raspberry Pi in a future release.

### I don't see the blocks I need for my Arduino/micro:bit/LinkIt.

Check that you have imported the correct extension and dragged an instance of your target device into the designer.

### I didn't find help for my issue. What should I do?

Please refer to the [tutorials](#/teachers/tutorials) and [how tos](#/teachers/howtos). Please join the <a href="https://groups.google.com/forum/#!forum/mitappinventortest" target="_blank">MIT App Inventor forum</a>. You can also refer to <a href="http://appinventor.mit.edu/explore/ai2/support/troubleshooting.html" target="_blank">MIT App Inventor troubleshooting</a>. If you have any further questions, please [contact us](http://appinventor.mit.edu/explore/contact.html).

## <a name="/faq/faq/companion"></a>Companion

### When I load the companion, the app crashes.

Check the version of your companion app. For the ai2-test server, the companion version should be 2.41t2. The version from the Google Play store should be 2.42. You may also <a href="http://ai2.appinventor.mit.edu/companions/MITAI2Companion.apk">download the latest companion</a>.

## <a name="/faq/faq/ble"></a>Bluetooth Low Energy

### Why don't I see my device after scanning for Bluetooth?

If you have other apps running the background on your mobile device that have established a connection to your Bluetooth low energy device, that app may maintain its connection in the background. If you have previously connected with the MIT App Inventor Companion app, you may need to restart and reconnect the app to your MIT App Inventor session. This will free any existing connection between the companion and your Bluetooth low energy device. Lastly, you may need to reset your Bluetooth low energy device. Both the micro:bit and Arduino microcontrollers have clearly marked reset buttons to accomplish this.

### How do I use a Bluetooth device that's not on the supported list?

You can use any device via the Bluetooth low energy extension, but you will need to build additional code around the basic read/write functions provided by the extension.

### I built a MIT App Inventor app to connect my IoT board, but my Android device cannot find my board while scanning. What should I do?

You may need to stop and restart scanning as some Bluetooth chipsets may slowly increase the time between scans to reduce power consumption. Restarting the scanning process may pick up on new devices. If you still do not see your IoT device, consider disconnecting and reconnecting (power cycling) it in case it is stuck in an error state.

## <a name="/faq/faq/arduino"></a>Arduino

### Does the Arduino sketch support Uno, Due, Leonardo, ...?

Currently the Arduino sketch published by the MIT App Inventor team only targets the Arduino 101. We will be adding support for other devices in the Arduino family in the future.

### My board doesn't light up. What should I do?

Please try unplugging and reconnecting your Arduino. Please also check that the USB connection is not loose or broken.

### Uploading the sketch is failing/My Arduino won't connect, what should I do?

There are several reasons that uploading might fail or the board may not connect via Bluetooth. Make sure that the correct board model and port are selected under the "Tools" menu in the Arduino editor. It may also help to press the `RESET` button on the Arduino 101 to clear any error states. Please read the following questions for further diagnosis.

<p style="text-align: center;"><span style="width: 320px;">![Image indicating the location of the reset buttons on either side of the Arduino's USB header](/assets/faq/reset_buttons.png)</span></p>

<p style="font-size: 110%">_I get the message "Error compiling board for Arduino/Genuino Uno" or similar._</p>

This error indicates that the Arduino IDE is targeting the wrong board type during compilation. To target the Arduino 101, select the menu item Tools > Board > Arduino/Genuino 101. For more details, see the [Arduino 101 setup instructions](/assets/howtos/MIT_App_Inventor_IoT_Setup.pdf).

<p style="font-size: 110%">_I get the message "An error occurred while uploading the sketch"_</p>

Occassionally the Arduino board may stop responding to commands from your computer during programming. To fix this issue, press the `MASTER RESET` button on the Arduino 101 and restart the upload process by clicking the "Upload" button in the Arduino editor.

Another potential cause of this error is a change in the port the Arduino is connected to. Check that you have selected the right port and board type via the Tools > Port menu in the Arduino editor.

<p style="font-size: 110%">_I get the message "Your Arduino firmware is out of date" or "Your Arduino firmware does not match the expected version"_</p>

You may have downloaded and installed an incorrect version of the Arduino 101 firmware. The sketch currently works with firmware version 1.0.7. Please see the instructions on pages 5-7 of the [Arduino 101 setup instructions](/assets/howtos/MIT_App_Inventor_IoT_Setup.pdf).

<p style="font-size: 110%">_When I upload my sketch, the Arduino editor gives me the message "BLE firmware version is not in sync with CurieBLE library !!"_</p>

This message indicates that you have downloaded the 1.0.7 libraries for Arduino 101, but your Arduino 101 is still running the old firmware. You will need to burn the appropriate bootloader to your Arduino using the instructions on pages 5-7 of the [Arduino 101 setup instructions](/assets/howtos/MIT_App_Inventor_IoT_Setup.pdf).

### How do I check the firmware for my Arduino 101?

During upload the Arduino editor will check the firmware of your Arduino to confirm that it matches the expected version. If it does not, you will receive instructions indicating how to reprogram your Arduino to use the correct firmware.

<p style="text-align: center;">
<span style="max-width: 569px; width: 100%;">
![If your firmware is out of date, you will see an error in the Arduino editor](/assets/faq/firmware_mismatch.png)
</span>
</p>

### How do I change the firmware on my Arduino 101?

Please follow the instructions on pages 5-7 of the [Arduino 101 setup instructions](/assets/howtos/MIT_App_Inventor_IoT_Setup.pdf) to install the appropriate firmware on your Arduino 101.

### I don't see my Arduino when I scan for Bluetooth devices with my app. Help!

If you have previously connected to the Arduino using an app on your phone or the MIT App Inventor companion, the Arduino's connection might have not been released by the Android device. Restart the Arduino and/or re-push the code to the Arduino.

If you have never connected to the device, check that it is broadcasting using a Bluetooth low energy scanner app. If you still do not see the device, it may be because you are using an incorrect version of the firmware. The Arduino sketch is only supported for firmware 1.0.7 at this time. See the previous question about how to switch to the correct firmware version on your Arduino 101.

### How do I rename my Arduino?

When you open the sketch file `AIM-for-Things-Arduino101.ino` in the Arduino editor, you will find this line of code:

```c
#define NAME "AppInventor"  // no more than 11 characters
```

Changing the name in quotes from `AppInventor` to another name and then uploading the changes to the Arduino will cause the Arduino to advertise under the new name. Due to limitations in the Bluetooth low energy protocol, names are limited to 11 characters or less.

### When I run the Arduino sketch, I get ".hh: No Such file or directory"
This error, referring to Accelerometer.hh or another file that ends in .hh, probably means that your Arduino IDE is out of date. Please download the [latest Arduino IDE](https://www.arduino.cc/en/Main/Software) and try again. At the time of writing this, the current version is 1.8.3.

### The sensors/outputs on my Arduino are behaving oddly/are very jittery.

Some hardware require 5V input rather than 3.3V. If you are using the Grove shield, make sure you have the Arduino's power input set to 5V. The <a href="#/arduino101/arduinorgblcd">RGB LCD</a>, for example, requires 5V. Without it, there is not enough power to drive the liquid crystal display and characters will not appear.

### When I connect to the Arduino over Bluetooth, the app crashes.

Check that you have the right pin set in the property tab for the device in the designer.

### When I try to read or write services on the Arduino nothing happens.

1. Make sure that in the sketch you have set the appropriate service to `ENABLED`.
2. Check that you've set the right `Pin` in the designer for services that require a pin.

### I am not receiving any readings from my attached sensor, or my RGB LCD is not showing text.

Many sensors/displays require 5 volts for their power. If you are using the Grove shield, verify that the voltage selector switch is set to 5V instead of 3.3V (see image).

![Move the voltage selector on the Grove Shield from 3.3V to 5V to increase the power.](/assets/faq/voltage_select.png)

### I still am not receiving data for the proximity sensor, even after checking that the voltage switch is set to 5V.

The proximity sensors provided by Seeed Studios are three-pin sensors. Unfortunately, the signal pin (yellow wire) is not attached to the correct socket on the 4-pin header that connects to Grove Shield. Therefore, if you attach the proximity sensor to A0, the reading will actually be received on A1 (A1 on A2, and so forth). Increase by one the pin number you provide to the Arduino101ProximitySensor component's Pin property to correct for this issue.

### How can I get more support for my Arduino?

Please see the resources published by Arduino AG [online](https://www.arduino.cc/en/Main/FAQ).

## <a name="/faq/faq/microbit"></a>BBC micro:bit

### When I scan for Bluetooth devices I do not see my micro:bit. Help!

You may not have paired your phone or tablet with the micro:bit. Your micro:bit will only be listed if pairing has occurred. See below for how to pair your micro:bit with your phone or tablet.

### Why do I need to pair my micro:bit with my phone/tablet?

The micro:bit uses a secure communication channel between it and your mobile device. The pairing code is used to establish this secure channel and protects any data being transferred between your mobile device and the micro:bit.

### How do I pair my micro:bit with my phone/tablet?

To pair the micro:bit with your mobile device, you will need to:

1. Press and hold the A and B buttons, and while holding the buttons press and release the RESET button.
2. After restarting, the micro:bit's LED matrix will show the message `PAIRING MODE`.
3. On your mobile device, you will need to go to the Settings application and open the Bluetooth section. You should see your micro:bit listed for pairing.
4. Select your micro:bit in the list of available Bluetooth devices.
5. After selecting the micro:bit from the list on the mobile device, your micro:bit will alternate between an arrow (&larr;) and the letter A to indicate it has received a pairing request.
6. Push the A button to accept the pairing request.
7. The micro:bit will display a pairing code consisting of six numbers, one at a time. Type this code into your mobile device when prompted for the pairing code.
8. Accept the pairing code on your mobile device. Your micro:bit will then show a checkmark/tick (&check;) to indicate success.

### How can I get more support for my micro:bit?

Please see the resources published by the micro:bit Foundation [online](https://support.microbit.org/support/home).

## <a name="/faq/faq/linkit"></a>LinkIt series boards

### What are LinkIt series boards ?

LinkIt series boards refer to [the IoT platforms of MediaTek Labs](https://labs.mediatek.com/en/platform/overview). For now, MIT App Inventor supports [LinkIt Smart 7688/7688 Duo](#/linkit/linkit7688)(Wi-Fi) and [LinkIt 7697](#/linkit/linkit7697)(Wi-Fi/Bluetooth LE).  

### What's the difference between LinkIt series boards and Arduino?

LinkIt 7697 have two software development environments: [LinkIt SDK for RTOS and Arduino IDE](https://docs.labs.mediatek.com/resource/linkit7697-arduino/en). On the other hand, LinkIt Smart 7688 Duo has an on-board ATmega32U4 MCU, users can program it as an ordinary Arduino boards in Arduino IDE or develop Python, Node.js and native C in its OpenWrt environment.

### How can I make sure I am ready to upload sketch to LinkIt 7697?

Please follow [LinkIt LED Control tutorial](/assets/howtos/MIT_App_Inventor_7697_LED.pdf) to install Arduino IDE and LinkIt SDK/driver.

### Where can I check the Bluetooth address of My LinkIt 7697?

After the environment is ready, upload SimplePeripheral.ino under /File/Examples/LBLE directory. Open Arduino serial monitor and check the Bluetooth address as below.

```c
Serial.print(LBLE.getDeviceAddress()); //show Bluetooth address on Arduino serial monitor
```
![show LinkIt 7697 Bluetooth address on Arduino serial monitor.](/assets/faq/linkit_ble_addr.png)

### How do I rename my LinkIt 7697 to be searched throught Bluetooth?

When you open [this sketch](/assets/samples/MT7697.zip) in the Arduino editor, you will find `constants.cpp` and look for this line of code:

```c
static const char DEVICE_NAME[] = "MT7697 for AI2";
```

Changing the name in quotes from `MT7697 for AI2` to another name and then uploading the changes to the LinkIt 7697 will cause it to advertise under the new name. Due to limitations in the Bluetooth low energy protocol.

## <a name="/faq/faq/codibot"></a>MIT App Inventor Codi Bot

### What is MIT App Inventor Codi Bot?

The MIT App Inventor Codi Bot is a hands-on IoT kit. Our adorable mascot can be controlled via App Inventor through Bluetooth communication. This educational kit is easy to use and guides users through the whole process of development, from building a robot to programming it.

### Can I replace LinkIt 7697 with other Bluetooth dev boards?

From a technical view, of course you can replace the LinkIt 7697 with other Bluetooth Low Energy dev boards like the Arduino 101. But since MIT App Inventor Codi Bot is designed with [LinkIt 7697](#/linkit/linkit7697) and <a href="https://www.robotkingdom.com.tw/product/linkit-7697%E6%A9%9F%E5%99%A8%E4%BA%BA%E6%93%B4%E5%85%85%E6%9D%BF-robot-shield-for-linkit-7697/" target="_blank">Robot Shield for LinkIt 7697 V2.0</a>, other boards may not fit into Codi Bot's body.

### Where to buy a kit?

<a href="http://www.robotkingdom.com.tw" target="_blank">Purchase link</a>

### How can I get more support for LinkIt 7697?

Please see the resources on <a href="https://en.forum.labs.mediatek.com/" target="_blank">MediaTek Labs Forum</a>. 
