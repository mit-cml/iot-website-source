# Microbit\_Temperature

The <code>Microbit_Temperature</code> sensor provides App Inventor users with the ability to configure the BBC micro:bit's on-board temperature sensor and receive one or more temperature samples via the appropriate methods.<br>

The temperature sensor's reportrate, or period, determines how frequently data will be sent to App Inventor.<br>

<strong>More links:</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/MicrobitTemperature.aia' target='_blank'>sample project</a> for the micro:bit temperature sensor.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_Microbit_Temperature.pdf' target='_blank'>how to instructions</a> for the micro:bit temperature sensor.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component connected to the micro:bit device (setter).


![get Microbit_Temperature1 BluetoothDevice ](blocks/Microbit_Temperature.BluetoothDevice_getter.svg)


![set Microbit_Temperature1 BluetoothDevice  to](blocks/Microbit_Temperature.BluetoothDevice_setter.svg)

## Methods

+ <a name="ReadTemperature"></a>`ReadTemperature` – Read a single sample of temperature data from the micro:bit. On successful read, the
 <a href="#TemperatureDataReceived"><code>TemperatureDataReceived</code></a> event will be run.

![call Microbit_Temperature1 ReadTemperature](blocks/Microbit_Temperature.ReadTemperature.svg)

+ <a name="ReadTemperaturePeriod"></a>`ReadTemperaturePeriod` – Read the current report rate for the micro:bit's temperature sensor. After the period is read,
 it will be received by the
 <a href="#TemperaturePeriodReceived"><code>TemperaturePeriodReceived</code></a> event.

![call Microbit_Temperature1 ReadTemperaturePeriod](blocks/Microbit_Temperature.ReadTemperaturePeriod.svg)

+ <a name="RequestTemperatureUpdates"></a>`RequestTemperatureUpdates` – Request notifications of changes in the micro:bit's temperature sensor. Changes in the
 temperature will be reported at a rate determined by the last period value set by a call to
 <a href="#WriteTemperaturePeriod"><code>WriteTemperaturePeriod</code></a>. Temperature data
 will be reported through the
 <a href="#TemperatureDataReceived"><code>TemperatureDataReceived</code></a> event.

![call Microbit_Temperature1 RequestTemperatureUpdates](blocks/Microbit_Temperature.RequestTemperatureUpdates.svg)

+ <a name="StopTemperatureUpdates"></a>`StopTemperatureUpdates` – Stop receiving updates from the micro:bit's temperature sensor. Note that there may be
 pending messages from the device that will still be reported through the
 <a href="#TemperatureDataReceived"><code>TemperatureDataReceived</code></a> event.

![call Microbit_Temperature1 StopTemperatureUpdates](blocks/Microbit_Temperature.StopTemperatureUpdates.svg)

+ <a name="WriteTemperaturePeriod"></a>`WriteTemperaturePeriod` – Use the <code>WriteTemperaturePeriod</code> method to change how frequently the micro:bit sends
 temperature data to App Inventor. The period is measured in milliseconds.

 __Parameters__:

     * <code>temperature_period_value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The new reporting period for the micro:bit's temperature sensor.

![call Microbit_Temperature1 WriteTemperaturePeriodtemperature_period_value](blocks/Microbit_Temperature.WriteTemperaturePeriod.svg)

## Events

+ <a name="TemperaturePeriodReceived"></a>`TemperaturePeriodReceived` – The <code>TemperaturePeriodReceived</code> event is run after the micro:bit's temperature
 reporting period is read from the device.

 __Parameters__:

     * <code>temperature_period_value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The current reporting interval for the micro:bit's temperature sensor.

![when Microbit_Temperature1 TemperaturePeriodReceived temperature_period_value do](blocks/Microbit_Temperature.TemperaturePeriodReceived.svg)

+ <a name="TemperatureReceived"></a>`TemperatureReceived` – The <code>TemperatureReceived</code> event is run whenever temperature samples are received
 from the micro:bit. This is usually a result of performing a
 <a href="#ReadTemperature">read</a> or <a href="#RequestTemperatureUpdates">request updates</a>
 operation. The temperature value is measured in degrees Celsius.

 __Parameters__:

     * <code>temperature_value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The temperature measured by the micro:bit, in degrees Celsius

![when Microbit_Temperature1 TemperatureReceived temperature_value do](blocks/Microbit_Temperature.TemperatureReceived.svg)

+ <a name="WroteTemperaturePeriod"></a>`WroteTemperaturePeriod` – The <code>WroteTemperaturePeriod</code> event is run after the micro:bit's temperature
 reporting period is written to the device.

 __Parameters__:

     * <code>temperature_period_value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The new reporting interval for the micro:bit's temperature sensor.

![when Microbit_Temperature1 WroteTemperaturePeriod temperature_period_value do](blocks/Microbit_Temperature.WroteTemperaturePeriod.svg)


