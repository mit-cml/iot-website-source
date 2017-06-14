# Arduino101Gyroscope

The Arduino101Gyroscope component lets users configure the Arduino 101's on-board gyroscope and receive one or more gyroscope samples via the appropriate methods.<br>

<strong>More links:</strong><ul><li>View the <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101Gyroscope.aia' target='_blank'>sample project</a> for the Arduino 101 Gyroscope.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Gyroscope.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Gyroscope.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101Gyroscope1 BluetoothDevice ](blocks/Arduino101Gyroscope.BluetoothDevice_getter.svg)


![set Arduino101Gyroscope1 BluetoothDevice  to](blocks/Arduino101Gyroscope.BluetoothDevice_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Check whether the feature is currently available for the device connected via the
 <a href="#BluetoothDevice"><code>BluetoothDevice</code></a> property. If no device is currently
 connected, this method will always return false.

![call Arduino101Gyroscope1 IsSupported](blocks/Arduino101Gyroscope.IsSupported.svg)

+ <a name="ReadGyroscopeData"></a>`ReadGyroscopeData` – Read a single sample of gyroscope data from the Arduino. On successful read, the
 <a href="#GyroscopeDataReceived"><code>GyroscopeDataReceived</code></a> event will be run.

![call Arduino101Gyroscope1 ReadGyroscopeData](blocks/Arduino101Gyroscope.ReadGyroscopeData.svg)

+ <a name="RequestGyroscopeDataUpdates"></a>`RequestGyroscopeDataUpdates` – Request notifications of changes in the Arduino's gyroscope. Gyroscope data will be reported
 through the <a href="#GyroscopeDataReceived"><code>GyroscopeDataReceived</code></a> event.

![call Arduino101Gyroscope1 RequestGyroscopeDataUpdates](blocks/Arduino101Gyroscope.RequestGyroscopeDataUpdates.svg)

+ <a name="StopGyroscopeDataUpdates"></a>`StopGyroscopeDataUpdates` – Stop receiving updates from the Arduino's gyroscope. Note that there may be pending messages
 from the device that will still be reported through the
 <a href="#GryoscopeDataReceived"><code>GyroscopeDataReceived</code></a> event. This method
 has no effect if <a href="#RequestGyroscopeDataUpdates"><code>RequestGyroscopeDataUpdates</code></a>
 has not been previously called.

![call Arduino101Gyroscope1 StopGyroscopeDataUpdates](blocks/Arduino101Gyroscope.StopGyroscopeDataUpdates.svg)

## Events

+ <a name="GyroscopeDataReceived"></a>`GyroscopeDataReceived` – The <code>GyroscopeDataReceived</code> event is run whenever gyroscope samples are received
 from the Arduino 101. This is usually a result of performing a
 <a href="#ReadGyroscopeData">read</a> or <a href="#RequestGyroscopeDataUpdates">request</a>
 operation. The X and Y angles are reported in degrees.

 __Parameters__:

     * <code>X_Angle</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The rotation of the device around its X axis, in degrees.
     * <code>Y_Angle</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The rotation of the device around its Y axis, in degrees.

![when Arduino101Gyroscope1 GyroscopeDataReceived X_Angle Y_Angle do](blocks/Arduino101Gyroscope.GyroscopeDataReceived.svg)


