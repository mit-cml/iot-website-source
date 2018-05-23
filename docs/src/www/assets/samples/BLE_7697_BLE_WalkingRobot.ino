/* To control OTTO's walking and light with MIT App Inventor */
/* Please refer to otto.h for API usage */

#include <Otto.h>

/*
         ---------------
        |     O   O     |
        |---------------|
  YR ==>  |               | <== YL
         ---------------
            ||     ||
            ||     ||
  RR ==>   -----   ------  <== RL
        |-----   ------|
*/

#include <LBLE.h>
#include <LBLEPeriphral.h>

// Define a simple GATT service with only 1 characteristic
LBLEService ledService("19B10010-E8F2-537E-4F6C-D104768A1214");
LBLECharacteristicInt switchCharacteristic("19B10011-E8F2-537E-4F6C-D104768A1214", LBLE_READ | LBLE_WRITE);

/* servo pin assignment */
#define OTTO_PIN_YL 6
#define OTTO_PIN_YR 7
#define OTTO_PIN_RL 8
#define OTTO_PIN_RR 9

/* calibratoin the servo if it is not at it's perfect position, can be + or - */
#define OTTO_TRIM_YL 0
#define OTTO_TRIM_YR 0
#define OTTO_TRIM_RL 0
#define OTTO_TRIM_RR 0

Otto myOTTO;

void setup()
{
  Serial.begin(115200);
  pinMode(3, OUTPUT);  //RGB blue pin
  pinMode(4, OUTPUT);  //RGB green pin
  pinMode(5, OUTPUT);  //RGB red pin
  myOTTO.initLegs(OTTO_PIN_YL, OTTO_PIN_YR, OTTO_PIN_RL, OTTO_PIN_RR, false);
  myOTTO.setTrims(OTTO_TRIM_YL, OTTO_TRIM_YR, OTTO_TRIM_RL, OTTO_TRIM_RR);
  myOTTO.home();

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
  advertisement.configAsConnectableDevice("BLE OTTO robot");

  // Configure our device's Generic Access Profile's device name
  // Ususally this is the same as the name in the advertisement data.
  LBLEPeripheral.setName("BLE OTTO robot");

  // Add characteristics into ledService
  ledService.addAttribute(switchCharacteristic);

  // Add service to GATT server (peripheral)
  LBLEPeripheral.addService(ledService);

  // start the GATT server - it is now available to connect
  LBLEPeripheral.begin();

  // start advertisment
  LBLEPeripheral.advertise(advertisement);
  myOTTO.home();  //otto home position
  delay(3000);
}

void loop()
{
  delay(100);

  Serial.print("conected=");
  Serial.println(LBLEPeripheral.connected());

  if (switchCharacteristic.isWritten()) {
    const char value = switchCharacteristic.getValue();
    switch (value) {
      case 9:  //light white
        red();
        Serial.println("light white");
        break;
      case 8:  //light red
        red();
        Serial.println("light red");
        break;
      case 7:  //light green
        green();
        Serial.println("light green");
        break;
      case 6:  //light blue
        blue();
        Serial.println("light blue");
        break;
      case 5:  //light off
        lightoff();
        Serial.println("light off");
        break;
      case 4:  //left
        myOTTO.turn(4, 2000, LEFT);     // turn left for 4 steps, each step for 2 sec
        Serial.println("Turn left");
        break;
      case 3:  //right
        myOTTO.turn(4, 2000, RIGHT);    // turn right for 4 steps, each step for 2 sec
        Serial.println("Turn right");
        break;
      case 2:  //forward
        myOTTO.turn(4, 2000, FORWARD);
        Serial.println("Go forward");
        break;
      case 1:  //backward
        myOTTO.turn(4, 2000, BACKWARD);
        Serial.println("Go backward");
        break;
      default:
        Serial.println("Unknown value written");
        break;
    }
  }

  /*
    //init position for 3 sec
    Serial.println("home");
    myOTTO.home();
    delay(3000);

    Serial.println("Walk Forward");
    myOTTO.walk(4, 1000, FORWARD);   // walk foward 4 steps, each step for 1 sec

    Serial.println("Walk Backward");
    myOTTO.walk(4, 1000, BACKWARD); // walk backward 4 steps, each step for 1 sec

    Serial.println("Turn Left");
    myOTTO.turn(4, 2000, LEFT);     // turn left for 4 steps, each step for 2 sec

    Serial.println("Turn right");
    myOTTO.turn(4, 2000, RIGHT);    // turn left for 4 steps, each step for 2 sec
  */
}

/*
  movement related API, can be found in Otto.h

  void jump(float steps=1, int T = 2000);
  void walk(float steps=4, int T=1000, int dir = FORWARD);
  void turn(float steps=4, int T=2000, int dir = LEFT);
  void bend (int steps=1, int T=1400, int dir=LEFT);
  void shakeLeg (int steps=1, int T = 2000, int dir=RIGHT);
  void updown(float steps=1, int T=1000, int h = 20);
  void swing(float steps=1, int T=1000, int h=20);
  void tiptoeSwing(float steps=1, int T=900, int h=20);
  void jitter(float steps=1, int T=500, int h=20);
  void ascendingTurn(float steps=1, int T=900, int h=20);
  void moonwalker(float steps=1, int T=900, int h=20, int dir=LEFT);
  void crusaito(float steps=1, int T=900, int h=20, int dir=FORWARD);
  void flapping(float steps=1, int T=1000, int h=20, int dir=FORWARD);
*/

void white() {
  digitalWrite(6, HIGH);   // turn the LED on (HIGH is the voltage level)
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);    // turn the LED off by making the voltage LOW
}

void red() {
  digitalWrite(6, LOW);   // turn the LED on (HIGH is the voltage level)
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
}
void green() {
  digitalWrite(6, LOW);   // turn the LED on (HIGH is the voltage level)
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
}
void blue() {
  digitalWrite(6, HIGH);   // turn the LED on (HIGH is the voltage level)
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
}

void lightoff() {
  digitalWrite(6, LOW);   // turn the LED on (HIGH is the voltage level)
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);    // turn the LED off by making the voltage LOW
}

