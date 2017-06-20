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
    title: 'LED Control Tutorial',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_led.png',
    link: 'assets/howtos/MIT_App_Inventor_LED_Control.pdf',
    description: 'Make a simple app that controls the LED light on an Arduino controller. Turn the light on and off, and change its intensity with a slider.',
    equipment: ['Arduino 101', 'LED (optional)'],
    time: 20,
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
