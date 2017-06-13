# App Inventor IoT Frequently Asked Questions (Draft)

Below is a list of frequently asked questions from MIT App Inventor users working with Internet of Things. Don't see your question in the list? You may also ask questions in our <a href="https://groups.google.com/forum/#!forum/mitappinventortest" target="_blank">forum</a>. This page will be updated with new questions and answers from time to time.

* [General](#/faq/faq/general)
* [Companion](#/faq/faq/companion)
* [Bluetooth Low Energy](#/faq/faq/ble)
* [Arduino](#/faq/faq/arduino)
* [BBC micro:bit](#/faq/faq/microbit)

## <a name="/faq/faq/general"></a>General

### What is IoT?

IoT stands for Internet of Things. It refers to the growing interconnectedness of devices and people.

### Why would I want to use this?

The MIT App Inventor for IoT framework allows you to connect to external devices via your App Inventor apps.

### How can I support MIT App Inventor?

Please participate in the forums, and consider a donation to the foundation via <a href="https://giving.mit.edu/give/to?fundId=3832320" target="_blank">MIT Giving</a>.

### I want my school to use MIT App Inventor. How can I set that up?

For teachers, please see the materials at [http://teach.appinventor.mit.edu/](http://teach.appinventor.mit.edu).

### Can I sign up for any classes or conferences?

We maintain a list of classes and conferences related to MIT App Inventor on our [teach site](http://teach.appinventor.mit.edu/events/).

### How can I get started with MIT App Inventor?

We provide many [tutorials](http://appinventor.mit.edu/explore/ai2/tutorials.html) on our explore website. There is also a <a href="http://www.appinventor.org/book2" target="_blank">free book</a>) available online for your use in learning MIT App Inventor.

### How can I learn more about MIT App Inventor?

Please the [about us](http://appinventor.mit.edu/explore/about-us.html) page on our explore website.

### How much does it cost?

MIT App Inventor is free to use! However, you will need to provide your own IoT hardware and Android device.

### What hardware do I need to get started?

You will need an Android device (phone or tablet) that supports Android 5.0 or higher and has hardware support for Bluetooth 4.0 low energy. You will also need any of our supported Bluetooth low energy devices ([BBC micro:bit](https://microbit.org) or [Arduino 101](https://www.arduino.cc)) and a computer to access the [MIT App Inventor site](http://ai2.appinventor.mit.edu) to build your apps.

### Does IoT have any special hardware requirements?

Our IoT extensions are built around Bluetooth 4.0 low energy. You will need an Android phone or tablet with harrdware for Bluetooth 4.0 or higher running Android 5.0 (Lollipop) or higher to access the Bluetooth hardware. You will also need to obtain one or more supported peripherals for you micro:bit or Arduino 101.

### What version of Bluetooth do I need?

You will need a device that supports Bluetooth 4.0 or higher. The BluetoothClient component bundled with MIT App Inventor __will not work__, so please download our [Bluetooth 4.0 low energy extension](/assets/resources/edu.mit.appinventor.ble.aix).

### What are extensions?

Extensions are components that are published separately from  the main MIT App Inventor service. This allows extensions to be published by developers other than MIT and to be included or upgraded in projects at your discretion.

### How do I import extensions?

In the Designer view, open the __Extensions__ panel in the component palette. There will be a link `Import Extension`. Clicking on this link will open a file upload/import from URL dialog. Using the file uploader, you can upload an extension previously downloaded to your computer. Using the URL importer, you can enter any of the links to extensions from this site (among others) to import an extension from the web.

### Why are the MIT App Inventor IOT components published as extensions?

We are releasing our Internet of Things components as extensions since can be upgraded more frequently to address pontential bugs and security issues, and to allow for the release of new extensions to be released as support for new platforms becomes available.

### Do you support ...?

We currently support Arduino 101 and micro:bit. We plan to add support for additional Arduino variants and Raspberry Pi in a future release.

### I don't see the blocks I need for my Arduino/micro:bit.

Check that you have imported the correct extension and dragged an instance of your target device into the designer.

### I didn't find help for my issue. What should I do?

Please refer to the [tutorials](#/teachers/tutorials) and [How To's](#/teachers/howtos). Please join the <a href="https://groups.google.com/forum/#!forum/mitappinventortest" target="_blank">MIT App Inventor forum</a>. You can also refer to <a href="http://appinventor.mit.edu/explore/ai2/support/troubleshooting.html" target="_blank">MIT App Inventor troubleshooting</a>. If you have any further questions, please [contact us](http://appinventor.mit.edu/explore/contact.html).

## <a name="/faq/faq/companion"></a>Companion

### When I load the companion, the app crashes.

Check the version of your companion app. For the ai2-test server, the companion version should be 2.41t2. The version from the Google Play store should be 2.42 (not yet released).

## <a name="/faq/faq/ble"></a>Bluetooth Low Energy

### Why don't I see my device after scanning for Bluetooth?

If you have other apps running the background on your mobile device that have established a connection to your Bluetooth low energy device, that app may maintain its connection in the background. If you have previously connected with the MIT App Inventor Companion app, you may need to restart and reconnect the app to your MIT App Inventor session. This will free any existing connection between the companion and your Bluetooth low energy device. Lastly, you may need to reset your Bluetooth low energy device. Both the micro:bit and Arduino microcontrollers have clearly marked reset buttons to accomplish this.

### How do I use a Bluetooth device that's not on the supported list?

You can use any device via the Bluetooth low energy extension, but you will need to build additional code around the basic read/write functions provided by the extension.

### I built a MIT App Inventor app to connect my IoT board, but my Android device cannot find my board while scanning. What should I do?

You may need to stop and restart scanning as some Bluetooth chipsets may back off exponentially during scanning to reduce power consumption. Restarting the scanning process may pick up on new devices. If you still do not see your IoT device, consider power cycling it in case it is stuck in an error state.

## <a name="/faq/faq/arduino"></a>Arduino

### Does the Arduino sketch support Uno, Due, Leonardo, ...?

Currently the Arduino sketch published by the MIT App Inventor team only targets the Arduino 101. Other devices in the Arduino family will have support added in the future.

### My board doesn't light up. What should I do?

Please try unplugging and reconnecting your Arduino. Please also check that the USB connection is not loose or broken.

### Uploading the sketch is failing/My Arduino won't connect, what should I do?

There are several reasons that uploading might fail or the board may not connect via Bluetooth. Make sure that the correct board model and port are selected under the "Tools" menu in the Arduino editor. It may also help to press the `RESET` button on the Arduino 101 to clear any error states. Please see the following questions to help diagnose the issue further.

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

### How do I change the firmware on my Arduino 101?

Please follow the instructions on pages 5-7 of the [Arduino 101 setup instructions](/assets/howtos/MIT_App_Inventor_IoT_Setup.pdf) to install the appropriate firmware on your Arduino 101.

### I don't see my Arduino when I scan for Bluetooth devices with my app. Help!

If you have previously connected to the Arduino using an app on your phone or the MIT App Inventor companion, the Arduino's connection might have not been released by the Android device, restart Arduino and/or re-push code to the Arduino.

If you have never connected to the device, check that it is broadcasting using a Bluetooth low energy scanner app. If you still do not see the device, it may be because you are using an incorrect firmware. The Arduino sketch does not support the most recent 2.0.2 firmware and the Arduino will lock up if it is used. See the previous question about how to change the firmware on your Arduino 101.

### How do I rename my Arduino?

At the top of the sketch file when opened in the Arduino editor is a line:

```c
#define NAME "AppInventor"  // no more than 11 characters
```

Changing the name in quotes from `AppInventor` to another name and then uploading the changes to the Arduino will cause the Arduino to advertise under the new name. Due to limitations in the Bluetooth low energy protocol, names are limited to 11 characters or less.

### When I run the Arduino sketch, I get ".hh: No Such file or directory"
This error, referring to Accelerometer.hh or another file that ends in .hh, probably means that your Arduino IDE is out of date. Please download the [latest Arduino IDE](https://www.arduino.cc/en/Main/Software) and try again. At time of writing this, the current version is 1.8.3.

### The sensors/outputs on my Arduino are behaving oddly/are very jittery.

Some hardware require 5V input rather than 3.3V. If you are using the Grove shield, make sure you have the Arduino's power input set to 5V. The <a href="#/arduino101/arduinorgblcd">RGB LCD</a>, for example, requires 5V otherwise there is not enough power to drive the liquid crystal display and characters will not appear.

### When I connect to the Arduino over Bluetooth, the app crashes.

Check that you have the right pin set in the property tab for the device in the designer.

### When I try to read or write services on the Arduino nothing happens.

1. Make sure that in the sketch you have set the appropriate service to `ENABLED`.
2. Check that you've set the right `Pin` in the designer for services that require a pin.

### How can I get more support for my Arduino?

Please see the resources published by Arduino AG [online](https://www.arduino.cc/en/Main/FAQ).

## <a name="/faq/faq/microbit"></a>BBC micro:bit

### When I scan for Bluetooth devices I do not see my micro:bit. Help!

You may not have paired your phone or tablet with the micro:bit. Your micro:bit will only be listed if pairing has occurred.

### Why do I need to pair my micro:bit with my phone/tablet?

The micro:bit uses a secure communication channel between it and your mobile device. The pairing code is used to establish this secure channel and protects any data being transferred between your mobile device and the micro:bit.

### How do I pair my micro:bit with my phone/tablet?

Tou pair the micro:bit with your mobile device, you will need to:

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
