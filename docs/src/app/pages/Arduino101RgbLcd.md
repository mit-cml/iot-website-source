# Arduino101RgbLcd

The Arduino 101 RGB LCD lets users communicate information on a liquid crystal display (LCD) with optional RGB LED backlight.<br><img src='/assets/sensors/Grove-RGBLCD.jpg' width='50%'><br><strong>Note:</strong> The RGB LCD display requires 5V power rather than 3.3V. If you areconnecting it with the Grove Shield, you will need to make sure the voltage switch is in the 5V position otherwise the display may not function correctly.<br>

<strong>More Links</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101RgbLcd.aia' target='_blank'>sample project</a> for the .</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_RgbLcd.pdf' target='_blank'>how to instructions</a> for the RGB LCD.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101RgbLcd1 BluetoothDevice ](blocks/Arduino101RgbLcd.BluetoothDevice_getter.svg)


![set Arduino101RgbLcd1 BluetoothDevice  to](blocks/Arduino101RgbLcd.BluetoothDevice_setter.svg)

## Methods

+ <a name="GetBackgroundColor"></a>`GetBackgroundColor` – Request the current background color from the device. The color will be returned through the
 <a href='#BackgroundColorReceived"><code>BackgroundColorReceived</code></a> event.

![call Arduino101RgbLcd1 GetBackgroundColor](blocks/Arduino101RgbLcd.GetBackgroundColor.svg)

+ <a name="GetText"></a>`GetText` – Get the text currently shown on the screen. The text will be returned through the <a
 href="#TextReceived"><code>TextReceived</code></a> event.

![call Arduino101RgbLcd1 GetText](blocks/Arduino101RgbLcd.GetText.svg)

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101RgbLcd1 IsSupported](blocks/Arduino101RgbLcd.IsSupported.svg)

+ <a name="SetBackgroundColor"></a>`SetBackgroundColor` – Set the background color of the RGB LCD connected to the Arduino 101. This method can take
 any of the color blocks or a color composed using the <a
 href="http://appinventor.mit.edu/explore/ai2/support/blocks/colors.html#make">make a color</a>
 block. The RGB LCD does not have the same range of colors as a computer screen, so you may not
 observe changes between similar colors.

 __Parameters__:

     * <code>color</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/colors.html#basic">_color_</a>) &mdash;
       The color to change the background color to.

![call Arduino101RgbLcd1 SetBackgroundColorcolor](blocks/Arduino101RgbLcd.SetBackgroundColor.svg)

+ <a name="SetText"></a>`SetText` – Set the text of the display. Text is limited to string with not more than 2 lines of 16
 characters each. If a line is longer than 16 characters, it will be truncated.

 __Parameters__:

     * <code>text</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/text.html#string">_text_</a>) &mdash;
       The text to show on the LCD. This is limited to two 16-character strings separated by a newline "\n"

![call Arduino101RgbLcd1 SetTexttext](blocks/Arduino101RgbLcd.SetText.svg)

## Events

+ <a name="BackgroundColorReceived"></a>`BackgroundColorReceived` – The <code>BackgroundColorReceived</code> event is run when the background color information is
 successfully received from the Arduino 101.

 __Parameters__:

     * <code>color</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/colors.html#basic">_color_</a>) &mdash;
       The current color of the background.

![when Arduino101RgbLcd1 BackgroundColorReceived color do](blocks/Arduino101RgbLcd.BackgroundColorReceived.svg)

+ <a name="TextReceived"></a>`TextReceived` – The <code>TextReceived</code> event is run when the text currently displayed on the RGB LCD is
 received from the Arduino 101 in response to a call to
 <a href="#GetText"><code>GetText</code></a>.

 __Parameters__:

     * <code>text</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/text.html#string">_text_</a>) &mdash;
       The text currently being shown on the RGB LCD. Note that this may not match the
       characters being shown due to a limited range of Unicode support for the LCD.

![when Arduino101RgbLcd1 TextReceived text do](blocks/Arduino101RgbLcd.TextReceived.svg)


