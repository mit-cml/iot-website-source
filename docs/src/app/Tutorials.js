// -*- mode: javascript; js-indent-level: 2; -*-
import React from 'react';

require('./table.css');

const styles = {
  assetsList: {
    margin: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '720px'
  },
  assetsImage: {
    width: '320px',
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'absolute',
    cursor: 'pointer',
  },
};

const tutorialsList = [
  {
    title: 'MIT App Inventor IoT Setup',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/arduino_logo.png',
    link: 'assets/tutorials/MIT_App_Inventor_IoT_Setup.pdf',
    description: 'Install and setup the Arduino development environment on your computer to interact with App Inventor.',
    equipment: ['Arduino 101 or BBC micro:bit'],
    time: 30,
  }, {
    title: 'MIT App Inventor IoT BLE Basic Connection',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/bluetooth_logo.png',
    link: 'assets/tutorials/MIT_App_Inventor_Basic_Connection.pdf',
    description: 'Make a basic app that scans for Bluetooth devices and allows you to connect to a selected device.',
    equipment: ['Arduino 101 or BBC micro:bit'],
    time: 30,
  }, {
    title: 'MIT App Inventor IoT Starter',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/arduino_101.png',
    link: 'assets/tutorials/MIT_App_Inventor_IoT_Starter_Tutorial.pdf',
    description: 'Make a simple app that connects to an Arduino controller and makes the Arduino board LED light blink.',
    equipment: ['Arduino 101', 'LED (optional)'],
    time: 30,
  }, {
    title: 'MIT App Inventor IoT Healthy Plant',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/healthy_plant.png',
    link: 'assets/tutorials/MIT_App_Inventor_IoT_Healthy_Plant.pdf',
    description: 'Make an environmental app that monitors the health of your plant using various sensors. Moisture, light, and temperature are displayed in a bar graph based on sensor readings from the Arduino controller.',
    equipment: ['Arduino 101', 'Light Sensor', 'Moisture Sensor', 'RBB LCD', 'Temperature & Humidity Sensor'],
    time: 90,
  },
];

const Tutorials = () => (
    <div className='app-list'>
    <table>
    <tbody>
    <tr><th colSpan="2">Name &amp; Description</th><th>Est. Time</th><th>Hardware</th></tr>
    {tutorialsList.map((app) => (
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

export default Tutorials;
