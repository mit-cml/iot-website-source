# Microbit\_Led

The <code>Microbit_LED</code> extension provides App Inventor users with the ability to programmatically change the BBC micro:bit's 5x5 LED matrix, either by coding custom patterns or writing text strings. The scrolling speed of the display may also be customized.<br>

<strong>More links:</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/MicrobitLED.aia' target='_blank'>sample projects</a> for the micro:bit LED matrix.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_Microbit_LED.pdf' target='_blank'>how to instructions</a> for the micro:bit LED matrix.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component connected to the micro:bit device (setter).


![get Microbit_Led1 BluetoothDevice ](blocks/Microbit_Led.BluetoothDevice_getter.svg)


![set Microbit_Led1 BluetoothDevice  to](blocks/Microbit_Led.BluetoothDevice_setter.svg)

## Methods

+ <a name="ReadLEDMatrixState"></a>`ReadLEDMatrixState` – Read the current state of the LED matrix from the micro:bit. The LED matrix state will be
 reported through the <a href="#LEDMatrixStateReceived"><code>LEDMatrixStateReceived</code></a>
 event.

![call Microbit_Led1 ReadLEDMatrixState](blocks/Microbit_Led.ReadLEDMatrixState.svg)

+ <a name="ReadScrollingDelay"></a>`ReadScrollingDelay` – Read the current scroll delay for the micro:bit's LED matrix. After a successful read, the
 <a href="#ScrollingDelayReceived"><code>ScrollingDelayReceived</code></a> event will be run.

![call Microbit_Led1 ReadScrollingDelay](blocks/Microbit_Led.ReadScrollingDelay.svg)

+ <a name="WriteLEDMatrixState"></a>`WriteLEDMatrixState` – Write the state of the micro:bit's LED matrix. <code>LED_Matrix_State</code> should be a list
 of 5 numbers from 0-31 to indicate which LEDs should be turned on in each of the 5 rows of the
 LED matrix. From left to right, the values of the LEDs are 16, 8, 4, 2, 1. For example, if you
 want to turn on the LEDs in one row such that power states were 10011, you would send the value
 (16 + 2 + 1) or 19 for the row. After the write operation completes, the
 <a href="#WroteLEDMatrixState"><code>WroteLEDMatrixState</code></a> event will be run.

 __Parameters__:

     * <code>LED_Matrix_State</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#makealist">_list_</a>) &mdash; A list of 5 numbers, one for each row of the LED matrix, where each
       value is the integer value of the bit array for the nth row of the LED matrix.

![call Microbit_Led1 WriteLEDMatrixStateLED_Matrix_State](blocks/Microbit_Led.WriteLEDMatrixState.svg)

+ <a name="WriteLEDText"></a>`WriteLEDText` – Write text to the micro:bit's LED matrix. The rate at which each character appears on the
 micro:bit's display depends on the last scroll value written by
 <a href="#WriteScrollDelay"><code>WriteScrollDelay</code></a>. Due to the allowable length of
 Bluetooth low energy packets, the strings sent are restricted to 20 or more UTF-8 octets.
 Attempts to write strings longer than 20 octets will result in truncated messages.

 __Parameters__:

    + <code>LED_Text_Value</code> (_string_) &mdash; The text to write. Strings are limited to
      a length of 20 UTF-8 octets.

![call Microbit_Led1 WriteLEDTextLED_Text_Value](blocks/Microbit_Led.WriteLEDText.svg)

+ <a name="WriteScrollingDelay"></a>`WriteScrollingDelay` – Set the delay between characters displayed on the micro:bit's LED matrix, in milliseconds.
 After writing the value, the
 <a href="#WroteScrollingDelay"><code>WriteScrollingDelay</code></a> will be called.

 __Parameters__:

     * <code>Scrolling_Delay_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The delay between characters on the LED matrix, in milliseconds.

![call Microbit_Led1 WriteScrollingDelayScrolling_Delay_Value](blocks/Microbit_Led.WriteScrollingDelay.svg)

## Events

+ <a name="LEDMatrixStateReceived"></a>`LEDMatrixStateReceived` – The <code>LEDMatrixStateReceived</code> event is run when the state of the micro:bit's LED
 matrix is read from the device. The <code>LED_Matrix_State</code> is a list of 5 values, one
 for each row of the matrix. Each value is an number from 0-31. From left to right, the LEDs
 are valued 16, 8, 4, 2, 1.<br>

 __Parameters__:

    + <code>LED_Matrix_State</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#makealist">_list_</a>) &mdash; A list of 5 values, one for each row, with
      each value being between 0-31 to indicate which LEDs in that row are on.

![when Microbit_Led1 LEDMatrixStateReceived LED_Matrix_State do](blocks/Microbit_Led.LEDMatrixStateReceived.svg)

+ <a name="ScrollingDelayReceived"></a>`ScrollingDelayReceived` – The <code>Scrolling_Delay_Value</code> event will be run after requesting the scrolling delay
 for the micro:bit's LED matrix through the
 <a href="#ReadScrollingDelay><code>ReadScrollingDelay</code></a> method.

 __Parameters__:

     * <code>Scrolling_Delay_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The delay between characters on the LED matrix, in milliseconds.

![when Microbit_Led1 ScrollingDelayReceived Scrolling_Delay_Value do](blocks/Microbit_Led.ScrollingDelayReceived.svg)

+ <a name="WroteLEDMatrixState"></a>`WroteLEDMatrixState` – The <code>WriteLEDMatrixState</code> event will be run after the micro:bit's LED matrix is
 written due to a call to <a href="#WriteLEDMatrixState"><code>WriteLEDMatrixState</code></a>.
 The LED_Matrix_State will be the same as in the call to <code>WriteLEDMatrixState</code> to
 differentiate the response to potentially many calls to write the LED matrix.

 __Parameters__:

     * <code>LED_Matrix_State</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/lists.html#makealist">_list_</a>) &mdash; The values written to the LED matrix as specified in the previous call
       to

![when Microbit_Led1 WroteLEDMatrixState LED_Matrix_State do](blocks/Microbit_Led.WroteLEDMatrixState.svg)

+ <a name="WroteLEDText"></a>`WroteLEDText` – The <code>WroteLEDText</code> event will be run after text is written to the micro:bit's LED
 matrix through a call to <a href="#WriteLEDText"><code>WriteLEDText</code></a>. The value of
 the written text will be given by the <code>LED_Text_Value</code> parameter.

 __Parameters__:

     * <code>LED_Text_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/text.html#string">_text_</a>) &mdash; The text to write to the LED matrix.

![when Microbit_Led1 WroteLEDText LED_Text_Value do](blocks/Microbit_Led.WroteLEDText.svg)

+ <a name="WroteScrollingDelay"></a>`WroteScrollingDelay` – The <code>WroteScrollingDelay</code> event will be run after the micro:bit's scrolling delay
 is successfully read after a call to the
 <a href="#WriteScrollingDelay"><code>WriteScrollingDelay</code></a> method.

 __Parameters__:

     * <code>Scrolling_Delay_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The delay between characters on the LED matrix, in milliseconds.

![when Microbit_Led1 WroteScrollingDelay Scrolling_Delay_Value do](blocks/Microbit_Led.WroteScrollingDelay.svg)


