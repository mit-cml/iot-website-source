# Microbit\_Uart

The <code>Microbit_Uart</code> sensor provides the ability to read from and write strings to the BBC micro:bit's serial UART port.

## Properties

+ <a name="BluetoothDevice"></a>`BluetoothDevice` – The BluetoothLE component connected to the micro:bit device (setter).


![get Microbit_Uart1 BluetoothDevice ](blocks/Microbit_Uart.BluetoothDevice_getter.svg)


![set Microbit_Uart1 BluetoothDevice  to](blocks/Microbit_Uart.BluetoothDevice_setter.svg)

## Methods

+ <a name="RequestTXCharacteristic"></a>`RequestTXCharacteristic` – Requests notifications of messages received from the micro:bit's serial UART. New messages will
 be received through the
 <a href='#TXCharacteristicReceived'><code>TXCharacteristicReceived</code></a>
 event.

![call Microbit_Uart1 RequestTXCharacteristic](blocks/Microbit_Uart.RequestTXCharacteristic.svg)

+ <a name="StopTXCharacteristicUpdates"></a>`StopTXCharacteristicUpdates` – Stops receiving updates from the micro:bit's serial UART. Note that there may be pending
 messages from the device that will still be reported through the
 <a href='#TXCharacteristicReceived'><code>TXCharacteristicReceived</code></a> event.

![call Microbit_Uart1 StopTXCharacteristicUpdates](blocks/Microbit_Uart.StopTXCharacteristicUpdates.svg)

+ <a name="WriteRXCharacteristic"></a>`WriteRXCharacteristic` – Writes the given value <code>UART_TX</code> to the micro:bit. The size of the message will
 depend on the value of <code>UART_TX</code>. Numbers will be converted to integers and sent
 as 32-bit integer values. Strings will be encoded using UTF-8. Lists of objects will be
 sent as a sequence of bytes using the aforementioned rules for numbers and strings.

 __Parameters__:

     * <code>UART_TX</code> (_any_) &mdash;
       The value to transmit to the RX "pin" of the micro:bit. Strings will be encoded as UTF-8,
       numbers will be sent as 32-bit integers. Lists of values will be converted into be
       converted into a sequence of bytes depending on the type of each value in the list.

![call Microbit_Uart1 WriteRXCharacteristicUART_TX](blocks/Microbit_Uart.WriteRXCharacteristic.svg)

## Events

+ <a name="TXCharacteristicReceived"></a>`TXCharacteristicReceived` – The <code>TXCharacteristicReceived</code> event is run whenever messages are received over the
 micro:bit's serial UART protocol.

 __Parameters__:

     * <code>UART_TX_FIELD</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/listsU.html#makealist">_list_</a>) &mdash;
       A list of unsigned byte values read from the device.

![when Microbit_Uart1 TXCharacteristicReceived UART_TX_Field do](blocks/Microbit_Uart.TXCharacteristicReceived.svg)

+ <a name="WroteRXCharacteristic"></a>`WroteRXCharacteristic` – The <code>WroteRXCharacteristic</code> event is run after a message is written to the micro:bit
 via its serial UART.

 __Parameters__:

     * <code>UART_TX_FIELD</code> (<a href="http://appinventor.mit.edu/explore/ai2/support/blocks/listsU.html#makealist">_list_</a>) &mdash;
       A list of unsigned byte values written to the device.

![when Microbit_Uart1 WroteRXCharacteristic UART_TX_Field do](blocks/Microbit_Uart.WroteRXCharacteristic.svg)


