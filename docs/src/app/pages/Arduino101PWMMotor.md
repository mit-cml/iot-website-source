# Arduino101PWMMotor

Extension for Arduino 101 that allows the user to manipulate attached motors.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a>component with a connection to the Arduino 101.


![get Arduino101PWMMotor1 BluetoothDevice ](blocks/Arduino101PWMMotor.BluetoothDevice_getter.svg)


![set Arduino101PWMMotor1 BluetoothDevice  to](blocks/Arduino101PWMMotor.BluetoothDevice_setter.svg)

+ <a name="On"></a>`On` – Get whether the device attached to the Arduino 101 is turned on. This is a best guess approximation given the connected state of the Bluetooth low energy component and previous calls to TurnOn and TurnOff.


![get Arduino101PWMMotor1 On ](blocks/Arduino101PWMMotor.On_getter.svg)

+ <a name="Speed"></a>`Speed` – 


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


