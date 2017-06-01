# Arduino101Humidity

Extension to read humidity and temperature data from a DHT sensor attached to an Arduino 101
 running the App Inventor Companion Sketch.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component with a connection to the Arduino 101.


![get Arduino101Humidity1 BluetoothDevice ](blocks/Arduino101Humidity.BluetoothDevice_getter.svg)


![set Arduino101Humidity1 BluetoothDevice  to](blocks/Arduino101Humidity.BluetoothDevice_setter.svg)

+ <a name="Pin"></a>`Pin` – The Pin on the Arduino board that the device is wired in to.


![get Arduino101Humidity1 Pin ](blocks/Arduino101Humidity.Pin_getter.svg)


![set Arduino101Humidity1 Pin  to](blocks/Arduino101Humidity.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101Humidity1 IsSupported](blocks/Arduino101Humidity.IsSupported.svg)

+ <a name="ReadHumidity"></a>`ReadHumidity` – Method for ReadHumidity

![call Arduino101Humidity1 ReadHumidity](blocks/Arduino101Humidity.ReadHumidity.svg)

+ <a name="ReadTemperature"></a>`ReadTemperature` – Method for ReadTemperature

![call Arduino101Humidity1 ReadTemperature](blocks/Arduino101Humidity.ReadTemperature.svg)

+ <a name="RequestHumidityUpdates"></a>`RequestHumidityUpdates` – Method for RequestHumidityUpdates

![call Arduino101Humidity1 RequestHumidityUpdates](blocks/Arduino101Humidity.RequestHumidityUpdates.svg)

+ <a name="RequestTemperatureUpdates"></a>`RequestTemperatureUpdates` – Method for RequestTemperatureUpdates

![call Arduino101Humidity1 RequestTemperatureUpdates](blocks/Arduino101Humidity.RequestTemperatureUpdates.svg)

+ <a name="StopHumidityUpdates"></a>`StopHumidityUpdates` – Method for StopHumidityUpdates

![call Arduino101Humidity1 StopHumidityUpdates](blocks/Arduino101Humidity.StopHumidityUpdates.svg)

+ <a name="StopTemperatureUpdates"></a>`StopTemperatureUpdates` – Method for StopTemperatureUpdates

![call Arduino101Humidity1 StopTemperatureUpdates](blocks/Arduino101Humidity.StopTemperatureUpdates.svg)

## Events

+ <a name="HumidityReceived"></a>`HumidityReceived` – Event for HumidityReceived

![when Arduino101Humidity1 HumidityReceived humidity do](blocks/Arduino101Humidity.HumidityReceived.svg)

+ <a name="TemperatureReceived"></a>`TemperatureReceived` – Event for TemperatureReceived

![when Arduino101Humidity1 TemperatureReceived temperature do](blocks/Arduino101Humidity.TemperatureReceived.svg)


