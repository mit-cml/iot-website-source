# Arduino101Button

The Arduino101Button component lets users listen to events triggered by a button connected to a digital pin on the Arduino. The extension responds to voltage changes on the specified digital <code>Pin</code> and so can be used to respond to any hardware component that signals high/low based on some external phenomenon, such as a motion detector.<br>

<strong>More links:</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101Button.aia' target='_blank'>sample project</a> for the Arduino 101 Button.</li><li>View the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Button.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Button.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101Button1 BluetoothDevice ](blocks/Arduino101Button.BluetoothDevice_getter.svg)


![set Arduino101Button1 BluetoothDevice  to](blocks/Arduino101Button.BluetoothDevice_setter.svg)

+ <a name="Pin"></a>`Pin` – The Pin on the Arduino board that the device is wired in to.


![get Arduino101Button1 Pin ](blocks/Arduino101Button.Pin_getter.svg)


![set Arduino101Button1 Pin  to](blocks/Arduino101Button.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101Button1 IsSupported](blocks/Arduino101Button.IsSupported.svg)

+ <a name="ReadButtonState"></a>`ReadButtonState` – Read the current state of the button as reported by the Arduino. On success, the
 <a href="#ButtonStateReceived"><code>ButtonStateReceived</code></a> event will be run. If the
 state of the button has changed, the <a href="#Pressed"><code>Pressed</code></a> or
 <a href="#Released"><code>Released</code></a> events will be run as well.

![call Arduino101Button1 ReadButtonState](blocks/Arduino101Button.ReadButtonState.svg)

+ <a name="RequestButtonStateUpdates"></a>`RequestButtonStateUpdates` – Request notifications from the Arduino for changes in the button state. The <a
 href="#ButtonStateReceived"><code>ButtonStateReceived</code></a> event will be run after
 every sample is received, even if no change occurs. If a change in the state occurs, either
 the <a href="#Pressed"><code>Pressed</code></a> or the <a
 href="#Released"><code>Released</code></a> event will be run.

![call Arduino101Button1 RequestButtonStateUpdates](blocks/Arduino101Button.RequestButtonStateUpdates.svg)

+ <a name="StopButtonStateUpdates"></a>`StopButtonStateUpdates` – Stop listening for notifications of button states from the Arduino. This only has an effect
 if there was a previous call to <a
 href="#RequestButtonStateUpdates"><code>RequestButtonStateUpdates</code></a>. There may be
 additional pending messages that will be processed after this call, so if accuracy in the
 data delivery are important an additional variable should be used to track the state of
 event processing.

![call Arduino101Button1 StopButtonStateUpdates](blocks/Arduino101Button.StopButtonStateUpdates.svg)

## Events

+ <a name="ButtonStateReceived"></a>`ButtonStateReceived` – The <code>ButtonStateReceived</code> event is run when any button state is received by the
 Bluetooth low energy component from the Arduino. This state value may be the same for
 extended periods of time if the button switch is left in an open or closed state.

 __Parameter__:

     * <code>Button_State</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The button state: 0 if released, 1 if pressed.

![when Arduino101Button1 ButtonStateReceived Button_State do](blocks/Arduino101Button.ButtonStateReceived.svg)

+ <a name="Pressed"></a>`Pressed` – The <code>Pressed</code> event is run when a button state is observed to go from a low signal
 to a high signal, indicating that the button switch has been pressed and the circuit is closed.

![when Arduino101Button1 Presseddo](blocks/Arduino101Button.Pressed.svg)

+ <a name="Released"></a>`Released` – The <code>Released</code> event is run when a button state is observed to go from a high signal
 to a low signal, indicating that the button switch has been released and the circuit is open.

![when Arduino101Button1 Releaseddo](blocks/Arduino101Button.Released.svg)


