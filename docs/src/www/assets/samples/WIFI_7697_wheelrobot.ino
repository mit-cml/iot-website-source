/*
  WiFi 7697 robot
  If the IP address of your shield is yourAddress:
  http://yourAddress/r turns right LED on/off
  http://yourAddress/l turns left LED on/off
  http://yourAddress/F to go forward
  http://yourAddress/B to go backward
  http://yourAddress/R to turn right
  http://yourAddress/L to turn left
  http://yourAddress/S to stop the robot

  Circuit:
    LinkIt 7697 HDK
    DC Motor shield ENA - LinkIt D11
                    Motor#1+(IN1) - LinkIt D10
                    Motor#1-(IN2) - LinkIt D9
                    Motor#2+(IN3) - LinkIt D8
                    Motor#2-(IN4) - LinkIt D7
                    ENB - LinkIt D6
    Left LED - LinkIt D12
    Right LED - LinkIt D13

  created 25 Nov 2012
  by Tom Igoe
  modified 3 Nov 2017
  by CAVEDU
*/
#include <LWiFi.h>

char ssid[] = "HSIEH-2.4G";      //  your network SSID (name)
char pass[] = "ab25682568";   // your network password
int keyIndex = 0;                 // your network key Index number (needed only for WEP)

int status = WL_IDLE_STATUS;
WiFiServer server(80);

void setup() {
  Serial.begin(9600);      // initialize serial communication
  pinMode(LED_BUILTIN, OUTPUT);      // set the LED pin mode
  pinMode(6, OUTPUT);  //ENB
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT); //ENA
  pinMode(12, OUTPUT); //left light
  pinMode(13, OUTPUT); //right light

  // attempt to connect to Wifi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(ssid);                   // print the network name (SSID);

    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);
  }
  server.begin();                           // start the web server on port 80
  printWifiStatus();                        // you're connected now, so print out the status
}


void loop() {
  WiFiClient client = server.available();   // listen for incoming clients

  if (client) {                             // if you get a client,
    Serial.println("new client");           // print a message out the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        if (c == '\n') {                    // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // the content of the HTTP response follows the header:
            //client.print("Click <a href=\"/H\">here</a> turn the LED on pin 7 on<br>");
            //client.print("Click <a href=\"/L\">here</a> turn the LED on pin 7 off<br>");

            client.print("Click <a href=\"/h\">here</a> turn the head light on<br>");  //D5
            client.print("Click <a href=\"/l\">here</a> turn the head light off<br>");
            client.print("Click <a href=\"/F\">here</a> to go forward<br>");
            client.print("Click <a href=\"/B\">here</a> to go backward<br>");
            client.print("Click <a href=\"/L\">here</a> to turn right<br>");
            client.print("Click <a href=\"/R\">here</a> to turn left<br>");
            client.print("Click <a href=\"/S\">here</a> to stop<br>");

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {    // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

        // Check to see if the client request was "GET /H" or "GET /L":
        if (currentLine.startsWith("GET /r")) {  // GET /r turns right LED on/off
          if (digitalRead(13)) {
            digitalWrite(13, LOW);
          }
          else {
            digitalWrite(13, HIGH);
          }
        }
        if (currentLine.startsWith("GET /l")) {  // GET /l turns left LED on/off
          if (digitalRead(12)) {
            digitalWrite(12, LOW);
          }
          else {
            digitalWrite(12, HIGH);
          }
        }
        if (currentLine.startsWith("GET /F")) {  // GET /F to go forward
          forward(180);     //modify the parameter from 0~255 to adjust motor speed
        }
        if (currentLine.startsWith("GET /B")) {  // GET /F to go backward
          backward(180);
        }
        if (currentLine.startsWith("GET /L")) {  // GET /L to turn left
          left(200);
        }
        if (currentLine.startsWith("GET /R")) {  // GET /R to turn right
          right(200);
        }
        if (currentLine.startsWith("GET /S")) {  // GET /l to stop the robot
          leftLED();
        }
        if (currentLine.startsWith("GET /l")) {  // GET /l to toggle left LED
          leftLED();
        }
        if (currentLine.startsWith("GET /r")) {  // GET /r to toggle right LED
          rightLED();
        }
      }
    }
    // close the connection:
    client.stop();
    Serial.println("client disonnected");
  }
}

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
  // print where to go in a browser:
  Serial.print("To see this page in action, open a browser to http://");
  Serial.println(ip);
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

void leftLED() {
  if (digitalRead(13)) {
    digitalWrite(13, HIGH);
    Serial.println("left LED on");
  }
  else {
    digitalWrite(13, LOW);
    Serial.println("left LED off");
  }
  delay(1000);
}

void rightLED() {
  if (digitalRead(12)) {
    digitalWrite(12, HIGH);
    Serial.println("right LED on");
  }
  else {
    digitalWrite(12, LOW);
    Serial.println("right LED off");
  }
  delay(1000);
}
