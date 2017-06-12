# Arduino101Moisture

The Arduino 101 Moisture Sensor lets users receive data from a moisture sensor attached to the Arduino, however it can be used for any similar device that provides a linear analog signal based on some external phenomenon.<br>

<strong>More Links</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101MoistureSensor.aia' target='_blank'>sample project</a> for the Arduino 101 Moisture Sensor.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Moisture_Sensor.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Moisture Sensor.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


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

+ <a name="ReadMoisture"></a>`ReadMoisture` – Obtain the most recent reading from the moisture sensor as reported by the Arduino. On success,
 the <a href="#MoistureReceived"><code>MoistureReceived</code></a> event will be run.

![call Arduino101Moisture1 ReadMoisture](blocks/Arduino101Moisture.ReadMoisture.svg)

+ <a name="RequestMoistureUpdates"></a>`RequestMoistureUpdates` – Request notification of updates for the moisture sensor attached to the Arduino 101. The <a
 href="#MoistureReceived"><code>MoistureReceived</code></a> event will be run as moisture
 sensor readings are received from the Arduino.

![call Arduino101Moisture1 RequestMoistureUpdates](blocks/Arduino101Moisture.RequestMoistureUpdates.svg)

+ <a name="StopMoistureUpdates"></a>`StopMoistureUpdates` – Stop listening for notifications of moisture sensor readings from the ARduino. This only has
 an effect if there was a previous call to <a
 href="#RequestMoistureUpdates"><code>RequestMoistureUpdates</code></a>. There may be
 additional pending messages that will be processed after this call.

![call Arduino101Moisture1 StopMoistureUpdates](blocks/Arduino101Moisture.StopMoistureUpdates.svg)

## Events

+ <a name="MoistureReceived"></a>`MoistureReceived` – The <code>MoistureReceived</code> event is run when a moisture measurement is received from
 the moisture sensor attached to the Arduino 101.

 __Parameters__:

     * <code>moisture</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The moisture level measured, between 0 and 100.

![when Arduino101Moisture1 MoistureReceived moisture do](blocks/Arduino101Moisture.MoistureReceived.svg)


