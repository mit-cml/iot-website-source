# Arduino101LightSensor

The Arduino 101 Light Sensor component lets users receive data from a light sensor attached to the Arduino, however it can be used for any similar device that provides a linear analog signal based on some external phenomenon.<br>

<strong>More Links</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101LightSensor.aia' target='_blank'>sample project</a></li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Light_Sensor.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Light Sensor.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


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

+ <a name="ReadLightSensor"></a>`ReadLightSensor` – Obtain the most recent reading from the light sensor as reported by the Arduino. On success,
 the <a href="#LightSensorDataReceived"><code>LightSensorDataReceived</code></a> event will be
 run.

![call Arduino101LightSensor1 ReadLightSensor](blocks/Arduino101LightSensor.ReadLightSensor.svg)

+ <a name="RequestLightSensorUpdates"></a>`RequestLightSensorUpdates` – Request notification of updates for the light sensor attached to the Arduino 101. The <a
 href="#LightSensorDataReceived"><code>LightSensorDataReceived</code></a> event will be run as
 light sensor readings are received from the Arduino.

![call Arduino101LightSensor1 RequestLightSensorUpdates](blocks/Arduino101LightSensor.RequestLightSensorUpdates.svg)

+ <a name="StopLightSensorUpdates"></a>`StopLightSensorUpdates` – Stop listening for notifications of light sensor readings from the Arduino. This only has an
 effect if there was a previous call to <a
 href="#RequestLightSensorUpdates"><code>RequestLightSensorUpdates</code></a>. There may be
 additional pending messages that will be processed after this call.

![call Arduino101LightSensor1 StopLightSensorUpdates](blocks/Arduino101LightSensor.StopLightSensorUpdates.svg)

## Events

+ <a name="LightSensorDataReceived"></a>`LightSensorDataReceived` – The <code>LightSensorDataReceived</code> event is run when a sample is received from the light
 sensor attached to the Arduino 101.

 __Parameters__:

     * <code>intensity</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The intensity of the light received from the sensor, linear in the voltage provided by the light sensor.

![when Arduino101LightSensor1 LightSensorDataReceived intensity do](blocks/Arduino101LightSensor.LightSensorDataReceived.svg)


