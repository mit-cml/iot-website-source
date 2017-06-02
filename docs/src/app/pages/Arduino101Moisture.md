# Arduino101Moisture

Extension to interface with a moisture sensor attached ot an Arduino 101 running the
 App Inventor Companion Sketch.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a>component with a connection to the Arduino 101.


![get Arduino101Moisture1 BluetoothDevice ](blocks/Arduino101Moisture.BluetoothDevice_getter.svg)


![set Arduino101Moisture1 BluetoothDevice  to](blocks/Arduino101Moisture.BluetoothDevice_setter.svg)

+ <a name="Pin"></a>`Pin` – The Pin on the Arduino board that the device is wired in to.


![get Arduino101Moisture1 Pin ](blocks/Arduino101Moisture.Pin_getter.svg)


![set Arduino101Moisture1 Pin  to](blocks/Arduino101Moisture.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101Moisture1 IsSupported](blocks/Arduino101Moisture.IsSupported.svg)

+ <a name="ReadMoisture"></a>`ReadMoisture` – Method for ReadMoisture

![call Arduino101Moisture1 ReadMoisture](blocks/Arduino101Moisture.ReadMoisture.svg)

+ <a name="RequestMoistureUpdates"></a>`RequestMoistureUpdates` – Method for RequestMoistureUpdates

![call Arduino101Moisture1 RequestMoistureUpdates](blocks/Arduino101Moisture.RequestMoistureUpdates.svg)

+ <a name="StopMoistureUpdates"></a>`StopMoistureUpdates` – Method for StopMoistureUpdates

![call Arduino101Moisture1 StopMoistureUpdates](blocks/Arduino101Moisture.StopMoistureUpdates.svg)

## Events

+ <a name="MoistureReceived"></a>`MoistureReceived` – Event for MoistureReceived

![when Arduino101Moisture1 MoistureReceived moisture do](blocks/Arduino101Moisture.MoistureReceived.svg)


