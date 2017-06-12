# Arduino101ProximitySensor

The Arduino 101 Proximity Sensor lets users receive data from a infrared proximity sensor. Note that the signal wire on the Grove header may be off by one pin. If you are not receiving any reading from the sensor, you may need to increase the pin number by one (A0 becomes A1) to read the correct pin. The Arduino sketch transforms the raw reading from the sensor into a distance in centimeters based on the spec sheet published by Sharp.<br><img src='/assets/sensors/Grove-InfraredProxSensor.jpg' width='50%'><br>

<strong>More Links</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101ProximitySensor.aia' target='_blank'>sample project</a> for the Arduino 101 Proximity Sensor.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Proximity_Sensor.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Proximity Sensor.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/GP2Y0A21YK.pdf' target='_blank'>hardware data sheet</a>.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101ProximitySensor1 BluetoothDevice ](blocks/Arduino101ProximitySensor.BluetoothDevice_getter.svg)


![set Arduino101ProximitySensor1 BluetoothDevice  to](blocks/Arduino101ProximitySensor.BluetoothDevice_setter.svg)

+ <a name="Pin"></a>`Pin` – The Pin on the Arduino board that the device is wired in to.


![get Arduino101ProximitySensor1 Pin ](blocks/Arduino101ProximitySensor.Pin_getter.svg)


![set Arduino101ProximitySensor1 Pin  to](blocks/Arduino101ProximitySensor.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101ProximitySensor1 IsSupported](blocks/Arduino101ProximitySensor.IsSupported.svg)

+ <a name="ReadProximity"></a>`ReadProximity` – Obtain the most recent reading from the proximity sensor as reported by the Arduino. On
 success, the <a href="#ProximityReceived"><code>ProximityReceived</code></a> event will be run.

![call Arduino101ProximitySensor1 ReadProximity](blocks/Arduino101ProximitySensor.ReadProximity.svg)

+ <a name="RequestProximityUpdates"></a>`RequestProximityUpdates` – Request notification of updates for the proximity sensor attached to the Arduino 101. The <a
 href="#ProximityReceived"><code>ProximityReceived</code></a> event will be run as proximity
 sensor readings are received from the Arduino.

![call Arduino101ProximitySensor1 RequestProximityUpdates](blocks/Arduino101ProximitySensor.RequestProximityUpdates.svg)

+ <a name="StopProximityUpdates"></a>`StopProximityUpdates` – Stop listening for notifications of proximity sensor readings from the Arduino. This only has
 an effect if there was a previous call to <a
 href="RequestProximityUpdates"><code>RequestProximityUpdates</code></a>. There may be
 additional pending messages that will be processed after this call.

![call Arduino101ProximitySensor1 StopProximityUpdates](blocks/Arduino101ProximitySensor.StopProximityUpdates.svg)

## Events

+ <a name="ProximityReceived"></a>`ProximityReceived` – The <codeProximityReceived</code> event is run when a proximity measurement is received from
 the proximity sensor attached to the Arduino 101.

 __Parameters__:

     * <code>proximity</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The proximity of an object from the sensor. Due to physical and mathematical
       limitations, this value will range from 6 to 80 cm.

![when Arduino101ProximitySensor1 ProximityReceived proximity do](blocks/Arduino101ProximitySensor.ProximityReceived.svg)


