### Microbit_Accelerometer

The Microbit_Accelerometer component lets users configure the Micro:bit's on-board accelerometer and receive one or more accelerometer samples via the appropriate methods.<br><br>The accelerometer's report rate, or period, is 

#### Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – 


![get Microbit_Accelerometer1 BluetoothDevice ](blocks/Microbit_Accelerometer.BluetoothDevice_getter.svg)


![set Microbit_Accelerometer1 BluetoothDevice  to](blocks/Microbit_Accelerometer.BluetoothDevice_setter.svg)

#### Methods

+ <a name="ReadAccelerometerData"></a>`ReadAccelerometerData` – Read a single sample of accelerometer data from the micro:bit. On successful read, the
 <a href="#AccelerometerDataReceived"><code>AccelerometerDataReceived</code></a>
 event will be run.

![call Microbit_Accelerometer1 ReadAccelerometerData](blocks/Microbit_Accelerometer.ReadAccelerometerData.svg)

+ <a name="ReadAccelerometerPeriod"></a>`ReadAccelerometerPeriod` – Method for ReadAccelerometerPeriod

![call Microbit_Accelerometer1 ReadAccelerometerPeriod](blocks/Microbit_Accelerometer.ReadAccelerometerPeriod.svg)

+ <a name="RequestAccelerometerDataUpdates"></a>`RequestAccelerometerDataUpdates` – Method for RequestAccelerometerDataUpdates

![call Microbit_Accelerometer1 RequestAccelerometerDataUpdates](blocks/Microbit_Accelerometer.RequestAccelerometerDataUpdates.svg)

+ <a name="StopAccelerometerDataUpdates"></a>`StopAccelerometerDataUpdates` – Method for StopAccelerometerDataUpdates

![call Microbit_Accelerometer1 StopAccelerometerDataUpdates](blocks/Microbit_Accelerometer.StopAccelerometerDataUpdates.svg)

+ <a name="WriteAccelerometerPeriod"></a>`WriteAccelerometerPeriod` – Use the <code>WriteAccelerometerPeriod</code> method to change how frequently the Micro:bit
 sends accelerometer data to App Inventor. The period is measured in milliseconds. According to
 the micro:bit specification, valid values are 1, 2, 5, 10, 20, 80, 160, and 640 ms.
    + <code>period</code> &mdash; The new accelerometer reporting period, in ms.

![call Microbit_Accelerometer1 WriteAccelerometerPeriodperiod](blocks/Microbit_Accelerometer.WriteAccelerometerPeriod.svg)

#### Events

+ <a name="AccelerometerDataReceived"></a>`AccelerometerDataReceived` – The <code>AccelerometerDataReceived</code> event is run whenever accelerometer samples are
 received from the micro:bit. This is usually a result of performing a
 <a href="#ReadAccelerometerData">read</a> or
 <a href="#RequestAccelerometerDataUpdates">request</a> operation.
 The X, Y, and Z values are in thousands of 1 Earth gravity (G=-9.8 m/s<sup>2</sup>), and so
 should be scaled by 1/1000.
    + <code>Accelerometer_X</code> &mdash; The X value of the accelerometer, in milliG.
    + <code>Accelerometer_Y</code> &mdash; The Y value of the accelerometer, in milliG.
    + <code>Accelerometer_Z</code> &mdash; The Z value of the accelerometer, in milliG.

![when Microbit_Accelerometer1 AccelerometerDataReceived Accelerometer_X Accelerometer_Y Accelerometer_Z do](blocks/Microbit_Accelerometer.AccelerometerDataReceived.svg)

+ <a name="AccelerometerPeriodReceived"></a>`AccelerometerPeriodReceived` – Event for AccelerometerPeriodReceived

![when Microbit_Accelerometer1 AccelerometerPeriodReceived Accelerometer_Period do](blocks/Microbit_Accelerometer.AccelerometerPeriodReceived.svg)

+ <a name="WroteAccelerometerPeriod"></a>`WroteAccelerometerPeriod` – Event for WroteAccelerometerPeriod

![when Microbit_Accelerometer1 WroteAccelerometerPeriod Accelerometer_Period do](blocks/Microbit_Accelerometer.WroteAccelerometerPeriod.svg)


