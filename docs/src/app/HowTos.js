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
    height: '100%',
    width: '100%',
    transform: 'translateX(-100%)',
    position: 'absolute',
    left: '100%',
    cursor: 'pointer',
  },
};

const howtosList = [
  {
    title: 'Healthy Plant 1',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/HealthyPlant.pdf',
  }, {
    title: 'Bluetooth Low Energy Basic Connection',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_Basic_Connection.pdf',
  }, {
    title: 'How to: Use a Button with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_Button.pdf',
  }, {
    title: 'How to: Use a Humidity Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_Humidity_Sensor.pdf',
  }, {
    title: 'How to: Use a Light Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_Light_Sensor.pdf',
  }, {
    title: 'How to: Use a Moisture Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_Moisture_Sensor.pdf',
  }, {
    title: 'How to: Use a Proximity Sensor with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_Proximity_Sensor.pdf',
  }, {
    title: 'How to: Use a RGB LCD with Arduino',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_RgbLcd.pdf',
  }, {
    title: 'How to: Set up the Arduino Development Environment',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_IoT_Setup.pdf',
  }, {
    title: 'LED Control Tutorial',
    author: 'MIT App Inventor Project',
    img: 'assets/howtos/HealthyPlant.png',
    link: 'assets/howtos/MIT_App_Inventor_LED_Control.pdf',
  },
];

const HowTos = () => (
  <GridList
    cols={3}

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
