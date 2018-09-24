/*
  WiFi 7697 LED control
  If the IP address of your shield is yourAddress:
  http://yourAddress/R to light red
  http://yourAddress/G to light green
  http://yourAddress/B to light blue
  http://yourAddress/W to light white
  http://yourAddress/o to turn off LED

  Circuit:
    LinkIt 7697 HDK
    RGB LED (common cathode) 
    R - LinkIt D11
    G - LinkIt D9
    B - LinkIt D7

  created 25 Nov 2012
  by Tom Igoe
  modified 3 Nov 2017
  by CAVEDU
*/
#include <LWiFi.h>

char ssid[] = "ssid";      //  your network SSID (name)
char pass[] = "pass";   // your network password
int keyIndex = 0;                 // your network key Index number (needed only for WEP)

int status = WL_IDLE_STATUS;
WiFiServer server(80);

void setup() {
  Serial.begin(9600);      // initialize serial communication
  pinMode(LED_BUILTIN, OUTPUT);      // set the LED pin mode
  pinMode(11, OUTPUT);  //R
  pinMode(9, OUTPUT);   //G
  pinMode(7, OUTPUT);   //B

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
            client.print("Click <a href=\"/R\">here</a> to light red<br>");
            client.print("Click <a href=\"/G\">here</a> to light green<br>");
            client.print("Click <a href=\"/B\">here</a> to light blue<br>");
            client.print("Click <a href=\"/W\">here</a> to light white<br>");
            client.print("Click <a href=\"/o\">here</a> to light off<br>");

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

        // Check client request
        if (currentLine.startsWith("GET /R")) {  // GET /R to light red
          led(1,0,0);     
        }
        if (currentLine.startsWith("GET /G")) {  // GET /G to light green
          led(0,1,0); 
        }
        if (currentLine.startsWith("GET /B")) {  // GET /B to light blue
          led(0,0,1);
        }
        if (currentLine.startsWith("GET /W")) {  // GET /W to light white
          led(1,1,1);
        }
        if (currentLine.startsWith("GET /o")) {  // GET /o to light off
          led(0,0,0);
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

void led(int R, int G, int B) {
  digitalWrite(11, R);
  digitalWrite(9, G);
  digitalWrite(7, B);
}
