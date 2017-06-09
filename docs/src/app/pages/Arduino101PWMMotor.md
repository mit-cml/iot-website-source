# Arduino101PWMMotor

The Arduino 101 PWM Motor extension lets users control external devices that respond to pulse width modulation, such as continuous motors or lights. On the Arduino 101, digital pins 3, 5, 6, and 9 support pulse width modulation.<br>

<strong>More Links</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101PWMMotor.aia' target='_blank'>sample project</a> for the Arduino 101 Pulse Width Modulation for Motors component.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_PWM_Motor.pdf' target='_blank'>how to instructions</a> for the Arduino 101 PWM Motor.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101PWMMotor1 BluetoothDevice ](blocks/Arduino101PWMMotor.BluetoothDevice_getter.svg)


![set Arduino101PWMMotor1 BluetoothDevice  to](blocks/Arduino101PWMMotor.BluetoothDevice_setter.svg)

+ <a name="On"></a>`On` – Get whether the device attached to the Arduino 101 is turned on. This is a best guess approximation given the connected state of the Bluetooth low energy component and previous calls to TurnOn and TurnOff.


![get Arduino101PWMMotor1 On ](blocks/Arduino101PWMMotor.On_getter.svg)

+ <a name="Speed"></a>`Speed` – The rate of pulse width modulation as a percentage of time. A value of 0 indicates an always-off state, 50 would result in the device being powered for half of each time unit, and 100 results in an always-on state. Default: 100.


![get Arduino101PWMMotor1 Speed ](blocks/Arduino101PWMMotor.Speed_getter.svg)


![set Arduino101PWMMotor1 Speed  to](blocks/Arduino101PWMMotor.Speed_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101PWMMotor1 IsSupported](blocks/Arduino101PWMMotor.IsSupported.svg)

+ <a name="TurnOff"></a>`TurnOff` – Turn off the connected device.

![call Arduino101PWMMotor1 TurnOff](blocks/Arduino101PWMMotor.TurnOff.svg)

+ <a name="TurnOn"></a>`TurnOn` – Turn on the connected device.

![call Arduino101PWMMotor1 TurnOn](blocks/Arduino101PWMMotor.TurnOn.svg)


