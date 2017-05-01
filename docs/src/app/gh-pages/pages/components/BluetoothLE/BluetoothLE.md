# BluetoothLE

Bluetooth Low Energy, also referred to as Bluetooth LE or simply BLE, is a new protocol similar to classic Bluetooth except that it is designed to consume less power while maintaining comparable functionality. For this reason, Bluetooth LE is the preferred choice of communication with IoT devices that have limited power resources. Starting with Android 4.3, Google introduced built-in support for Bluetooth Low Energy. The BluetoothLE extension requires Android 5.0 or higher to avoid known issues with Google's Bluetooth LE support prior to Android 5.0.

## Properties

+ <a name="AdvertisementScanPeriod"></a>`AdvertisementScanPeriod` – Returns the value of ScanPeriod.


![get BluetoothLE1 AdvertisementScanPeriod ](blocks/BluetoothLE.AdvertisementScanPeriod_getter.svg)

+ <a name="AdvertiserAddresses"></a>`AdvertiserAddresses` – Returns a list of the addresses of devices found during Advertisement scanning.


![get BluetoothLE1 AdvertiserAddresses ](blocks/BluetoothLE.AdvertiserAddresses_getter.svg)

+ <a name="AdvertiserNames"></a>`AdvertiserNames` – Returns a list of the names of the devices found during Advertisment scanning.


![get BluetoothLE1 AdvertiserNames ](blocks/BluetoothLE.AdvertiserNames_getter.svg)

+ <a name="BatteryValue"></a>`BatteryValue` – Return the battery level.


![get BluetoothLE1 BatteryValue ](blocks/BluetoothLE.BatteryValue_getter.svg)

+ <a name="ConnectedDeviceRssi"></a>`ConnectedDeviceRssi` – Return the RSSI (Received Signal Strength Indicator) of connected device.


![get BluetoothLE1 ConnectedDeviceRssi ](blocks/BluetoothLE.ConnectedDeviceRssi_getter.svg)

+ <a name="DeviceList"></a>`DeviceList` – Return a sorted list of BluetoothLE devices as a String.


![get BluetoothLE1 DeviceList ](blocks/BluetoothLE.DeviceList_getter.svg)

+ <a name="IsDeviceAdvertising"></a>`IsDeviceAdvertising` – Returns true if the device is currently advertising, false otherwise.


![get BluetoothLE1 IsDeviceAdvertising ](blocks/BluetoothLE.IsDeviceAdvertising_getter.svg)

+ <a name="IsDeviceConnected"></a>`IsDeviceConnected` – Return true if a BluetoothLE device is connected; Otherwise, return false.


![get BluetoothLE1 IsDeviceConnected ](blocks/BluetoothLE.IsDeviceConnected_getter.svg)

+ <a name="TxPower"></a>`TxPower` – Return the Tx power.


![get BluetoothLE1 TxPower ](blocks/BluetoothLE.TxPower_getter.svg)

## Methods

+ <a name="AdvertisementData"></a>`AdvertisementData` – Returns the advertisement data associated with the specified device address.

![call BluetoothLE1 AdvertisementDatadeviceAddressserviceUuid](blocks/BluetoothLE.AdvertisementData.svg)

+ <a name="AdvertiserAddress"></a>`AdvertiserAddress` – Returns the address of the device with the name specified.

![call BluetoothLE1 AdvertiserAddressdeviceName](blocks/BluetoothLE.AdvertiserAddress.svg)

+ <a name="AdvertiserServiceUuids"></a>`AdvertiserServiceUuids` – Returns the list of services available on the Adverising device.

![call BluetoothLE1 AdvertiserServiceUuidsdeviceAddress](blocks/BluetoothLE.AdvertiserServiceUuids.svg)

+ <a name="CharacteristicByIndex"></a>`CharacteristicByIndex` – Return Unique ID of selected characteristic with index. Index specified by list of supported characteristics for a connected device, starting from 1.

![call BluetoothLE1 CharacteristicByIndexindex](blocks/BluetoothLE.CharacteristicByIndex.svg)

+ <a name="Connect"></a>`Connect` – Connect to a BluetoothLE device with index. Index specifies the position in BluetoothLE device list, starting from 1.

![call BluetoothLE1 Connectindex](blocks/BluetoothLE.Connect.svg)

+ <a name="ConnectWithAddress"></a>`ConnectWithAddress` – Connect to BluetoothLE device with address. Address specifies bluetooth address of the BluetoothLE device.

![call BluetoothLE1 ConnectWithAddressaddress](blocks/BluetoothLE.ConnectWithAddress.svg)

+ <a name="Disconnect"></a>`Disconnect` – Disconnect from the currently connected BluetoothLE device if a device is connected.

![call BluetoothLE1 Disconnect](blocks/BluetoothLE.Disconnect.svg)

+ <a name="DisconnectWithAddress"></a>`DisconnectWithAddress` – Disconnect from connected BluetoothLE device with address. Address specifies bluetooth address of the BluetoothLE device.

![call BluetoothLE1 DisconnectWithAddressaddress](blocks/BluetoothLE.DisconnectWithAddress.svg)

+ <a name="FoundDeviceAddress"></a>`FoundDeviceAddress` – Get the address of found device with index. Index specifies the position in BluetoothLE device list, starting from 1.

![call BluetoothLE1 FoundDeviceAddressindex](blocks/BluetoothLE.FoundDeviceAddress.svg)

+ <a name="FoundDeviceName"></a>`FoundDeviceName` – Get the name of found device with index. Index specifies the position in BluetoothLE device list, starting from 1.

![call BluetoothLE1 FoundDeviceNameindex](blocks/BluetoothLE.FoundDeviceName.svg)

+ <a name="FoundDeviceRssi"></a>`FoundDeviceRssi` – Get the RSSI (Received Signal Strength Indicator) of found device with index. Index specifies the position in BluetoothLE device list, starting from 1.

![call BluetoothLE1 FoundDeviceRssiindex](blocks/BluetoothLE.FoundDeviceRssi.svg)

+ <a name="GetCharacteristicsForService"></a>`GetCharacteristicsForService` – Return list of supported characteristics for the given service. The list will contain (UUID, name) pairs for each characteristic provided by the given service UUID.

![call BluetoothLE1 GetCharacteristicsForServiceserviceUuid](blocks/BluetoothLE.GetCharacteristicsForService.svg)

+ <a name="ReadBytes"></a>`ReadBytes` – Read one or more 8-bit integer values from a connected BluetoothLE device. Service Unique ID and Characteristic Unique ID are required.

![call BluetoothLE1 ReadBytesserviceUuidcharacteristicUuidsigned](blocks/BluetoothLE.ReadBytes.svg)

+ <a name="ReadFloats"></a>`ReadFloats` – Read one or more floating point values from a connected Bluetooth device.

![call BluetoothLE1 ReadFloatsserviceUuidcharacteristicUuidshortFloat](blocks/BluetoothLE.ReadFloats.svg)

+ <a name="ReadIntegers"></a>`ReadIntegers` – Read one or more 32-bit integer values from a connected BluetoothLE device.

![call BluetoothLE1 ReadIntegersserviceUuidcharacteristicUuidsigned](blocks/BluetoothLE.ReadIntegers.svg)

+ <a name="ReadShorts"></a>`ReadShorts` – Read one or more 16-bit integer values from a connected BluetoothLE device. Service Unique ID and Characteristic Unique ID are required.

![call BluetoothLE1 ReadShortsservice_uuidcharacteristic_uuidsigned](blocks/BluetoothLE.ReadShorts.svg)

+ <a name="ReadStrings"></a>`ReadStrings` – Read one or more strings from a connected Bluetooth device.

![call BluetoothLE1 ReadStringsserviceUuidcharacteristicUuidutf16](blocks/BluetoothLE.ReadStrings.svg)

+ <a name="RegisterForBytes"></a>`RegisterForBytes` – Register to receive updates when one or more 16-bit integer values from a connected BluetoothLE change. Service Unique ID and Characteristic Unique ID are required.

![call BluetoothLE1 RegisterForBytesserviceUuidcharacteristicUuidsigned](blocks/BluetoothLE.RegisterForBytes.svg)

+ <a name="RegisterForFloats"></a>`RegisterForFloats` – Register to receive updates when one or more floating point values from a connected Bluetooth device change.

![call BluetoothLE1 RegisterForFloatsserviceUuidcharacteristicUuidshortFloat](blocks/BluetoothLE.RegisterForFloats.svg)

+ <a name="RegisterForIntegers"></a>`RegisterForIntegers` – Register to receive updates when one or more 32-bit integer values from a connected Bluetooth device change.

![call BluetoothLE1 RegisterForIntegersserviceUuidcharacteristicUuidsigned](blocks/BluetoothLE.RegisterForIntegers.svg)

+ <a name="RegisterForShorts"></a>`RegisterForShorts` – Register to receive updates when one or more 16-bit integer values from a connected BluetoothLE change. Service Unique ID and Characteristic Unique IDare required.

![call BluetoothLE1 RegisterForShortsservice_uuidcharacteristic_uuidsigned](blocks/BluetoothLE.RegisterForShorts.svg)

+ <a name="RegisterForStrings"></a>`RegisterForStrings` – Register to receive updates when one or more string values froma connected Bluetooth device change.

![call BluetoothLE1 RegisterForStringsserviceUuidcharacteristicUuidutf16](blocks/BluetoothLE.RegisterForStrings.svg)

+ <a name="ScanAdvertisements"></a>`ScanAdvertisements` – Scans for Bluetooth LE advertisements. scanPeriod specifies how long the scan will run.

![call BluetoothLE1 ScanAdvertisementsscanPeriod](blocks/BluetoothLE.ScanAdvertisements.svg)

+ <a name="ServiceByIndex"></a>`ServiceByIndex` – Return Unique ID of selected service with index. Index specified by list of supported services for a connected device, starting from 1.

![call BluetoothLE1 ServiceByIndexindex](blocks/BluetoothLE.ServiceByIndex.svg)

+ <a name="StartAdvertising"></a>`StartAdvertising` – Create and publish a Bluetooth LE advertisement. inData specifies the data that will be included in the advertisement. serviceUuid specifies the UUID of the advertisement.

![call BluetoothLE1 StartAdvertisinginDataserviceUuid](blocks/BluetoothLE.StartAdvertising.svg)

+ <a name="StartScanning"></a>`StartScanning` – Start Scanning for BluetoothLE devices.

![call BluetoothLE1 StartScanning](blocks/BluetoothLE.StartScanning.svg)

+ <a name="StopAdvertising"></a>`StopAdvertising` – Stop Bluetooth LE Advertising.

![call BluetoothLE1 StopAdvertising](blocks/BluetoothLE.StopAdvertising.svg)

+ <a name="StopScanning"></a>`StopScanning` – Stop Scanning for BluetoothLE devices.

![call BluetoothLE1 StopScanning](blocks/BluetoothLE.StopScanning.svg)

+ <a name="StopScanningAdvertisements"></a>`StopScanningAdvertisements` – Stops scanning for Bluetooth LE advertisements.

![call BluetoothLE1 StopScanningAdvertisements](blocks/BluetoothLE.StopScanningAdvertisements.svg)

+ <a name="SupportedCharacteristics"></a>`SupportedCharacteristics` – Return list of supported characteristics for connected device as a String

![call BluetoothLE1 SupportedCharacteristics](blocks/BluetoothLE.SupportedCharacteristics.svg)

+ <a name="SupportedServices"></a>`SupportedServices` – Return list of supported services for connected device as a String

![call BluetoothLE1 SupportedServices](blocks/BluetoothLE.SupportedServices.svg)

+ <a name="UnregisterForValues"></a>`UnregisterForValues` – Unregister for updates for the given service and characteristic.

![call BluetoothLE1 UnregisterForValuesservice_uuidcharacteristic_uuid](blocks/BluetoothLE.UnregisterForValues.svg)

+ <a name="WriteBytes"></a>`WriteBytes` – Write one or more 8-bit integer values to a connected BluetoothLE device. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single numeric value or a list of values. If signed is true, the acceptable values are between -128 and 127. If signed is false, the acceptable values are between 0 and 255.

![call BluetoothLE1 WriteBytesserviceUuidcharacteristicUuidsignedvalues](blocks/BluetoothLE.WriteBytes.svg)

+ <a name="WriteBytesWithResponse"></a>`WriteBytesWithResponse` – Write one or more 8-bit integer values to a connected BluetoothLE device and wait for an acknowledgement via the ByteValuesWritten event. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single numeric value or a list of values. If signed is true, the acceptable values are between -128 and 127. If signed is false, the acceptable values are between 0 and 255.

![call BluetoothLE1 WriteBytesWithResponseserviceUuidcharacteristicUuidsignedvalues](blocks/BluetoothLE.WriteBytesWithResponse.svg)

+ <a name="WriteFloats"></a>`WriteFloats` – Write one or more floating point values to a connected BluetoothLE device. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single numeric value or a list of values. If shortFloat is true, the values will be compressed to 16-bits. If shortFloat is false, the values are sent as 32-bit.

![call BluetoothLE1 WriteFloatsserviceUuidcharacteristicUuidshortFloatvalues](blocks/BluetoothLE.WriteFloats.svg)

+ <a name="WriteFloatsWithResponse"></a>`WriteFloatsWithResponse` – Write one or more 8-bit integer values to a connected BluetoothLE device and wait for an acknowledgement via the FloatValuesWritten event. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single numeric value or a list of values. If shortFloat is true, the values will be compressed to 16-bits. If shortFloat is false, the values are sent as 32-bit.

![call BluetoothLE1 WriteFloatsWithResponseserviceUuidcharacteristicUuidshortFloatvalues](blocks/BluetoothLE.WriteFloatsWithResponse.svg)

+ <a name="WriteIntegers"></a>`WriteIntegers` – Write one or more 32-bit integer values to a connected BluetoothLE device. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single numeric value or a list of values. If signed is true, the acceptable values are between -2147483648 and 2147483647. If signed is false, the acceptable values are between 0 and 4294967295.

![call BluetoothLE1 WriteIntegersserviceUuidcharacteristicUuidsignedvalues](blocks/BluetoothLE.WriteIntegers.svg)

+ <a name="WriteIntegersWithResponse"></a>`WriteIntegersWithResponse` – Write one or more 32-bit integer values to a connected BluetoothLE device and wait for an acknowledgement via the IntegerValuesWritten event. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single numeric value or a list of values. If signed is true, the acceptable values are between -2147483648 and 2147483647. If signed is false, the acceptable values are between 0 and 4294967295.

![call BluetoothLE1 WriteIntegersWithResponseserviceUuidcharacteristicUuidsignedvalues](blocks/BluetoothLE.WriteIntegersWithResponse.svg)

+ <a name="WriteShorts"></a>`WriteShorts` – Write one or more 16-bit integer values to a connected BluetoothLE device. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single numeric value or a list of values. If signed is true, the acceptable values are between -32768 and 32767. If signed is false, the acceptable values are between 0 and 65535.

![call BluetoothLE1 WriteShortsserviceUuidcharacteristicUuidsignedvalues](blocks/BluetoothLE.WriteShorts.svg)

+ <a name="WriteShortsWithResponse"></a>`WriteShortsWithResponse` – Write one or more 16-bit integer values to a connected BluetoothLE device and wait for an acknowledgement via the ShortValuesWritten event.Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single numeric value or a list of values. If signed is true, the acceptable values are between -32768 and 32767. If signed is false, the acceptable values are between 0 and 65535.

![call BluetoothLE1 WriteShortsWithResponseserviceUuidcharacteristicUuidsignedvalues](blocks/BluetoothLE.WriteShortsWithResponse.svg)

+ <a name="WriteStrings"></a>`WriteStrings` – Write one or more strings to a connected BluetoothLE device. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single string or a list of strings. If utf16 is true, the strings are sent UTF-16 encoded. If utf16 is false, the strings are sent UTF-8 encoded.

![call BluetoothLE1 WriteStringsserviceUuidcharacteristicUuidutf16values](blocks/BluetoothLE.WriteStrings.svg)

+ <a name="WriteStringsWithResponse"></a>`WriteStringsWithResponse` – Write one or more strings to a connected BluetoothLE device and wait for an acknowledgement. Service Unique ID and Characteristic Unique ID are required. The values parameter can either be a single string or a list of values. If utf16 is true, the strings are sent UTF-16 encoded. If utf16 is false, the strings are sent UTF-8 encoded.

![call BluetoothLE1 WriteStringsWithResponseserviceUuidcharacteristicUuidutf16values](blocks/BluetoothLE.WriteStringsWithResponse.svg)

## Events

+ <a name="BytesReceived"></a>`BytesReceived` – Trigger event when one or more byte values from a connected BluetoothLE device are received.

![when BluetoothLE1 BytesReceived serviceUuid characteristicUuid byteValues do](blocks/BluetoothLE.BytesReceived.svg)

+ <a name="BytesWritten"></a>`BytesWritten` – Event for BytesWritten

![when BluetoothLE1 BytesWritten serviceUuid characteristicUuid byteValues do](blocks/BluetoothLE.BytesWritten.svg)

+ <a name="Connected"></a>`Connected` – Trigger event when a BluetoothLE device is connected.

![when BluetoothLE1 Connecteddo](blocks/BluetoothLE.Connected.svg)

+ <a name="DeviceFound"></a>`DeviceFound` – Trigger event when a new BluetoothLE device is found.

![when BluetoothLE1 DeviceFounddo](blocks/BluetoothLE.DeviceFound.svg)

+ <a name="Disconnected"></a>`Disconnected` – This event is triggered when a BluetoothLE device is disconnected.

![when BluetoothLE1 Disconnecteddo](blocks/BluetoothLE.Disconnected.svg)

+ <a name="FloatsReceived"></a>`FloatsReceived` – Trigger event when one or more floating point values from a BluetoothLE device are received.

![when BluetoothLE1 FloatsReceived serviceUuid characteristicUuid floatValues do](blocks/BluetoothLE.FloatsReceived.svg)

+ <a name="FloatsWritten"></a>`FloatsWritten` – Event for FloatsWritten

![when BluetoothLE1 FloatsWritten serviceUuid characteristicUuid floatValues do](blocks/BluetoothLE.FloatsWritten.svg)

+ <a name="IntegersReceived"></a>`IntegersReceived` – Trigger event when one or more integer values from a connected BluetoothLE device are received.

![when BluetoothLE1 IntegersReceived serviceUuid characteristicUuid intValues do](blocks/BluetoothLE.IntegersReceived.svg)

+ <a name="IntegersWritten"></a>`IntegersWritten` – Event for IntegersWritten

![when BluetoothLE1 IntegersWritten serviceUuid characteristicUuid intValues do](blocks/BluetoothLE.IntegersWritten.svg)

+ <a name="RssiChanged"></a>`RssiChanged` – Trigger event when RSSI (Received Signal Strength Indicator) of found BluetoothLE device changes

![when BluetoothLE1 RssiChanged device_rssi do](blocks/BluetoothLE.RssiChanged.svg)

+ <a name="ShortsReceived"></a>`ShortsReceived` – Trigger event when one or more short values from a connected BluetoothLE device are received.

![when BluetoothLE1 ShortsReceived serviceUuid characteristicUuid shortValues do](blocks/BluetoothLE.ShortsReceived.svg)

+ <a name="ShortsWritten"></a>`ShortsWritten` – Event for ShortsWritten

![when BluetoothLE1 ShortsWritten serviceUuid characteristicUuid shortValues do](blocks/BluetoothLE.ShortsWritten.svg)

+ <a name="StringsReceived"></a>`StringsReceived` – Trigger event when one or more string values from a connected BluetoothLE device a received.

![when BluetoothLE1 StringsReceived serviceUuid characteristicUuid stringValues do](blocks/BluetoothLE.StringsReceived.svg)

+ <a name="StringsWritten"></a>`StringsWritten` – Event for StringsWritten

![when BluetoothLE1 StringsWritten serviceUuid characteristicUuid stringValues do](blocks/BluetoothLE.StringsWritten.svg)


