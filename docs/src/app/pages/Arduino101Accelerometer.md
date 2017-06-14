# Arduino101Accelerometer

The Arduino101Accelerometer component lets users configure the Arduino 101's on-board accelerometer and receive one or more accelerometer samples via the appropriate methods.<br>

<strong>More links:</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101Accelerometer.aia' target='_blank'>sample project</a> for the Arduino 101 Accelerometer.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Accelerometer.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Accelerometer.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101Accelerometer1 BluetoothDevice ](blocks/Arduino101Accelerometer.BluetoothDevice_getter.svg)


![set Arduino101Accelerometer1 BluetoothDevice  to](blocks/Arduino101Accelerometer.BluetoothDevice_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Check whether the accelerometer is currently available for the device connected via the
 <code>BluetoothDevice</code> property. If no device is currently connected, this method will
 always return false.

![call Arduino101Accelerometer1 IsSupported](blocks/Arduino101Accelerometer.IsSupported.svg)

+ <a name="ReadAccelerometerData"></a>`ReadAccelerometerData` – Read a single sample of accelerometer data from the Arduino. On successful read, the
 <a href="#AccelerometerDataReceived"><code>AccelerometerDataReceived</code></a>
 event will be run.

![call Arduino101Accelerometer1 ReadAccelerometerData](blocks/Arduino101Accelerometer.ReadAccelerometerData.svg)

+ <a name="RequestAccelerometerDataUpdates"></a>`RequestAccelerometerDataUpdates` – Request notifications of changes in the Arduino's accelerometer. Accelerometer data will be
 reported through the
 <a href="#AccelerometerDataReceived"><code>AccelerometerDataReceived</code></a> event.

![call Arduino101Accelerometer1 RequestAccelerometerDataUpdates](blocks/Arduino101Accelerometer.RequestAccelerometerDataUpdates.svg)

+ <a name="StopAccelerometerDataUpdates"></a>`StopAccelerometerDataUpdates` – Stop receiving updates from the Arduino's accelerometer. Note that there may be pending
 messages from the device that will still be reported through the
 <a href="#AccelerometerDataReceived"><code>AccelerometerDataReceived</code></a> event.

![call Arduino101Accelerometer1 StopAccelerometerDataUpdates](blocks/Arduino101Accelerometer.StopAccelerometerDataUpdates.svg)

## Events

+ <a name="AccelerometerDataReceived"></a>`AccelerometerDataReceived` – The <code>AccelerometerDataReceived</code> event is run whenever accelerometer samples are
 received from the Arduino 101. This is usually a result of performing a
 <a href="#ReadAccelerometerData">read</a> or
 <a href="#RequestAccelerometerDataUpdates">request</a> operation.
 The X, Y, and Z values are in multiples of 1 Earth gravity (G=-9.8 m/s<sup>2</sup>).

 __Parameters__:

    + <code>Accelerometer_X</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The X value of the accelerometer, in G.
    + <code>Accelerometer_Y</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The Y value of the accelerometer, in G.
    + <code>Accelerometer_Z</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The Z value of the accelerometer, in G.

![when Arduino101Accelerometer1 AccelerometerDataReceived Accelerometer_X Accelerometer_Y Accelerometer_Z do](blocks/Arduino101Accelerometer.AccelerometerDataReceived.svg)


