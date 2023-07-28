# Microbit\_Accelerometer

The <code>Microbit_Accelerometer</code> component lets users configure the BBC micro:bit's on-board accelerometer and receive one or more accelerometer samples via the appropriate methods.<br>

The accelerometer's report rate, or period, determines how frequently data will be sent to App Inventor.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component connected to the micro:bit device (setter).


![get Microbit_Accelerometer1 BluetoothDevice ](blocks/Microbit_Accelerometer.BluetoothDevice_getter.svg)


![set Microbit_Accelerometer1 BluetoothDevice  to](blocks/Microbit_Accelerometer.BluetoothDevice_setter.svg)

## Methods

+ <a name="ReadAccelerometerData"></a>`ReadAccelerometerData` – Read a single sample of accelerometer data from the micro:bit. On successful read, the
 <a href="#AccelerometerDataReceived"><code>AccelerometerDataReceived</code></a>
 event will be run.

![call Microbit_Accelerometer1 ReadAccelerometerData](blocks/Microbit_Accelerometer.ReadAccelerometerData.svg)

+ <a name="ReadAccelerometerPeriod"></a>`ReadAccelerometerPeriod` – Read the current report rate for the micro:bit accelerometer. After the period is read, it will
 be received by the
 <a href="#AccelerometerPeriodReceived"><code>AccelerometerPeriodReceived</code></a> event.

![call Microbit_Accelerometer1 ReadAccelerometerPeriod](blocks/Microbit_Accelerometer.ReadAccelerometerPeriod.svg)

+ <a name="RequestAccelerometerDataUpdates"></a>`RequestAccelerometerDataUpdates` – Request notifications of changes in the micro:bit's accelerometer. Changes in the accelerometer
 will be reported at a rate determined by the last period value set by a call to
 <a href="#WriteAccelerometerPeriod"><code>WriteAccelerometerPeriod</code></a>. Accelerometer
 data will be reported through the
 <a href="#AccelerometerDataReceived"><code>AccelerometerDataReceived</code></a> event.

![call Microbit_Accelerometer1 RequestAccelerometerDataUpdates](blocks/Microbit_Accelerometer.RequestAccelerometerDataUpdates.svg)

+ <a name="StopAccelerometerDataUpdates"></a>`StopAccelerometerDataUpdates` – Stop receiving updates from the micro:bit's accelerometer. Note that there may be pending
 messages from the device that will still be reported through the
 <a href="#AccelerometerDataReceived"><code>AccelerometerDataReceived</code></a> event.

![call Microbit_Accelerometer1 StopAccelerometerDataUpdates](blocks/Microbit_Accelerometer.StopAccelerometerDataUpdates.svg)

+ <a name="WriteAccelerometerPeriod"></a>`WriteAccelerometerPeriod` – Use the <code>WriteAccelerometerPeriod</code> method to change how frequently the micro:bit
 sends accelerometer data to App Inventor. The period is measured in milliseconds. According to
 the micro:bit specification, valid values are 1, 2, 5, 10, 20, 80, 160, and 640 milliseconds.

 __Parameters__:

    + <code>period</code> (_number_) &mdash; The new accelerometer reporting period, in milliseconds.

![call Microbit_Accelerometer1 WriteAccelerometerPeriodperiod](blocks/Microbit_Accelerometer.WriteAccelerometerPeriod.svg)

## Events

+ <a name="AccelerometerDataReceived"></a>`AccelerometerDataReceived` – The <code>AccelerometerDataReceived</code> event is run whenever accelerometer samples are
 received from the micro:bit. This is usually a result of performing a
 <a href="#ReadAccelerometerData">read</a> or
 <a href="#RequestAccelerometerDataUpdates">request</a> operation.
 The X, Y, and Z values are in thousands of 1 Earth gravity (G=-9.8 m/s<sup>2</sup>), and so
 should be scaled by 1/1000.

 __Parameters__:

    + <code>Accelerometer_X</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The X value of the accelerometer, in milliG.
    + <code>Accelerometer_Y</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The Y value of the accelerometer, in milliG.
    + <code>Accelerometer_Z</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The Z value of the accelerometer, in milliG.

![when Microbit_Accelerometer1 AccelerometerDataReceived Accelerometer_X Accelerometer_Y Accelerometer_Z do](blocks/Microbit_Accelerometer.AccelerometerDataReceived.svg)

+ <a name="AccelerometerPeriodReceived"></a>`AccelerometerPeriodReceived` – The <code>AccelerometerPeriodReceived</code> event is run after the micro:bit's accelerometer
 period is read from the device.

 __Parameters__:

    + <code>Accelerometer_Period</code> (_number_) &mdash; The current reporting interval for the micro:bit's accelerometer, in milliseconds.

![when Microbit_Accelerometer1 AccelerometerPeriodReceived Accelerometer_Period do](blocks/Microbit_Accelerometer.AccelerometerPeriodReceived.svg)

+ <a name="WroteAccelerometerPeriod"></a>`WroteAccelerometerPeriod` – The <code>WroteAccelerometerPeriod</code> event is run after the micro:bit reports its period
 as requested by an earlier call to the
 <a href="#ReadAccelerometerPeriod"><code>ReadAccelerometerPeriod</code></a> method.

 __Parameters__:

    + <code>Accelerometer_Period</code> (_number_) &mdash; The reporting period for the micro:bit's accelerometer, in milliseconds.

![when Microbit_Accelerometer1 WroteAccelerometerPeriod Accelerometer_Period do](blocks/Microbit_Accelerometer.WroteAccelerometerPeriod.svg)


