//#6,7,8 #9,10,11
#include <LBLE.h>
#include <LBLEPeriphral.h>

// Define a simple GATT service with only 1 characteristic
LBLEService ledService("19B10010-E8F2-537E-4F6C-D104768A1214");
LBLECharacteristicInt switchCharacteristic("19B10011-E8F2-537E-4F6C-D104768A1214", LBLE_READ | LBLE_WRITE);


void setup() {
  pinMode(6, OUTPUT);  //ENB
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT); //ENA
  Serial.begin(9600);

  LBLE.begin();
  while (!LBLE.ready()) {
    delay(100);
  }
  Serial.println("BLE ready");

  Serial.print("Device Address = [");
  Serial.print(LBLE.getDeviceAddress());
  Serial.println("]");

  // configure our advertisement data.
  // In this case, we simply create an advertisement that represents an
  // connectable device with a device name
  LBLEAdvertisementData advertisement;
  advertisement.configAsConnectableDevice("BLE robot");

  // Configure our device's Generic Access Profile's device name
  // Ususally this is the same as the name in the advertisement data.
  LBLEPeripheral.setName("BLE robot");

  // Add characteristics into ledService
  ledService.addAttribute(switchCharacteristic);

  // Add service to GATT server (peripheral)
  LBLEPeripheral.addService(ledService);

  // start the GATT server - it is now available to connect
  LBLEPeripheral.begin();

  // start advertisment
  LBLEPeripheral.advertise(advertisement);
}

// the loop function runs over and over again forever
void loop() {
  delay(100);

  Serial.print("conected=");
  Serial.println(LBLEPeripheral.connected());

  //switchCharacteristic.setValue(analogRead(A0));
  //Serial.println("A0 sent ok");

  if (switchCharacteristic.isWritten()) {
    const char value = switchCharacteristic.getValue();
    switch (value) {
      case 4:  //left
        left(128);
        break;
      case 3:  //right
        right(128);
        break;
      case 2:  //forward
        forward(128);
        break;
      case 1:  //backward
        backward(128);
        break;
      case 0:  //stop
        stop();
        break;
      default:
        Serial.println("Unknown value written");
        break;
    }
  }
}

void left(int power) {  //wait for 4
  analogWrite(6, power);
  analogWrite(11, power);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, HIGH);
  Serial.println("left");
  delay(50);
}

void right(int power) { //wait for 3
  analogWrite(6, power);
  analogWrite(11, power);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, HIGH);
  digitalWrite(10, LOW);
  Serial.println("right");
  delay(50);
}

void forward(int power) {
  analogWrite(6, power);
  analogWrite(11, power);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  digitalWrite(10, HIGH);
  Serial.println("forward");
  delay(50);
}

void backward(int power) {
  analogWrite(6, power);
  analogWrite(11, power);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  digitalWrite(10, LOW);
  Serial.println("backward");
  delay(50);
}

void stop() {
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
  digitalWrite(9, HIGH);
  digitalWrite(10, HIGH);
  Serial.println("stop");
  delay(100);
}
