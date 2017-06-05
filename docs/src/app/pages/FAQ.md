## App Inventor IoT FAQ (Draft)

### Arduino
* I don't see my arduino when I scan for Bluetooth devices with my app.

  * Might have not been released by the Android device, restart Arduino and/or re-push code to the Arduino.
  
* I get an error when I try to upload the Arduino code from the IDE to the Arduino.

  * Check that you have selected the right port and board type.

* The sensors/outputs on my Arduino are behaving oddly/are very jittery.

  * Make sure you have the Arduino's power input set to 5V.
  
### Mirco:Bit
* I don't know enough about it.

### App Inventor

* I don't see the blocks I need for my Arduino/Micro:bit.
 
  * Check that you have imported the correct extension and dragged it into the designer.
  
## Companion
* When I load the companion, the app crashes.

  * Check the version of your companion app.

* When I connect to the Arduino over Bluetooth, the app crashes.

  * Check that you have the right pin set in the property tab for the device in the designer.

* When I try to read or write to the Arduino nothing happens.

  * Make sure you have the code set to "ENABLED" in the Arduino code
  * Check that you've set the right Pin in the designer

