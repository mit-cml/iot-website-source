import React from 'react';
import GridList from 'material-ui/GridList';
import GridTile from 'material-ui/GridList/GridTile';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

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
  }, {
    title: 'Bluetooth Low Energy Basic Connection',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/arduino_101.png',
    link: 'assets/howtos/MIT_App_Inventor_Basic_Connection.pdf',
  }, {
    title: 'How to: Use the Arduino 101\'s Accelerometer',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/arduino_101.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Accelerometer.pdf',
  }, {
    title: 'How to: Use a Button with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_button.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Button.pdf',
  }, {
    title: 'How to: Use the Arduino 101\'s Gyroscope',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/arduino_101.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Gyroscope.pdf',
  }, {
    title: 'How to: Use a Humidity Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_humidity.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Humidity_Sensor.pdf',
  }, {
    title: 'How to: Use a Light Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_light.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Light_Sensor.pdf',
  }, {
    title: 'How to: Use a Moisture Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_moisture.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Moisture_Sensor.pdf',
  }, {
    title: 'How to: Use a Proximity Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_proximity.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Proximity_Sensor.pdf',
  }, {
    title: 'How to: Use a Sound Recorder with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_sound_recorder.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Sound_Recorder.pdf',
  }, {
    title: 'How to: Use a RGB LCD with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_rgblcd.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_RgbLcd.pdf',
  }, {
    title: 'How to: Use a Temperature Sensor with Arduino',
    author: 'MIT App Invnetor Project',
    img: 'assets/howtos/grove_temperature.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Temperature_Sensor.pdf',
  }, {
    title: 'How to: Display content on the BBC micro:bit LED matrix',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/microbit_front.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Microbit_LED.pdf',
  }, {
    title: 'How to: Use the BBC micro:bit Temperature Sensor',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/microbit_back.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Microbit_Temperature.pdf',
  }, {
    title: 'LED Control Tutorial',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/grove_led.png',
    link: 'assets/howtos/MIT_App_Inventor_LED_Control.pdf',
  }
];

const HowTos = () => (
  <GridList
    cols={3}
    cellHeight={200}
    style={styles.assetsList}
  >
    {howtosList.map((app) => (
      <GridTile
        key={app.title}
        title={app.title}
        subtitle={<span>{'by '}<b>{app.author}</b></span>}
        actionIcon={app.source &&
        <IconButton href={app.source} target="_blank">
          <FontIcon className="muidocs-icon-custom-github" color="white" />
        </IconButton>
        }
      >
        {/* The GridTile `href` prop would nest the `actionIcon` link, so we wrap the image instead. */}
        <a href={app.link}>
          <img src={app.img} style={styles.assetsImage} />
        </a>
      </GridTile>
    ))}
  </GridList>
);

export default HowTos;
