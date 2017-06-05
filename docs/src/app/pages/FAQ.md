# App Inventor IoT Frequently Asked Questions (Draft)

Below is a list of frequently asked questions from MIT App Inventor users working with Internet of Things. Don't see your question in the list? You may also ask questions in our [forum](https://groups.google.com/forum/#!forum/mitappinventortest). This page will be updated with new questions and answers from time to time.

* [General](#/faq/faq/general)
* [Companion](#/faq/faq/companion)
* [Bluetooth Low Energy](#/faq/faq/ble)
* [Arduino](#/faq/faq/arduino)
* [Micro:bit](#/faq/faq/microbit)

## <a name="/faq/faq/general"></a>General

### What are extensions?

Extensions are components that are published separately from  the main MIT App Inventor service. This allows extensions to be published by developers other than MIT and to be included or upgraded in projects at your discretion.

### How do I import extensions?

In the Designer view, open the __Extensions__ panel in the component palette. There will be a link `Import Extension`. Clicking on this link will open a file upload/import from URL dialog. Using the file uploader, you can upload an extension previously downloaded to your computer. Using the URL importer, you can enter any of the links to extensions from this site (among others) to import an extension from the web.

### Why are the MIT App Inventor IOT components published as extensions?

We are releasing our Internet of Things components as extensions since can be upgraded more frequently to address pontential bugs and security issues, and to allow for the release of new extensions to be released as support for new platforms becomes available.

### Do you support ...?

We currently support Arduino 101 and Micro:bit. We plan to add support for additional Arduino variants and Raspberry Pi in a future release.

### I don't see the blocks I need for my Arduino/Micro:bit.

Check that you have imported the correct extension and dragged an instance of your target device into the designer.

## <a name="/faq/faq/companion"></a>Companion

### When I load the companion, the app crashes.

Check the version of your companion app. For the ai2-test server, the companion version should be 2.41t2. The version from the Google Play store should be 2.42 (not yet released).

## <a name="/faq/faq/ble"></a>Bluetooth Low Energy

### Why don't I see my device after scanning for Bluetooth?

If you have other apps running the background on your mobile device that have established a connection to your Bluetooth low energy device, that app may maintain its connection in the background. If you have previously connected with the MIT App Inventor Companion app, you may need to restart and reconnect the app to your MIT App Inventor session. This will free any existing connection between the companion and your Bluetooth low energy device. Lastly, you may need to reset your Bluetooth low energy device. Both the Micro:bit and Arduino microcontrollers have clearly marked reset buttons to accomplish this.

## <a name="/faq/faq/arduino"></a>Arduino

### Does the Arduino sketch support Uno, Due, Leonardo, ...?

Currently the Arduino sketch published by the MIT App Inventor team only targets the Arduino 101. Other devices in the Arduino family will have support added in the future.

### How do I rename my Arduino?

At the top of the sketch file when opened in the Arduino editor is a line:

```c
#define NAME "AppInventor"  // no more than 11 characters
```

Changing the name in quotes from `AppInventor` to another name and then uploading the changes to the Arduino will cause the Arduino to advertise under the new name. Due to limitations in the Bluetooth low energy protocol, names are limited to 11 characters or less.

### "Error compiling board for Arduino/Genuino Uno"

This error indicates that the Arduino IDE is targeting the wrong board type during compilation. To target the Arduino 101, select the menu item Tools > Board > Arduino/Genuino 101. For more details, see the [Arduino 101 setup instructions](/assets/howtos/MIT_App_Inventor_IoT_Setup.pdf).

### An error occurred while uploading the sketch

Occassionally the Arduino board may stop responding to commands from your computer during programming. To fix this issue, press the `MASTER RESET` button on the Arduino 101 and restart the upload process by clicking the "Upload" button in the Arduino editor.

Another potential cause of this error is a change in the port the Arduino is connected to. Check that you have selected the right port and board type via the Tools > Port menu in the Arduino editor.

### How do I check the firmware for my Arduino 101?

During upload the Arduino editor will check the firmware of your Arduino to confirm that it matches the expected version. If it does not, you will receive instructions indicating how to reprogram your Arduino to use the correct firmware.

### How do I change the firmware on my Arduino 101?

Please follow the instructions on pages 5-7 of the [Arduino 101 setup instructions](/assets/howtos/MIT_App_Inventor_IoT_Setup.pdf) to install the appropriate firmware on your Arduino 101.


### I don't see my arduino when I scan for Bluetooth devices with my app. Help!

If you have previously connected to the Arduino using an app on your phone or the MIT App Inventor companion, the Arduino's connection might have not been released by the Android device, restart Arduino and/or re-push code to the Arduino.

If you have never connected to the device, check that it is broadcasting using a Bluetooth low energy scanner app. If you still do not see the device, it may be because you are using an incorrect firmware. The Arduino sketch does not support the most recent 2.0.2 firmware and the Arduino will lock up if it is used. See the previous question about how to change the firmware on your Arduino 101.

### The sensors/outputs on my Arduino are behaving oddly/are very jittery.

Some hardware require 5V input rather than 3.3V. If you are using the Grove shield, make sure you have the Arduino's power input set to 5V. The <a href="#/arduino101/arduinorgblcd">RGB LCD</a>, for example, requires 5V otherwise there is not enough power to drive the liquid crystal display and characters will not appear.

### When I connect to the Arduino over Bluetooth, the app crashes.

Check that you have the right pin set in the property tab for the device in the designer.

### When I try to read or write to the Arduino nothing happens.

1. Make sure you have the code set to "ENABLED" in the Arduino code
2. Check that you've set the right Pin in the designer

## <a name="/faq/faq/microbit"></a>Micro:bit

### How do I pair my Micro:bit with my phone/tablet?

To pair the Micro:bit with your mobile device, you will need to:

1. Press and hold the A and B buttons, and while holding the buttons press and release the RESET button.
2. After restarting, the Micro:bit's LED matrix will show the message `PAIRING MODE`.
3. On your mobile device, you will need to go to the Settings application and open the Bluetooth section. You should see your Micro:bit listed for pairing.
4. Select your Micro:bit in the list of available Bluetooth devices.
5. After selecting the Micro:bit from the list on the mobile device, your Micro:bit will alternate between an arrow (&larr;) and the letter A to indicate it has received a pairing request.
6. Push the A button to accept the pairing request.
7. The Micro:bit will display a pairing code consisting of six numbers, one at a time. Type this code into your mobile device when prompted for the pairing code.
8. Accept the pairing code on your mobile device. Your Micro:bit will then show a checkmark/tick (&check;) to indicate success.

### Why do I need to pair my Micro:bit with my phone/tablet?

The Micro:bit uses a secure communication channel between it and your mobile device. The pairing code is used to establish this secure channel and protects any data being transferred between your mobile device and the Micro:bit.
