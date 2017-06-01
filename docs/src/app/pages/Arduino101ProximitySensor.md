# Arduino101ProximitySensor

Extension to interface with a proximity sensor attached to an Arduino 101 running the
 App Inventor Companion Sketch.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component with a connection to the Arduino 101.


![get Arduino101ProximitySensor1 BluetoothDevice ](blocks/Arduino101ProximitySensor.BluetoothDevice_getter.svg)


![set Arduino101ProximitySensor1 BluetoothDevice  to](blocks/Arduino101ProximitySensor.BluetoothDevice_setter.svg)

+ <a name="Pin"></a>`Pin` – The Pin on the Arduino board that the device is wired in to.


![get Arduino101ProximitySensor1 Pin ](blocks/Arduino101ProximitySensor.Pin_getter.svg)


![set Arduino101ProximitySensor1 Pin  to](blocks/Arduino101ProximitySensor.Pin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101ProximitySensor1 IsSupported](blocks/Arduino101ProximitySensor.IsSupported.svg)

+ <a name="ReadProximity"></a>`ReadProximity` – Method for ReadProximity

![call Arduino101ProximitySensor1 ReadProximity](blocks/Arduino101ProximitySensor.ReadProximity.svg)

+ <a name="RequestProximityUpdates"></a>`RequestProximityUpdates` – Method for RequestProximityUpdates

![call Arduino101ProximitySensor1 RequestProximityUpdates](blocks/Arduino101ProximitySensor.RequestProximityUpdates.svg)

+ <a name="StopProximityUpdates"></a>`StopProximityUpdates` – Method for StopProximityUpdates

![call Arduino101ProximitySensor1 StopProximityUpdates](blocks/Arduino101ProximitySensor.StopProximityUpdates.svg)

## Events

+ <a name="ProximityReceived"></a>`ProximityReceived` – Event for ProximityReceived

![when Arduino101ProximitySensor1 ProximityReceived proximity do](blocks/Arduino101ProximitySensor.ProximityReceived.svg)


