// -*- mode: javascript; js-indent-level: 2; -*-
import React from 'react';

require('./table.css');

const styles = {
  assetsList: {
    margin: 10,
  },
  assetsImage: {
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'absolute',
    cursor: 'pointer',
  },
};


const howtosList = [
  {
    title: 'How to: Set up the Arduino Development Environment',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/arduino_logo.png',
    link: 'assets/tutorials/MIT_App_Inventor_IoT_Setup.pdf',
    description: 'Install and setup the Arduino development environment on your computer to interact with App Inventor.',
    equipment: ['Arduino 101'],
    time: 30,
  }, {
    title: 'Getting started with breadboard circuits',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/breadboardcircuit.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Basic_Circuit.pdf',
    description: 'Build basic circuit with breadboard and common electrical components.',
    equipment: ['Breadboard', 'common electrical components', 'extension board(optional)'],
    time: 60,
  }, {
    title: 'Bluetooth Low Energy Basic Connection',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/arduino_101.png',
    link: 'assets/howtos/MIT_App_Inventor_Basic_Connection.pdf',
    description: 'Make a basic app that scans for Bluetooth devices and allows you to connect to a selected device.',
    equipment: ['Arduino 101 or BBC micro:bit'],
    time: 30,
  }, {
    title: 'How to: Use the Arduino 101\'s Accelerometer',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/arduino_101.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Accelerometer.pdf',
    description: 'Make a simple app that displays the velocity of the Arduino device in the X, Y, and Z directions. Tilting and moving the Arduino changes the acceleration readings.',
    equipment: ['Arduino 101'],
    time: 20,
  }, {
    title: 'How to: Use a Button with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_button.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Button.pdf',
    description: 'Make a simple app that changes the background color of the app when pressing the button sensor connected to an Arduino controller. The app also counts how many times the button is pressed.',
    equipment: ['Arduino 101', 'Button'],
    time: 30,
  }, {
    title: 'How to: Use the Arduino 101\'s Gyroscope',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/arduino_101.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Gyroscope.pdf',
    description: 'Make a simple app that displays the gyroscope measurement of angular velocity, which is the speed of rotation of an object (the Arduino). Tilting and moving the Arduino changes the angular velocity readings.',
    equipment: ['Arduino 101', 'Gyroscope'],
    time: 20,
  }, {
    title: 'How to: Use a Humidity Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_humidity.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Humidity_Sensor.pdf',
    description: 'Make a simple app that displays the humidity level in the air, based on readings from a humidity sensor connected to an Arduino controller.',
    equipment: ['Arduino 101', 'Humidity sensor'],
    time: 20,
  }, {
    title: 'How to: Use a Light Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_light.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Light_Sensor.pdf',
    description: 'Make a simple app that displays the amount of light, as a numerical value, in an area using a light sensor connected to an Arduino controller.',
    equipment: ['Arduino 101', 'Light sensor'],
    time: 20,
  }, {
    title: 'How to: Use a Moisture Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_moisture.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Moisture_Sensor.pdf',
    description: 'Make a simple app that displays the amount of moisture, as a numerical value, in soil using a moisture sensor connected to an Arduino controller.',
    equipment: ['Arduino 101', 'Moisture sensor'],
    time: 20,
  }, {
    title: 'How to: Use a Proximity Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_proximity.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Proximity_Sensor.pdf',
    description: 'Make a simple app that displays the change in proximity (in cm) to an object using a proximity sensor connected to an Arduino controller. A proximity sensor measures the distance between the sensor and an object.',
    equipment: ['Arduino 101', 'Proximity sensor'],
    time: 20,
  }, {
    title: 'How to: Use a Sound Recorder with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_sound_recorder.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Sound_Recorder.pdf',
    description: 'Make a simple app that allows you to record your voice and play it back, by pressing buttons in the app.',
    equipment: ['Arduino 101', 'Grove sound recorder'],
    time: 30,
  }, {
    title: 'How to: Use a RGB LCD with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_rgblcd.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_RgbLcd.pdf',
    description: 'Make a simple app that changes the background color and displays text on an RGB LCD (color liquid crystal display) that is connected to an Arduino controller.',
    equipment: ['Arduino 101', 'Grove RGB LCD'],
    time: 30,
  }, {
    title: 'How to: Use a Temperature Sensor with Arduino',
    author: 'MIT App Invnetor Project',
    img: 'assets/howtos/grove_temperature.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Temperature_Sensor.pdf',
    description: 'Make a simple app that displays the temperature based on readings from a temperature sensor connected to an Arduino controller.',
    equipment: ['Arduino 101', 'Humidity & Temperature sensor'],
    time: 20,
  }, {
    title: 'How to: Display content on the BBC micro:bit LED matrix',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/microbit_front.png',
    link: 'assets/howtos/MIT_App_Inventor_Microbit_LED.pdf',
    description: 'Make a simple app that draws a smiley face on the BBC micro:bit\'s LED matrix.',
    equipment: ['BBC micro:bit'],
    time: 20,
  }, {
    title: 'How to: Use the BBC micro:bit Temperature Sensor',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/microbit_back.png',
    link: 'assets/howtos/MIT_App_Inventor_Microbit_Temperature.pdf',
    description: 'Make a simple app that displays the temperature based on readings from a temperature sensor on a micro:bit device.',
    equipment: ['BBC micro:bit'],
    time: 20,
  }, {
    title: 'How to: Control a RGB LED with BBC micro:bit I/O pin',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/microbit_rgbled.jpg',
    link: 'assets/howtos/MIT_App_Inventor_Microbit_IOpin_RGBLED.pdf',
    description: 'Control BBC micro:bit digital output pin status, here we use a RGB LED to demo.',
    equipment: ['BBC micro:bit','RGB LED'],
    time: 60,
  },{
    title: 'How to: Read potentiometer status with BBC micro:bit I/O pin',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/microbit_potentiometer.jpg',
    link: 'assets/howtos/MIT_App_Inventor_Microbit_IOpin_potentiometer.pdf',
    description: 'Read BBC micro:bit analog input pin status with a potentiometer connected (or any other analog input component.',
    equipment: ['BBC micro:bit','potentiometer'],
    time: 60,
  },{
    title: 'LED Control Tutorial',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_led.png',
    link: 'assets/howtos/MIT_App_Inventor_LED_Control.pdf',
    description: 'Make a simple app that controls the LED light on an Arduino controller. Turn the light on and off, and change its intensity with a slider.',
    equipment: ['Arduino 101', 'LED (optional)'],
    time: 20,
  }, {
    title: 'How to: LED blinking',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_light.png',
    link: 'assets/howtos/MIT_App_Inventor_7697_LED.pdf',
    description: 'Control the LED light on LinkIt 7697 (Arduino compatible). Turn the light on and off by buttons and speech recognizer.',
    equipment: ['LinkIt 7697', 'LED (optional)'],
    time: 90,
  },{
    title: 'How to: Read soil moisture status (BLE)',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_moisture.png',
    link: 'assets/howtos/MIT_App_Inventor_7697_analogread.pdf',
    description: 'Read analog pin data of LinkIt 7697 (Arduino compatible). This time we use a moisture sensor to monitor the soil.',
    equipment: ['LinkIt 7697', 'moisture sensor (or any analog input component)'],
    time: 90,
  },{
    title: 'How to: Wheeled robot control (BLE)',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/linkit_wheeledrobot.jpg',
    link: 'assets/howtos/MIT_App_Inventor_7697_BLE_WheeledRobot.pdf',
    description: 'Control a wheeled robot moving around and its headlight(LED) through Bluetooth.',
    equipment: ['LinkIt 7697', 'wheeled robot chassis'],
    time: 90,
  }, {
    title: 'How to: RGB LED blinking (Wi-Fi)',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/RGBLED.jpg',
    link: 'assets/howtos/MIT_App_Inventor_7697_WIFILED.pdf',
    description: 'Control LinkIt 7697 RGB LED to shine in four different colors through Wi-Fi',
    equipment: ['LinkIt 7697', 'RGB LED', 'breadboard', 'jump wires'],
    time: 90,
  },{
    title: 'How to: Wheeled robot control (Wi-Fi)',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/linkit_wheeledrobot.jpg',
    link: 'assets/howtos/MIT_App_Inventor_7697_WIFIWheeledRobot.pdf',
    description: 'Control a wheeled robot moving around and its headlight(LED) through Wi-Fi.',
    equipment: ['LinkIt 7697', 'wheeled robot chassis'],
    time: 90,
  },{
    title: 'How to: read light sensor data (Wi-Fi)',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/linkit_wheeledrobot.jpg',
    link: 'assets/howtos/MIT_App_Inventor_7697_WIFI_lightsensor.pdf',
    description: 'Control a wheeled robot moving around and its headlight(LED) through Wi-Fi.',
    equipment: ['LinkIt 7697', 'Grove light sensor'],
    time: 90,
  },{
    title: 'How to: moviing robot with buttons',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/LegoEV3Robot.jpg',
    link: 'assets/howtos/MIT_App_Inventor_EV3_ButtonControl.pdf',
    description: 'Control Lego EV3 robot with app buttons. You can also adjust the motor speed by sliders.',
    equipment: ['Lego EV3 brick', 'motor x2', 'assemble bricks'],
    time: 60,
  },{
    title: 'How to: display sensor value on app',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/LegoEV3.png',
    link: 'assets/howtos/MIT_App_Inventor_EV3_SensorPanel.pdf',
    description: 'View Lego EV3 sensor status on app screen: touch, ultrasonic and color sensors.',
    equipment: ['Lego EV3 brick', 'touch sensor', 'light sensor', 'ultrasonic sensor'],
    time: 60,
  },{
    title: 'How to: moving robot with one touch point',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/LegoEV3Robot.jpg',
    link: 'assets/howtos/MIT_App_Inventor_EV3_OneTouchControl.pdf',
    description: 'Control Lego EV3 robot with one finger. You can learn the basic concept of Trigonometric function.',
    equipment: ['Lego EV3 brick', 'motor x2', 'assemble bricks'],
    time: 60,
  } 
];

const HowTos = () => (
    <div className='app-list'>
    <table>
    <tbody>
    <tr><th colSpan="2">Name &amp; Description</th><th>Est. Time</th><th>Hardware</th></tr>
    {howtosList.map((app) => (
        <tr key={app.link}>
        <td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href={app.link}><img src={app.img} alt={app.title} style={{width: '100%', minWidth: '40px', maxWidth: '320px'}} /></a></td>
        <td><a style={{display: 'block', textDecoration: 'none', color: 'black'}} href={app.link}><strong>{app.title}</strong><br/><emph>by: {app.author}</emph><br/><br/>{app.description}</a></td>
        <td>{app.time} minutes</td>
        <td><ul>{app.equipment.map((sensor) => (
            <li key={app.link + ':' + sensor}>{sensor}</li>
        ))}</ul></td></tr>
    ))}
    </tbody>
    </table>
  </div>
);

export default HowTos;
