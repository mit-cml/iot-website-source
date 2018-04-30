#include <Servo.h>

int trigPin = 5, echoPin = 4; //ultrasonic pins
int LED_R = 15, LED_G = 16, LED_B = 11; //RGB LED pins
int LED_LWing = 3, LED_RWing = 9; //wing LED pins
int buzzer = 14; //onboard buzzer - 14
int pos; //servo position

long duration, cm, inches;
int color[3] = {0, 0, 0};

Servo wing_L, wing_R;

void setup() {
  Serial.begin (9600);             // Serial Port begin
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(LED_R, OUTPUT);//LED_R
  pinMode(LED_G, OUTPUT);//LED_G
  pinMode(LED_B, OUTPUT);//LED_B
  pinMode(LED_LWing, OUTPUT);//LED_LWing
  pinMode(LED_RWing, OUTPUT);//LED_RWing
  wing_L.attach(2); //0 - 90 degree
  wing_R.attach(7); //90 - 180 degree
  digitalWrite(LED_LWing, LOW);
  digitalWrite(LED_RWing, LOW);
}

void loop() {
  getDistance();
  analogWrite(LED_R, random(25) * 10);
  analogWrite(LED_G, random(25) * 10);
  analogWrite(LED_B, random(25) * 10);
  //analogWrite(LED_LWing, random(25)*10);
  //analogWrite(LED_RWing, random(25)*10);
  /*tone(14, random(20) * 100 , 300); //random frequency
    delay(500);
    noTone(14);*/
  for (pos = 5; pos <= 85; pos += 1) {
    wing_L.write(pos);
    wing_R.write(180 - pos);
    delay(15);
  }
  for (pos = 85; pos >= 5; pos -= 1) {
    wing_L.write(pos);
    wing_R.write(180 - pos);
    delay(15);
  }
  //delay(200);
}

void getDistance()
{
  digitalWrite(trigPin, LOW);
  delayMicroseconds(5);
  digitalWrite(trigPin, HIGH);         // high level on trigger pin for 10us
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);   

  cm = (duration / 2) / 29.1;          // convert time duration into distance (cm/inch)
  inches = (duration / 2) / 74;

  Serial.print("Distance : ");
  Serial.print(inches);
  Serial.print("in,   ");
  Serial.print(cm);
  Serial.print("cm");
  Serial.println();
  delay(250);
  if (cm < 20) { //something is too close
    digitalWrite(LED_LWing, HIGH);
    digitalWrite(LED_RWing, HIGH);
  }
  else
  {
    digitalWrite(LED_LWing, LOW);
    digitalWrite(LED_RWing, LOW);
  }
}
