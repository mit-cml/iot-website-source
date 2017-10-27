#include <LBLE.h>
#include <LBLEPeriphral.h>

int item;

LBLEService AService("19B10010-E8F2-537E-4F6C-D104768A1214");
LBLECharacteristicInt ARead("19B10011-E8F2-537E-4F6C-D104768A1214", LBLE_READ | LBLE_WRITE);

void setup()
{
  Serial.begin(9600);
  LBLE.begin();
  while (!LBLE.ready()) { delay(100); }
  Serial.println("BLE ready");

  Serial.print("Device Address = [");
  Serial.print(LBLE.getDeviceAddress());
  Serial.println("]");

  AService.addAttribute(ARead);

  LBLEPeripheral.addService(AService);
  LBLEPeripheral.begin();
  LBLEAdvertisementData advertisement;
  advertisement.configAsConnectableDevice("BLE Ana");
  LBLEPeripheral.advertise(advertisement);


}


void loop()
{
  item = analogRead(A0);
  Serial.println(item);
  ARead.setValue(item);
  delay(1000);
}
