# Arduino101SoundRecorder

The Arduino 101 Sound Recorder extension lets users control a sound recorder and playback device connected to a Grove Shield.<br>

<strong>More Links</strong><ul><li>Download a <a href='http://iot.appinventor.mit.edu/assets/samples/Arduino101SoundRecorder.aia' target='_blank'>sample project</a>.</li><li>Vew the <a href='http://iot.appinventor.mit.edu/assets/howtos/MIT_App_Inventor_IoT_Sound_Recorder.pdf' target='_blank'>how to instructions</a> for the Arduino 101 Sound Recorder.</li></ul>

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The <a href='http://iot.appinventor.mit.edu/#/bluetoothle/bluetoothleintro'>BluetoothLE</a> component with a connection to the Arduino 101.


![get Arduino101SoundRecorder1 BluetoothDevice ](blocks/Arduino101SoundRecorder.BluetoothDevice_getter.svg)


![set Arduino101SoundRecorder1 BluetoothDevice  to](blocks/Arduino101SoundRecorder.BluetoothDevice_setter.svg)

+ <a name="PlayPin"></a>`PlayPin` – The digital pin used to trigger playback. If using the Grove connector, this is the same number as the digital pin port (D4 becomes 4).


![get Arduino101SoundRecorder1 PlayPin ](blocks/Arduino101SoundRecorder.PlayPin_getter.svg)


![set Arduino101SoundRecorder1 PlayPin  to](blocks/Arduino101SoundRecorder.PlayPin_setter.svg)

+ <a name="RecordPin"></a>`RecordPin` – The digital pin used to trigger the recording. If using the Grove connector, this is one number higher than the digital pin port (D4 becomes 5).


![get Arduino101SoundRecorder1 RecordPin ](blocks/Arduino101SoundRecorder.RecordPin_getter.svg)


![set Arduino101SoundRecorder1 RecordPin  to](blocks/Arduino101SoundRecorder.RecordPin_setter.svg)

## Methods

+ <a name="IsSupported"></a>`IsSupported` – Tests whether the Bluetooth low energy device is broadcasting support for the service. If true,
 calls to TurnOn and TurnOff should work correctly. Otherwise an error will be reported through
 the Screen's ErrorOccurred event.

![call Arduino101SoundRecorder1 IsSupported](blocks/Arduino101SoundRecorder.IsSupported.svg)

+ <a name="PlayRecordedSound"></a>`PlayRecordedSound` – Trigger playback of the recorded sound.

![call Arduino101SoundRecorder1 PlayRecordedSound](blocks/Arduino101SoundRecorder.PlayRecordedSound.svg)

+ <a name="StartRecording"></a>`StartRecording` – Start recording sound using the Sound Recorder's microphone.

![call Arduino101SoundRecorder1 StartRecording](blocks/Arduino101SoundRecorder.StartRecording.svg)

+ <a name="StopRecording"></a>`StopRecording` – Stop recording sound. The recording is limited to about 80 seconds of audio. If this limit is
 reached recording will automatically cease.

![call Arduino101SoundRecorder1 StopRecording](blocks/Arduino101SoundRecorder.StopRecording.svg)


