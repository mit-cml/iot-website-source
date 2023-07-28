# Microbit\_Io\_Pin

The <code>Microbit_Io_Pin</code> component lets users configure the BBC micro:bit's analog pins for input and output, and to read, write, and request notifications for the I/O pin states.

<strong>More links:</strong><ul><li>RGB LED control: <a href='/assets/samples/MicrobitIOpin_RGBLED.aia' target='_blank'>sample project</a> and <a href='/assets/howtos/MIT_App_Inventor_Microbit_IOpin_RGBLED.pdf'>tutorial</a>.</li><li>Read knob status: <a href='/assets/samples/MicrobitIOpin_potentiometer.aia' target='_blank'>sample project</a> and <a href='/assets/howtos/MIT_App_Inventor_Microbit_IOpin_potentiometer.pdf'>tutorial</a>.</li><li>Read switch status: <a href='/assets/samples/MicrobitIOpin_button.aia' target='_blank'>sample project</a> and <a href='/assets/howtos/MIT_App_Inventor_Microbit_IOpin_button.pdf'>tutorial</a>.</li></ul>
 
## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component connected to the micro:bit device (setter).


![get Microbit_Io_Pin1 BluetoothDevice ](blocks/Microbit_Io_Pin.BluetoothDevice_getter.svg)


![set Microbit_Io_Pin1 BluetoothDevice  to](blocks/Microbit_Io_Pin.BluetoothDevice_setter.svg)

## Methods

+ <a name="ReadPinADConfiguration"></a>`ReadPinADConfiguration` – Read the state of the micro:bit's pin configuration, specifically whether each pin is
 configured as digital (0 or 1) or analog (0 to 255). After a successful read, the
 <a href="#PinADConfigurationReceived"><code>PinADConfigurationReceived</code></a> event will
 be run.

![call Microbit_Io_Pin1 ReadPinADConfiguration](blocks/Microbit_Io_Pin.ReadPinADConfiguration.svg)

+ <a name="ReadPinData"></a>`ReadPinData` – Read a single sample of the pin states from the micro:bit. On successful read, the
 <a href="#PinDataReceived"><code>PinDataReceived</code></a> event will be run. Prior to reading
 the pins, one should configure the pins for input using the <a
 href="#WritePinIOConfiguration"><code>WritePinIOConfiguration</code></a> method.

![call Microbit_Io_Pin1 ReadPinData](blocks/Microbit_Io_Pin.ReadPinData.svg)

+ <a name="ReadPinIOConfiguration"></a>`ReadPinIOConfiguration` – Read the current input/output configuration of the micro:bit's pins. After a successful read,
 the <a href="#PinIOConfigurationReceived"><code>PinIOConfigurationReceived</code></a> event
 will be run.

![call Microbit_Io_Pin1 ReadPinIOConfiguration](blocks/Microbit_Io_Pin.ReadPinIOConfiguration.svg)

+ <a name="RequestPinDataUpdates"></a>`RequestPinDataUpdates` – Request updates to any micro:bit pins configured as input pins. After requesting updates, the
 <a href="#PinDataReceived"><code>PinDataReceived</code></a> will be run whenever the micro:bit
 reports changes to its input pins.

![call Microbit_Io_Pin1 RequestPinDataUpdates](blocks/Microbit_Io_Pin.RequestPinDataUpdates.svg)

+ <a name="StopPinDataUpdates"></a>`StopPinDataUpdates` – Stop receiving updates about the state of the micro:bit's I/O pins. Note that there may be
 pending updates that have not been processed that will result in additional
 <a href="#PinDataReceived"><code>PinDataReceived</code></a> events.

![call Microbit_Io_Pin1 StopPinDataUpdates](blocks/Microbit_Io_Pin.StopPinDataUpdates.svg)

+ <a name="WritePWMControl"></a>`WritePWMControl` – Writes the PWM control field on the micro:bit. The PWM control field is a variable length
 array of one or two instances of a data structure containing a 1-byte pin field (range 0-19),
 a 2-byte value field (range 0-1024), and a 4-byte period field (in milliseconds).

 __Parameters__:

     * <code>PWM\_Control\_Field</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#emptylist">_list_</a>) &mdash;
       The PWM control field data as defined in the WritePWMControl method description.

![call Microbit_Io_Pin1 WritePWMControlPWM_Control_Field](blocks/Microbit_Io_Pin.WritePWMControl.svg)

+ <a name="WritePinADConfiguration"></a>`WritePinADConfiguration` – The <code>WritePinADConfiguration</code> is used to configure whether pins on the micro:bit
 are analog or digital. The <code>Pin\_AD\_Config\_Value</code> is composed of three bytes that
 represent 19 bits, one for each pin on the micro:bit. A 0 bit indicates a digital pin and a
 1 bit indicates an analog pin. The
 <a href="#WrotePinADConfiguration"><code>WrotePinADConfiguration</code></a> event will be run
 after successfully writing a new pin configuration.

 __Parameters__:

     * <code>Pin\_AD\_Config\_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#emptylist">_list_</a>) &mdash;
       A list of 8-bit values that are composed into a 19-bit mask, one bit per pin on the micro:bit.

![call Microbit_Io_Pin1 WritePinADConfigurationPin_AD_Config_Value](blocks/Microbit_Io_Pin.WritePinADConfiguration.svg)

+ <a name="WritePinData"></a>`WritePinData` – The <code>WritePinData</code> is used to set the output values of the micro:bit's pins if
 configured as output pins using the
 <a href="#WritePinIOConfiguration"><code>WritePinIOConfiguration</code></a> method. After the
 pins are written, the <a href="#WrotePinData"><code>WrotePinData</code></a> event will be run.

 __Parameters__:

     * <code>IO\_Pin\_Data</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#makealist">_list_</a>) &mdash; A list of up to 19 values from 0-255 to be output to the micro:bit's pins.

![call Microbit_Io_Pin1 WritePinDataIO_Pin_Data](blocks/Microbit_Io_Pin.WritePinData.svg)

+ <a name="WritePinIOConfiguration"></a>`WritePinIOConfiguration` – The <code>WritePinIOConfiguration</code> method is used to configure the micro:bit's pins for
 input or output. The <code>Pin\_IO\_Config\_Value</code> parameter should be a 3-element list
 where each element is a number from 0-255 composing a 19-bit bitmask. A 0-bit indicates an
 output and a 1-bit indicates an input.

 __Parameters__:

     * <code>Pin_IO_Config_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#emptylist">_list_</a>) &mdash;
       A list of 8-bit values that are composed into a 19-bit mask, one bit per pin on the micro:bit.

![call Microbit_Io_Pin1 WritePinIOConfigurationPin_IO_Config_Value](blocks/Microbit_Io_Pin.WritePinIOConfiguration.svg)

## Events

+ <a name="PinADConfigurationReceived"></a>`PinADConfigurationReceived` – The <code>PinADConfigurationReceived</code> event is run after a successful call to the
 <a href="#ReadPinADConfiguration"><code>ReadPinADConfiguration</code></a> method is returned
 by the micro:bit.

 __Parameters__:

     * <code>Pin\_AD\_Config\_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#emptylist">_list_</a>) &mdash;
       A list of analog/digital pin states configured on the micro:bit.

![when Microbit_Io_Pin1 PinADConfigurationReceived Pin_AD_Config_Value do](blocks/Microbit_Io_Pin.PinADConfigurationReceived.svg)

+ <a name="PinDataReceived"></a>`PinDataReceived` – The <code>PinDataReceived</code> event will be run after the micro:bit sends the status of its
 input pins. This will typically follow calls to
 <a href="#ReadPinData"><code>ReadPinData</code></a> or
 <a href="#RequestPinData"><code>RequestPinData</code></a>.

 __Parameters__:

     * <code>IO_Pin_Data</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#makealist">_list_</a>) &mdash;
       The state of the micro:bit's input pins. Pins not configured for input will have 0 value.

![when Microbit_Io_Pin1 PinDataReceived IO_Pin_Data do](blocks/Microbit_Io_Pin.PinDataReceived.svg)

+ <a name="PinIOConfigurationReceived"></a>`PinIOConfigurationReceived` – The <code>PinIOConfigurationReceived</code> event will be run after the micro:bit's pins'
 input/output configuration is read. <code>Pin\_IO\_Config\_Value</code> will be a list of three
 bytes valued from 0-255 composing a 19-bit mask indicating the input or output state of each
 of the 19 pins provided by the micro:bit. A 0 bit indicates output and a 1 bit indicates input.

 __Parameters__:

     * <code>Pin\_IO\_Config\_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#emptylist">_list_</a>) &mdash;
       A list of 8-bit values that are composed into a 19-bit mask, one bit per pin on the micro:bit.

![when Microbit_Io_Pin1 PinIOConfigurationReceived Pin_IO_Config_Value do](blocks/Microbit_Io_Pin.PinIOConfigurationReceived.svg)

+ <a name="WrotePWMControl"></a>`WrotePWMControl` – The <code>WrotePWMControl</code> event is run after a successful write to the micro:bit's
 pulse-width modulation control service. The value of the control field that was written will
 be passed as the <code>PWM\_Control\_Field</code>.

 __Parameters__:

     * <code>PWM\_Control\_Field</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#emptylist">_list_</a>) &mdash;
       The control information written to the micro:bit.

![when Microbit_Io_Pin1 WrotePWMControl PWM_Control_Field do](blocks/Microbit_Io_Pin.WrotePWMControl.svg)

+ <a name="WrotePinADConfiguration"></a>`WrotePinADConfiguration` – The <code>WrotePinADConfiguration</code> event is run after a successful write to the
 micro:bit's configuration server for analog and digital pins. <code>Pin\_AD\_Config\_Value</code>
 will be the list of bytes that were written as part of the last call to the service.

 __Parameters__:

     * <code>Pin\_AD\_Config\_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#emptylist">_list_</a>) &mdash;
       A list of 8-bit values that are composed into a 19-bit mask, one bit per pin on the micro:bit.

![when Microbit_Io_Pin1 WrotePinADConfiguration Pin_AD_Config_Value do](blocks/Microbit_Io_Pin.WrotePinADConfiguration.svg)

+ <a name="WrotePinData"></a>`WrotePinData` – The <code>WrotePinData</code> event will be run after the micro:bit's output pins are
 successfully written by a call to the <a href="#WritePinData"><code>WritePinData</code></a>
 method.

 __Parameters__:

     * <code>IO\_Pin\_Data</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#makealist">_list_</a>) &mdash; A list of up to 19 values from 0-255 that were written to the micro:bit's
       pins from the last call to <a href="#WritePinData"><code>WritePinData</code></a>.

![when Microbit_Io_Pin1 WrotePinData IO_Pin_Data do](blocks/Microbit_Io_Pin.WrotePinData.svg)

+ <a name="WrotePinIOConfiguration"></a>`WrotePinIOConfiguration` – The <code>WrotePinIOConfiguration</code> event will run after a successful update of the
 micro:bit's input/output pin configuration. <code>Pin\_IO\_Config\_Value</code> that was sent to
 the device will be passed as a parameter to the event.

 __Parameters__:

     * <code>Pin\_IO\_Config\_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#emptylist">_list_</a>) &mdash;
       A list of 8-bit values that are composed into a 19-bit mask, one bit per pin on the micro:bit.

![when Microbit_Io_Pin1 WrotePinIOConfiguration Pin_IO_Config_Value do](blocks/Microbit_Io_Pin.WrotePinIOConfiguration.svg)


