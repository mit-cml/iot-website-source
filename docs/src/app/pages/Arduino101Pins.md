# Arduino101Pins

The Arduino101Pins extension provides a general purpose interface to any hardware connected to the Arduino's digital or analog I/O pins.

## Properties

+ <a name="Analog"></a>`Analog` – Set or get whether the pin is an analog pin (true) or digital pin (false). Default: digital (false).


![get Arduino101Pins1 Analog ](blocks/Arduino101Pins.Analog_getter.svg)


![set Arduino101Pins1 Analog  to](blocks/Arduino101Pins.Analog_setter.svg)

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101Pins1 BluetoothDevice ](blocks/Arduino101Pins.BluetoothDevice_getter.svg)


![set Arduino101Pins1 BluetoothDevice  to](blocks/Arduino101Pins.BluetoothDevice_setter.svg)

+ <a name="Output"></a>`Output` – Set or get whether the pin is an input or output pin. This only applies to digital pins. Analog pins are read-only. See the <a href="#/component/arduinopwm">Arduino 101 PWM</a> extension for treating digital pins as 'analog' outputs. Default: input (false).


![get Arduino101Pins1 Output ](blocks/Arduino101Pins.Output_getter.svg)


![set Arduino101Pins1 Output  to](blocks/Arduino101Pins.Output_setter.svg)

+ <a name="Pin"></a>`Pin` – The Arduino pin to read or write. Default: 0.


![get Arduino101Pins1 Pin ](blocks/Arduino101Pins.Pin_getter.svg)


![set Arduino101Pins1 Pin  to](blocks/Arduino101Pins.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Check whether the feature is currently available for the device connected via the
 <a href="#BluetoothDevice"><code>BluetoothDevice</code></a> property. If no device is currently
 connected, this method will always return false.

![call Arduino101Pins1 IsSupported](blocks/Arduino101Pins.IsSupported.svg)

+ <a name="ReadPinState"></a>`ReadPinState` – Read the current state of the pin. After the value is read, it will be reported through the
 <code><a href="#PinStateReceived">PinStateReceived</a></code> event.

![call Arduino101Pins1 ReadPinState](blocks/Arduino101Pins.ReadPinState.svg)

+ <a name="RequestPinStateUpdates"></a>`RequestPinStateUpdates` – Request updates to the state of the pin. New values will be reported by the
 <code><a href="#PinStateReceived">PinStateReceived</a></code>
 event.

![call Arduino101Pins1 RequestPinStateUpdates](blocks/Arduino101Pins.RequestPinStateUpdates.svg)

+ <a name="UnregisterForUpdates"></a>`UnregisterForUpdates` – Stop receiving updates for the pin. Note that there still may be pending notifications to the
 <code>PinStateReceived</code> event that will need to be processed after this call.

![call Arduino101Pins1 UnregisterForUpdates](blocks/Arduino101Pins.UnregisterForUpdates.svg)

+ <a name="WritePinState"></a>`WritePinState` – Write a new value for the pin. This is only a valid operation if the Output property is set
 to true. For digital pins, a non zero value will be converted to 1 (HIGH) and a zero value will
 be converted to 0 (LOW). For analog pins, the value must be between 0 and 1023, inclusive. Any
 values outside of this range will be truncated. To write analog outputs to digital pins using
 pulse width modulation, see the <a href="#/arduino101/arduinopwm">Arduino101PWM</a> extension.

 __Parameters__:

     * <code>value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The value to write to the pin. Valid values depend on whether the pin is digital or analog.

![call Arduino101Pins1 WritePinStatevalue](blocks/Arduino101Pins.WritePinState.svg)

## Events

+ <a name="PinStateReceived"></a>`PinStateReceived` – After the pin is read or an update is received, the <code>PinStateReceived</code> event will
 be run to inform the app about the state of the pin. The value parameter will indicate the
 pin state. For digital pins, it will be either 0 for off or 1 for on. For analog pins, it will
 be an integer in the range [0, 1023].

 __Parameters__:

     * <code>value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The value of the pin read from the Arduino. Valid values depend on whether the pin
       is digital or analog. For digital pins, a 0 indicates LOW and 1 indicates HIGH.
       For analog, an integer in the range of [0, 1023] will be returned.

![when Arduino101Pins1 PinStateReceived value do](blocks/Arduino101Pins.PinStateReceived.svg)

+ <a name="PinStateWritten"></a>`PinStateWritten` – After the pin is written, the <code>PinStateWritten</code> event will be run to indicate a
 successful operation. The value parameter will indicate the value written to the Arduino from
 the App Inventor app, not necessarily the value passed by the caller to
 <code>WritePinState</code>. For example, in the case of the analog pins the value will be
 truncated to fit within the range of [0, 1023].

 __Parameters__:

     * <code>value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash;
       The value written to the Arduino. Valid values depend on whether the pin is
       digital or analog. This value is the value written after any transformation by
       the extension to fit the range appropriate to the pin type.

![when Arduino101Pins1 PinStateWritten value do](blocks/Arduino101Pins.PinStateWritten.svg)


