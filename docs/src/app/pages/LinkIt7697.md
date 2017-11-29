# Platform: LinkIt 7697

LinkIt 7697 is an Arduino-compatible dev board of the LinkIt IoT platform with onboard Bluetooth Low energy and W-fi ommunication.
It provides hardware development kits (HDKs) for user to develop prototypes of IoT devices. 
LinkIt 7697 can interact with App Inventor through Bluetooth Low energy and Wi-Fi.

<div style="text-align: center; font-size: 75%; margin: 16pt 0;">
![Image of the LinkIt 7697. Source: arduino.cc](/assets/howtos/LinkIt_7697.png)
<br>
Image source: <a href="https://docs.labs.mediatek.com/resource/linkit7697-arduino/en" target="_blank">LinkIt 7697 on Mediatek Labs</a>
</div>

Key features:
* ARM Cortex-M4 based MT7697 SoC @ 192MHz
* 802.11b/g/n wireless connectivity
* Bluetooth 4.2 Low Energy
* 352 KB of RAM
* 4 MB external Flash memory
* Micro-USB port for power supply
* Virtual COM port through onboard CP2102N USB-to-UART chipset
* Two buttons for system reset and external interrupt
* Peripheral interfaces including GPIO, UART, I2C, SPI, PWM, EINT, ADC, IrDA, I2S
* Pin headers for SWD debugging
* LinkIt SDK GCC, IAR Embedded Workbench, and Keil uVision IDE (Get Started Guide)
* Additional add-on Package for Arduino IDE support
* Size: 48 x 26 mm (1.89 x 1.02 inches)
* Open hardware board reference design including schematic, <a href="https://labs.mediatek.com/en/download/1ega2lbl" target="_blank">layouts and pin details.</a>

Please follow our instructions:

* [LED control (BluetoothLE)](/assets/howtos/MIT_App_Inventor_7697_LED.pdf) &mdash; Control the onboard LED by button and voice through Bluetooth.
* [soil moisture detection (BluetoothLE)](/assets/howtos/MIT_App_Inventor_7697_analogread.pdf) &mdash; Detect soil moisture level by moisture sensor.
* [Wheeled robot control(BluetoothLE)](/assets/howtos/MIT_App_Inventor_7697_BLEWheeledRobot.pdf) &mdash; Control a two-wheel robot through through Bluetooth.
* [RGB LED control (Wi-Fi)](/assets/howtos/MIT_App_Inventor_7697_WIFILED.pdf) &mdash; Control a RGB LED through Wi-Fi.
