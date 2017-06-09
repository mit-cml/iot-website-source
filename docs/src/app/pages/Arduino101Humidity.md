# Arduino101Humidity

The Arduino101Humidity component lets users gather humidity and temperature data from a <a href='http://wiki.seeed.cc/Grove-TemperatureAndHumidity_Sensor/' target='_blank'>Grove DHT11 sensor</a>. Temperature data are reported in degrees Celsius and the relative humidity is reported in percent.<br><img class='centered' alt='Image of a Grove temperature and humidity sensor'src='/assets/sensors/Grove-TempAndHumiSensor.jpg'><br>

<strong>More links:</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101Humidity.aia' target='_blank'>sample project</a> for the Arduino 101 Humidity sensor.</li><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101TemperatureSensor.aia' target='_blank'>sample project</a> for the Arduino 101 Temperature sensor.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Humidity_Sensor.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Humidity sensor.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Temperature_Sensor.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Temperature sensor.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


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

+ <a name="ReadHumidity"></a>`ReadHumidity` – Read the current humidity from the attached sensor. On success, the <a
 href="#HumidityReceived"><code>HumidityReceived</code></a> event will be run with the
 received humidity measurement.

![call Arduino101Humidity1 ReadHumidity](blocks/Arduino101Humidity.ReadHumidity.svg)

+ <a name="ReadTemperature"></a>`ReadTemperature` – Read the current temperature from the attached sensor. On success, the <a
 href="#TemperatureReceived"><code>TemperatureReceived</code></a> event will be run with the
 received temperature measurement.

![call Arduino101Humidity1 ReadTemperature](blocks/Arduino101Humidity.ReadTemperature.svg)

+ <a name="RequestHumidityUpdates"></a>`RequestHumidityUpdates` – Request notifications from the Arduino for changes in the humidity sensor reading. The <a
 href="#HumidityReceived"><code>HumidityReceived</code></a> event will be run as samples
 are received from the Arduino.

![call Arduino101Humidity1 RequestHumidityUpdates](blocks/Arduino101Humidity.RequestHumidityUpdates.svg)

+ <a name="RequestTemperatureUpdates"></a>`RequestTemperatureUpdates` – Request notifications from the Arduino for changes in the temperature sensor reading. The <a
 href="#TemperatureReceived"><code>TemperatureReceived</code></a> event will be run as samples
 are received from the Arduino.

![call Arduino101Humidity1 RequestTemperatureUpdates](blocks/Arduino101Humidity.RequestTemperatureUpdates.svg)

+ <a name="StopHumidityUpdates"></a>`StopHumidityUpdates` – Stop listening for notifications of changes in the humidity sensor reading. This only has an
 effect if there was a previous call to <a
 href="#RequestHumidityUpdates"><code>RequestHumidityUpdates</code></a>. There may be additional
 pending messages that will be processed by running <a
 href="#HumidityReceived"><code>HumidityReceived</code></a>.

![call Arduino101Humidity1 StopHumidityUpdates](blocks/Arduino101Humidity.StopHumidityUpdates.svg)

+ <a name="StopTemperatureUpdates"></a>`StopTemperatureUpdates` – Stop listening for notifications of changes in the temperature sensor reading. This only has
 an effect if there was a previous call to <a
 href="#RequestTemperatureUpdates"><code>RequestTemperatureUpdates</code></a>. There may be
 additional pending messages that will be processed by running <a
 href="#TemperatureReceived"><code>TemperatureReceived</code></a>.

![call Arduino101Humidity1 StopTemperatureUpdates](blocks/Arduino101Humidity.StopTemperatureUpdates.svg)

## Events

+ <a name="HumidityReceived"></a>`HumidityReceived` – The <code>HumidityReceived</code> event is run whenever humidity samples are received from the
 Arduino. This is usually a result of performing a <a href="#ReadHumidity">read</a> or
 <a href="#RequestHumidityUpdates">request</a> operation. The humidity value is a relative
 humidity between 0-100%.

 __Parameters__:

     * <code>humidity</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The relative humidity, in percent.

![when Arduino101Humidity1 HumidityReceived humidity do](blocks/Arduino101Humidity.HumidityReceived.svg)

+ <a name="TemperatureReceived"></a>`TemperatureReceived` – The <code>TemperatureReceived</code> event is run whenever temperature samples are received
 from the Arduino. This is usually a result of performing a <a href="#ReadTemperature>read</a>
 or <a href="#RequestTemperatureUpdates">request</a> operation. The temperature value is
 measured in degrees Celsius.

 __Parameters__:

     * <code>temperature</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The temperature, in degrees Celsius.

![when Arduino101Humidity1 TemperatureReceived temperature do](blocks/Arduino101Humidity.TemperatureReceived.svg)


