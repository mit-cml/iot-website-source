# Arduino101Servo

The Arduino 101 Servo extension lets users remotely control servos connected toan Arduino 101.<br>

<strong>More Links</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101Servo.aia' target='_blank'>sample project</a> for the Arduino 101 Servo.</li><!--<li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Servo.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Servo.</li>--></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101Servo1 BluetoothDevice ](blocks/Arduino101Servo.BluetoothDevice_getter.svg)


![set Arduino101Servo1 BluetoothDevice  to](blocks/Arduino101Servo.BluetoothDevice_setter.svg)

+ <a name="Pin"></a>`Pin` – The Pin on the Arduino board that the device is wired in to.


![get Arduino101Servo1 Pin ](blocks/Arduino101Servo.Pin_getter.svg)


![set Arduino101Servo1 Pin  to](blocks/Arduino101Servo.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101Servo1 IsSupported](blocks/Arduino101Servo.IsSupported.svg)

+ <a name="SetPosition"></a>`SetPosition` – Set the rotation of a positional servo. Valid values are 0-180 degrees.

 __Parameters__:

     * <code>position</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The new position of the servo in degrees. Valid values are 0-180.

![call Arduino101Servo1 SetPositionposition](blocks/Arduino101Servo.SetPosition.svg)

+ <a name="SetPositionMicros"></a>`SetPositionMicros` – Set the time per revolution in microseconds of a continuous rotation servo. For a standard
 servo, 1000 is fully counterclockwise and 2000 is fully clockwise.

 __Parameters__:

     * <code>position</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The new rotational speed for a continuous rotational servo.

![call Arduino101Servo1 SetPositionMicrosposition](blocks/Arduino101Servo.SetPositionMicros.svg)

## Events

+ <a name="PositionWritten"></a>`PositionWritten` – The <code>PositionWritten</code> event is run after a successful write to the servo's position.
 The meaning of the <code>position</code> parameter depends on whether position update was
 triggered by a <a href="#SetPosition"><code>SetPosition</code></a> call or a
 <a href="#SetPositionMicros"><code>SetPositionMicros</code></a> call.

 __Parameters__:

     * <code>position</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The new position of the servo. If the call was positional, this will be in degrees. If the call was rotational, it will be in microseconds.

![when Arduino101Servo1 PositionWritten position do](blocks/Arduino101Servo.PositionWritten.svg)


