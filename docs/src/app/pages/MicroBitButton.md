# Microbit\_Button

The <code>Microbit_Button</code> extension provides App Inventor with information about the state of the BBC micro:bit's buttons. Developers can use this extension to request updates for when a user presses a button or read the current state of the buttons. The buttons have three states:<br>
<ul><li>0 - up</li><li>1 - down</li><li>2 - long pressed</li></ul>

<strong>More links:</strong><ul><li>Download a <a href='/assets/samples/MicrobitButton.aia' target='_blank'>sample projects</a> for the micro:bit onboard buttons.</li><li>View the <a href='/assets/howtos/MIT_App_Inventor_Microbit_Button.pdf' target='_blank'>how to instructions</a> for the micro:bit onboard buttons</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component connected to the micro:bit device (setter).


![get Microbit_Button1 BluetoothDevice ](blocks/Microbit_Button.BluetoothDevice_getter.svg)


![set Microbit_Button1 BluetoothDevice  to](blocks/Microbit_Button.BluetoothDevice_setter.svg)

## Methods

+ <a name="ReadButtonAState"></a>`ReadButtonAState` – Read the current state of the micro:bit's A button. After a successful read, the
 <a href="#ButtonAStateReceived"><code>ButtonAStateReceived</code></a> event will be run.

![call Microbit_Button1 ReadButtonAState](blocks/Microbit_Button.ReadButtonAState.svg)

+ <a name="ReadButtonBState"></a>`ReadButtonBState` – Read the current state of the micro:bit's B button. After a successful read, the
 <a href="#ButtonBStateReceived"><code>ButtonBStateReceived</code></a> event will be run.

![call Microbit_Button1 ReadButtonBState](blocks/Microbit_Button.ReadButtonBState.svg)

+ <a name="RequestButtonAStateUpdates"></a>`RequestButtonAStateUpdates` – Request updates to the state of the micro:bit's A button. After requesting updates, the
 <a href="#ButtonAStateReceived"><code>ButtonAStateReceived</code></a> will be run whenever
 the micro:bit reports a button state change to the app. Pressing and holding the button
 will result in a second event with the value 2 to indicate a long press.

![call Microbit_Button1 RequestButtonAStateUpdates](blocks/Microbit_Button.RequestButtonAStateUpdates.svg)

+ <a name="RequestButtonBStateUpdates"></a>`RequestButtonBStateUpdates` – Request updates to the state of the micro:bit's B button. After requesting updates, the
 <a href="#ButtonBStateReceived"><code>ButtonBStateReceived</code></a> will be run whenever
 the micro:bit reports a button state change to the app. Pressing and holding the button will
 result in a second event with the value 2 to indicate a long press.

![call Microbit_Button1 RequestButtonBStateUpdates](blocks/Microbit_Button.RequestButtonBStateUpdates.svg)

+ <a name="StopButtonAStateUpdates"></a>`StopButtonAStateUpdates` – Stop receiving updates about the state of the micro:bit's A button. Note that there may
 be pending updates that have not been processed that will result in
 <a href="#ButtonAStateReceived"><code>ButtonAStateReceived</code></a>

![call Microbit_Button1 StopButtonAStateUpdates](blocks/Microbit_Button.StopButtonAStateUpdates.svg)

+ <a name="StopButtonBStateUpdates"></a>`StopButtonBStateUpdates` – Stop receiving updates about the state of the micro:bit's B button. Note that there may be
 pending updates that have not been processed that will result in
 <a href="#ButtonBStateReceived"><code>ButtonBStateReceived</code></a>.

![call Microbit_Button1 StopButtonBStateUpdates](blocks/Microbit_Button.StopButtonBStateUpdates.svg)

## Events

+ <a name="ButtonAStateReceived"></a>`ButtonAStateReceived` – After performing a <a href="#ReadButtonAState">read</a> or
 <a href="#RequestButtonAStateUpdates">request for updates</a>, the
 <code>ButtonAStateReceived</code> event will be run with information about the button state.

 __Parameters__:

   + <code>Button_State_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The state of the micro:bit's A button; 0 for released, 1 for pressed, 2 for long-pressed.

![when Microbit_Button1 ButtonAStateReceived Button_State_Value do](blocks/Microbit_Button.ButtonAStateReceived.svg)

+ <a name="ButtonBStateReceived"></a>`ButtonBStateReceived` – After performing a <a href="#ReadButtonBState">read</a> or
 <a href="#RequestButtonBStateUpdates">request for updates</a>, the
 <code>ButtonBStateReceived</code> event will be run with information about the button state.

 __Parameters__:

   + <code>Button_State_Value</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/math.html#number">_number_</a>) &mdash; The state of the micro:bit's B button; 0 for released, 1 for pressed, 2 for long-pressed.

![when Microbit_Button1 ButtonBStateReceived Button_State_Value do](blocks/Microbit_Button.ButtonBStateReceived.svg)


