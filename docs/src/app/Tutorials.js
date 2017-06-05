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

const tutorialsList = [
  {
    title: 'MIT App Inventor IoT Setup',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/arduino_logo.png',
    link: 'assets/tutorials/MIT_App_Inventor_IoT_Setup.pdf',
  }, {
    title: 'MIT App Inventor IoT Starter',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/arduino_101.png',
    link: 'assets/tutorials/MIT_App_Inventor_IoT_Starter_Tutorial.pdf',
  }, {
    title: 'LED Control Tutorial',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/grove_led.png',
    link: 'assets/tutorials/MIT_App_Inventor_LED_Control_Tutorial.pdf',
  }, {
    title: 'MIT App Inventor IoT Healthy Plant',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/healthy_plant.png',
    link: 'assets/tutorials/MIT_App_Inventor_IoT_Healthy_Plant.pdf',
  },
];

const Tutorials = () => (
  <GridList
    cols={3}
    cellHeight={240}
    style={styles.assetsList}
  >
    {tutorialsList.map((app) => (
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

export default Tutorials;
