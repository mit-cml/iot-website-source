# Arduino101Led

The Arduino LED component lets users control light-emitting diodes (LEDs) from their App Inventor projects. If the LED is plugged into a pin supporting pulse width modulation (PWM), then the LED's brightness can be controlled by varying the Intensity property. TurnOn and TurnOff methods are used to control the power state of the LED.<br>

<strong>More Links:</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101LED.aia' target='_blank'>sample project</a> for the Arduino 101 LED.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_LED_Control.pdf' target='_blank'>how to instructions</a> for the Arduino 101 LED.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101Led1 BluetoothDevice ](blocks/Arduino101Led.BluetoothDevice_getter.svg)


![set Arduino101Led1 BluetoothDevice  to](blocks/Arduino101Led.BluetoothDevice_setter.svg)

+ <a name="Intensity"></a>`Intensity` – The Intensity of the LED valued from 1-100. Intensity will only affect the brightness of the LED if it is plugged into a pin supporting pulse width modulation (PWM). For the Arduino 101, the PWM pins are 3, 5, 6, and 9. For all other pins the LED will either turn on or off with no change in intensity.


![get Arduino101Led1 Intensity ](blocks/Arduino101Led.Intensity_getter.svg)


![set Arduino101Led1 Intensity  to](blocks/Arduino101Led.Intensity_setter.svg)

+ <a name="On"></a>`On` – Get whether the device attached to the Arduino 101 is turned on. This is a best guess approximation given the connected state of the Bluetooth low energy component and previous calls to TurnOn and TurnOff.


![get Arduino101Led1 On ](blocks/Arduino101Led.On_getter.svg)

+ <a name="Pin"></a>`Pin` – The Pin on the Arduino board that the device is wired in to.


![get Arduino101Led1 Pin ](blocks/Arduino101Led.Pin_getter.svg)


![set Arduino101Led1 Pin  to](blocks/Arduino101Led.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101Led1 IsSupported](blocks/Arduino101Led.IsSupported.svg)

+ <a name="TurnOff"></a>`TurnOff` – Turn off the connected device.

![call Arduino101Led1 TurnOff](blocks/Arduino101Led.TurnOff.svg)

+ <a name="TurnOn"></a>`TurnOn` – Turn on the connected device.

![call Arduino101Led1 TurnOn](blocks/Arduino101Led.TurnOn.svg)


