# Arduino101SoundRecorder

Extension to programmatically interact with the Grove Sound Recorder attached to an Arduino 101.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a>component with a connection to the Arduino 101.


![get Arduino101SoundRecorder1 BluetoothDevice ](blocks/Arduino101SoundRecorder.BluetoothDevice_getter.svg)


![set Arduino101SoundRecorder1 BluetoothDevice  to](blocks/Arduino101SoundRecorder.BluetoothDevice_setter.svg)

+ <a name="PlayPin"></a>`PlayPin` – 


![get Arduino101SoundRecorder1 PlayPin ](blocks/Arduino101SoundRecorder.PlayPin_getter.svg)


![set Arduino101SoundRecorder1 PlayPin  to](blocks/Arduino101SoundRecorder.PlayPin_setter.svg)

+ <a name="RecordPin"></a>`RecordPin` – 


![get Arduino101SoundRecorder1 RecordPin ](blocks/Arduino101SoundRecorder.RecordPin_getter.svg)


![set Arduino101SoundRecorder1 RecordPin  to](blocks/Arduino101SoundRecorder.RecordPin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101SoundRecorder1 IsSupported](blocks/Arduino101SoundRecorder.IsSupported.svg)

+ <a name="PlayRecordedSound"></a>`PlayRecordedSound` – Method for PlayRecordedSound

![call Arduino101SoundRecorder1 PlayRecordedSound](blocks/Arduino101SoundRecorder.PlayRecordedSound.svg)

+ <a name="StartRecording"></a>`StartRecording` – Method for StartRecording

![call Arduino101SoundRecorder1 StartRecording](blocks/Arduino101SoundRecorder.StartRecording.svg)

+ <a name="StopRecording"></a>`StopRecording` – Method for StopRecording

![call Arduino101SoundRecorder1 StopRecording](blocks/Arduino101SoundRecorder.StopRecording.svg)


