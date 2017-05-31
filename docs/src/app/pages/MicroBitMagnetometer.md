# Microbit_Magnetometer

The Micro:bit Magnetometer provides App Inventor users with the ability toconfigure the Micro:bit's on-board magnetometer and receive one or more magnetometer samples via the appropriate methods.<br>

The magnetometer's report rate, or period, determines how frequently data will be sent to App Inventor.<br>

<strong>More links:</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/extensions/Microbit_Magnetometer.aia' target='_blank'>sample AIA</a> for the Micro:bit Magnetometer.</li><li>View the <a href='http://iot.appinventor.mit.edu/how-to/Microbit_Magnetometer.html' target='_blank'>how-to instructions</a> for the Micro:bit Magnetometer.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component connected to the Micro:bit device.


![get Microbit_Magnetometer1 BluetoothDevice ](blocks/Microbit_Magnetometer.BluetoothDevice_getter.svg)


![set Microbit_Magnetometer1 BluetoothDevice  to](blocks/Microbit_Magnetometer.BluetoothDevice_setter.svg)

## Methods

+ <a name="ReadMagnetometerBearing"></a>`ReadMagnetometerBearing` – Read a single bearing sample from the Micro:bit. On successful read, the
 <a href="#MagnetometerBearingReceived"><code>MagnetometerBearingReceived</code></a> event
 will be run.

![call Microbit_Magnetometer1 ReadMagnetometerBearing](blocks/Microbit_Magnetometer.ReadMagnetometerBearing.svg)

+ <a name="ReadMagnetometerData"></a>`ReadMagnetometerData` – Read a single sample of magnetometer data from the Micro:bit. On successful read, the
 <a href="#MagnetometerDataReceived"><code>MagnetometerDataReceived</code></a> event will be
 run.

![call Microbit_Magnetometer1 ReadMagnetometerData](blocks/Microbit_Magnetometer.ReadMagnetometerData.svg)

+ <a name="ReadMagnetometerPeriod"></a>`ReadMagnetometerPeriod` – Read the current report rate for the Micro:bit magnetometer. After the period is read, it will
 be received by the
 <a href="#MagnetometerPeriodReceived"><code>MagnetometerPeriodReceived</code></a> event.

![call Microbit_Magnetometer1 ReadMagnetometerPeriod](blocks/Microbit_Magnetometer.ReadMagnetometerPeriod.svg)

+ <a name="RequestMagnetometerBearingUpdates"></a>`RequestMagnetometerBearingUpdates` – Request notifications of changes in the Micro:bit's bearing. Changes in the bearing will be
 reported at a rate determined by the last period value set by a call to
 <a href="#WriteMagnetometerPeriod"><code>WriteMagnetometerPeriod</code></a>. Bearing data
 will be reported through the
 <a href="#MagnetometerBearingReceived"><code>MagnetometerBearingReceived</code></a> event.

![call Microbit_Magnetometer1 RequestMagnetometerBearingUpdates](blocks/Microbit_Magnetometer.RequestMagnetometerBearingUpdates.svg)

+ <a name="RequestMagnetometerDataUpdates"></a>`RequestMagnetometerDataUpdates` – Request notifications of changes in the Micro:bit's magnetometer. Changes in the magnetometer
 will be reported at a rate determined by the last period value set by a call to
 <a href="#WriteMagnetometerPeriod"><code>WriteMagnetometerPeriod</code></a>. Magnetometer
 data will be reported through the
 <a href="#MagnetometerDataReceived"><code>MagnetometerDataReceived</code></a> event.

![call Microbit_Magnetometer1 RequestMagnetometerDataUpdates](blocks/Microbit_Magnetometer.RequestMagnetometerDataUpdates.svg)

+ <a name="StopMagnetometerBearingUpdates"></a>`StopMagnetometerBearingUpdates` – Stop receiving updates from the Micro:bit's magnetometer. Note that there may be pending
 messages from the device that will still be reported through the
 <a href="#MagnetometerBearingReceived"><code>MagnetometerBearingReceived</code></a> event.

![call Microbit_Magnetometer1 StopMagnetometerBearingUpdates](blocks/Microbit_Magnetometer.StopMagnetometerBearingUpdates.svg)

+ <a name="StopMagnetometerDataUpdates"></a>`StopMagnetometerDataUpdates` – Stop receiving updates from the Micro:bit's magnetometer. Note that there may be pending
 messages from the device that will still be reported through the
 <a href="#MagnetometerDataReceived"><code>MagnetometerDataReceived</code></a> event.

![call Microbit_Magnetometer1 StopMagnetometerDataUpdates](blocks/Microbit_Magnetometer.StopMagnetometerDataUpdates.svg)

+ <a name="WriteMagnetometerPeriod"></a>`WriteMagnetometerPeriod` – Use the <code>WriteMagnetometerPeriod</code> method to change how frequently the Micro:bit
 sends magnetometer data to App Inventor. The period is measured in milliseconds. According to
 the Micro:bit specification, valid values are 1, 2, 5, 10, 20, 80, 160 and 640 milliseconds.

 __Parameters__:

     * <code>Magnetometer_Period</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The new magnetometer reporting period, in milliseconds.

![call Microbit_Magnetometer1 WriteMagnetometerPeriodMagnetometer_Period](blocks/Microbit_Magnetometer.WriteMagnetometerPeriod.svg)

## Events

+ <a name="MagnetometerBearingReceived"></a>`MagnetometerBearingReceived` – The <code>MagnetometerBearingReceived</code> event is run whenever bearing samples are
 received from the Micro:bit. This is usually a result of performing a
 <a href="#ReadMagnetometerBearing">read</a> or
 <a href="#RequestMagnetometerBearingUpdates">request</a> operation. The bearing value is
 reported as degrees relative to North.

 __Parameters__:

     * <code>bearing_value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The bearing from North, in degrees.

![when Microbit_Magnetometer1 MagnetometerBearingReceived bearing_value do](blocks/Microbit_Magnetometer.MagnetometerBearingReceived.svg)

+ <a name="MagnetometerDataReceived"></a>`MagnetometerDataReceived` – The <code>MagnetometerDataReceived</code> event is run whenever magnetometer samples are
 received from the Micro:bit. This is usually a result of performing a
 <a href="#ReadMagnetometerData">read</a> or
 <a href="#RequestMagnetometerDataUpdates">request</a> operation. The X, Y, and Z values are in
 milli-teslas, and so should be scaled by 1/1000.

 __Parameters__:

    + <code>Magnetometer_X</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The X value of the magnetometer, in milliT.
    + <code>Magnetometer_Y</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The Y value of the magnetometer, in milliT.
    + <code>Magnetometer_Z</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The Z value of the magnetometer, in milliT.

![when Microbit_Magnetometer1 MagnetometerDataReceived Magnetometer_X Magnetometer_Y Magnetometer_Z do](blocks/Microbit_Magnetometer.MagnetometerDataReceived.svg)

+ <a name="MagnetometerPeriodReceived"></a>`MagnetometerPeriodReceived` – The <code>MagnetometerPeriodReceived</code> event is run after the Micro:bit's magnetometer
 period is read from the device.

 __Parameters__:

     * <code>Magnetometer_Period</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The current reporting interval for the Micro:bit's magnetometer, in milliseconds.

![when Microbit_Magnetometer1 MagnetometerPeriodReceived Magnetometer_Period do](blocks/Microbit_Magnetometer.MagnetometerPeriodReceived.svg)

+ <a name="WroteMagnetometerPeriod"></a>`WroteMagnetometerPeriod` – The <code>WroteMagnetometerPeriod</code> event is run after the Micro:bit reports its period
 as requested by an earlier call to the
 <a href="#ReadMagnetometerPeriod"><code>ReadAccelerometerPeriod</code></a> method.

 __Parameters__:

     * <code>Magnetometer_Period</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The reporting periodf or the Micro:bit's magnetometer, in milliseconds.

![when Microbit_Magnetometer1 WroteMagnetometerPeriod Magnetometer_Period do](blocks/Microbit_Magnetometer.WroteMagnetometerPeriod.svg)


