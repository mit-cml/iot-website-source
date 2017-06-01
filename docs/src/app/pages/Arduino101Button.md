# Arduino101Button

An extension for the Arduino 101 to interact with buttons attached to digital pins.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component with a connection to the Arduino 101.


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

+ <a name="ReadButtonState"></a>`ReadButtonState` – Method for ReadButtonState

![call Arduino101Button1 ReadButtonState](blocks/Arduino101Button.ReadButtonState.svg)

+ <a name="RequestButtonStateUpdates"></a>`RequestButtonStateUpdates` – Method for RequestButtonStateUpdates

![call Arduino101Button1 RequestButtonStateUpdates](blocks/Arduino101Button.RequestButtonStateUpdates.svg)

+ <a name="StopButtonStateUpdates"></a>`StopButtonStateUpdates` – Method for StopButtonStateUpdates

![call Arduino101Button1 StopButtonStateUpdates](blocks/Arduino101Button.StopButtonStateUpdates.svg)

## Events

+ <a name="Pressed"></a>`Pressed` – Event for Pressed

![when Arduino101Button1 Presseddo](blocks/Arduino101Button.Pressed.svg)

+ <a name="Released"></a>`Released` – Event for Released

![when Arduino101Button1 Releaseddo](blocks/Arduino101Button.Released.svg)


