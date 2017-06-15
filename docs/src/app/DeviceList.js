// -*- mode: javascript; js-indent-level: 2; -*-
import React from 'react';

require('./table.css');

const deviceList = [
  {
    title: 'Bluetooth low energy',
    img: 'assets/tutorials/bluetooth_logo.png',
    link: '#/bluetoothle/bluetoothleintro',
    description: 'Bluetooth Low Energy, also referred to as Bluetooth LE or simply BLE, is a new protocol similar to classic Bluetooth except that it is designed to consume less power while maintaining comparable functionality.',
  }, {
    title: 'Arduino 101',
    img: 'assets/howtos/arduino_101.png',
    link: '#/arduino101/arduino101intro',
    description: 'The Arduino 101 is a version of the popular Arduino platform based on the Intel® Curie™ chipset. It has the same form factor as many other Arduino but supports built-in Bluetooth® low energy.',
  }, {
    title: 'BBC micro:bit',
    img: 'assets/howtos/microbit_back.png',
    link: '#/microbit/microbitintro',
    description: "The micro:bit is a computing platform from the BBC. It is an open platform for developing all manner of projects and is programmable by many different editors, including a blocks editor provided by Microsoft. Learn more about the micro:bit at the Micro:bit Educational Foundation's website.",
  },
];

const DeviceList = () => (
  <div className="app-list">
    <table>
      <tbody>
        {deviceList.map((app) => (
          <tr key={app.link}>
            <td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href={app.link}><img src={app.img} alt={app.title} style={{width: '240px', minWidth: '40px', maxWidth: '320px'}} /></a></td>
            <td><a style={{display: 'block', textDecoration: 'none', color: 'black'}} href={app.link}><strong>{app.title}</strong><br />{app.description}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DeviceList;
