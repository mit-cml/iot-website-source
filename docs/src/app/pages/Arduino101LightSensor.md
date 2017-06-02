# Arduino101LightSensor

Extension to interpret light sensor data from the Arduino 101.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a>component with a connection to the Arduino 101.


![get Arduino101LightSensor1 BluetoothDevice ](blocks/Arduino101LightSensor.BluetoothDevice_getter.svg)


![set Arduino101LightSensor1 BluetoothDevice  to](blocks/Arduino101LightSensor.BluetoothDevice_setter.svg)

+ <a name="Pin"></a>`Pin` – The Pin on the Arduino board that the device is wired in to.


![get Arduino101LightSensor1 Pin ](blocks/Arduino101LightSensor.Pin_getter.svg)


![set Arduino101LightSensor1 Pin  to](blocks/Arduino101LightSensor.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101LightSensor1 IsSupported](blocks/Arduino101LightSensor.IsSupported.svg)

+ <a name="ReadLightSensor"></a>`ReadLightSensor` – Method for ReadLightSensor

![call Arduino101LightSensor1 ReadLightSensor](blocks/Arduino101LightSensor.ReadLightSensor.svg)

+ <a name="RequestLightSensorUpdates"></a>`RequestLightSensorUpdates` – Method for RequestLightSensorUpdates

![call Arduino101LightSensor1 RequestLightSensorUpdates](blocks/Arduino101LightSensor.RequestLightSensorUpdates.svg)

+ <a name="StopLightSensorUpdates"></a>`StopLightSensorUpdates` – Method for StopLightSensorUpdates

![call Arduino101LightSensor1 StopLightSensorUpdates](blocks/Arduino101LightSensor.StopLightSensorUpdates.svg)

## Events

+ <a name="LightSensorDataReceived"></a>`LightSensorDataReceived` – Event for LightSensorDataReceived

![when Arduino101LightSensor1 LightSensorDataReceived reading do](blocks/Arduino101LightSensor.LightSensorDataReceived.svg)


