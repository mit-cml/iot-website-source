# Microbit\_Magnetometer

The <code>Microbit_Magnetometer</code> provides the ability to configure the BBC micro:bit's on-board magnetometer and receive one or more magnetometer samples via the appropriate methods.

<strong>More links:</strong><ul><li>Download a <a href='/assets/samples/MicrobitMagnetometer.aia' target='_blank'>sample projects</a> for the micro:bit onboard magnetometer.</li><li>View the <a href='/assets/howtos/MIT_App_Inventor_Microbit_Magnetometer.pdf' target='_blank'>how to instructions</a> for the micro:bit onboard magnetometer</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component connected to the micro:bit device (setter).


![get Microbit_Magnetometer1 BluetoothDevice ](blocks/Microbit_Magnetometer.BluetoothDevice_getter.svg)


![set Microbit_Magnetometer1 BluetoothDevice  to](blocks/Microbit_Magnetometer.BluetoothDevice_setter.svg)

## Methods

+ <a name="ReadMagnetometerBearing"></a>`ReadMagnetometerBearing` – Read a single bearing sample from the micro:bit. On successful read, the
 <a href="#MagnetometerBearingReceived"><code>MagnetometerBearingReceived</code></a> event
 will be run.

![call Microbit_Magnetometer1 ReadMagnetometerBearing](blocks/Microbit_Magnetometer.ReadMagnetometerBearing.svg)

+ <a name="ReadMagnetometerData"></a>`ReadMagnetometerData` – Read a single sample of magnetometer data from the micro:bit. On successful read, the
 <a href="#MagnetometerDataReceived"><code>MagnetometerDataReceived</code></a> event will be
 run.

![call Microbit_Magnetometer1 ReadMagnetometerData](blocks/Microbit_Magnetometer.ReadMagnetometerData.svg)

+ <a name="ReadMagnetometerPeriod"></a>`ReadMagnetometerPeriod` – Read the current report rate for the micro:bit magnetometer. After the period is read, it will
 be received by the
 <a href="#MagnetometerPeriodReceived"><code>MagnetometerPeriodReceived</code></a> event.

![call Microbit_Magnetometer1 ReadMagnetometerPeriod](blocks/Microbit_Magnetometer.ReadMagnetometerPeriod.svg)

+ <a name="RequestMagnetometerBearingUpdates"></a>`RequestMagnetometerBearingUpdates` – Request notifications of changes in the micro:bit's bearing. Changes in the bearing will be
 reported at a rate determined by the last period value set by a call to
 <a href="#WriteMagnetometerPeriod"><code>WriteMagnetometerPeriod</code></a>. Bearing data
 will be reported through the
 <a href="#MagnetometerBearingReceived"><code>MagnetometerBearingReceived</code></a> event.

![call Microbit_Magnetometer1 RequestMagnetometerBearingUpdates](blocks/Microbit_Magnetometer.RequestMagnetometerBearingUpdates.svg)

+ <a name="RequestMagnetometerDataUpdates"></a>`RequestMagnetometerDataUpdates` – Request notifications of changes in the micro:bit's magnetometer. Changes in the magnetometer
 will be reported at a rate determined by the last period value set by a call to
 <a href="#WriteMagnetometerPeriod"><code>WriteMagnetometerPeriod</code></a>. Magnetometer
 data will be reported through the
 <a href="#MagnetometerDataReceived"><code>MagnetometerDataReceived</code></a> event.

![call Microbit_Magnetometer1 RequestMagnetometerDataUpdates](blocks/Microbit_Magnetometer.RequestMagnetometerDataUpdates.svg)

+ <a name="StopMagnetometerBearingUpdates"></a>`StopMagnetometerBearingUpdates` – Stop receiving updates from the micro:bit's magnetometer. Note that there may be pending
 messages from the device that will still be reported through the
 <a href="#MagnetometerBearingReceived"><code>MagnetometerBearingReceived</code></a> event.

![call Microbit_Magnetometer1 StopMagnetometerBearingUpdates](blocks/Microbit_Magnetometer.StopMagnetometerBearingUpdates.svg)

+ <a name="StopMagnetometerDataUpdates"></a>`StopMagnetometerDataUpdates` – Stop receiving updates from the micro:bit's magnetometer. Note that there may be pending
 messages from the device that will still be reported through the
 <a href="#MagnetometerDataReceived"><code>MagnetometerDataReceived</code></a> event.

![call Microbit_Magnetometer1 StopMagnetometerDataUpdates](blocks/Microbit_Magnetometer.StopMagnetometerDataUpdates.svg)

+ <a name="WriteMagnetometerPeriod"></a>`WriteMagnetometerPeriod` – Use the <code>WriteMagnetometerPeriod</code> method to change how frequently the micro:bit
 sends magnetometer data to App Inventor. The period is measured in milliseconds. According to
 the micro:bit specification, valid values are 1, 2, 5, 10, 20, 80, 160 and 640 milliseconds.

 __Parameters__:

     * <code>Magnetometer_Period</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The new magnetometer reporting period, in milliseconds.

![call Microbit_Magnetometer1 WriteMagnetometerPeriodMagnetometer_Period](blocks/Microbit_Magnetometer.WriteMagnetometerPeriod.svg)

## Events

+ <a name="MagnetometerBearingReceived"></a>`MagnetometerBearingReceived` – The <code>MagnetometerBearingReceived</code> event is run whenever bearing samples are
 received from the micro:bit. This is usually a result of performing a
 <a href="#ReadMagnetometerBearing">read</a> or
 <a href="#RequestMagnetometerBearingUpdates">request</a> operation. The bearing value is
 reported as degrees relative to North.

 __Parameters__:

     * <code>bearing_value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The bearing from North, in degrees.

![when Microbit_Magnetometer1 MagnetometerBearingReceived bearing_value do](blocks/Microbit_Magnetometer.MagnetometerBearingReceived.svg)

+ <a name="MagnetometerDataReceived"></a>`MagnetometerDataReceived` – The <code>MagnetometerDataReceived</code> event is run whenever magnetometer samples are
 received from the micro:bit. This is usually a result of performing a
 <a href="#ReadMagnetometerData">read</a> or
 <a href="#RequestMagnetometerDataUpdates">request</a> operation. The X, Y, and Z values are in
 milli-teslas, and so should be scaled by 1/1000.

 __Parameters__:

    + <code>Magnetometer_X</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The X value of the magnetometer, in milliT.
    + <code>Magnetometer_Y</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The Y value of the magnetometer, in milliT.
    + <code>Magnetometer_Z</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The Z value of the magnetometer, in milliT.

![when Microbit_Magnetometer1 MagnetometerDataReceived Magnetometer_X Magnetometer_Y Magnetometer_Z do](blocks/Microbit_Magnetometer.MagnetometerDataReceived.svg)

+ <a name="MagnetometerPeriodReceived"></a>`MagnetometerPeriodReceived` – The <code>MagnetometerPeriodReceived</code> event is run after the micro:bit's magnetometer
 period is read from the device.

 __Parameters__:

     * <code>Magnetometer_Period</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The current reporting interval for the micro:bit's magnetometer, in milliseconds.

![when Microbit_Magnetometer1 MagnetometerPeriodReceived Magnetometer_Period do](blocks/Microbit_Magnetometer.MagnetometerPeriodReceived.svg)

+ <a name="WroteMagnetometerPeriod"></a>`WroteMagnetometerPeriod` – The <code>WroteMagnetometerPeriod</code> event is run after the micro:bit reports its period
 as requested by an earlier call to the
 <a href="#ReadMagnetometerPeriod"><code>ReadAccelerometerPeriod</code></a> method.

 __Parameters__:

     * <code>Magnetometer_Period</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The reporting periodf or the micro:bit's magnetometer, in milliseconds.

![when Microbit_Magnetometer1 WroteMagnetometerPeriod Magnetometer_Period do](blocks/Microbit_Magnetometer.WroteMagnetometerPeriod.svg)


