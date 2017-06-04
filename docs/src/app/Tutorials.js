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

const tutorialsList = [
  {
    title: 'Healthy Plant',
    author: 'MIT App Inventor Project',
    img: 'assets/tutorials/HealthyPlant.png',
    link: 'assets/tutorials/HealthyPlant.pdf',
  },
];

const Tutorials = () => (
    <GridList
      cols={3}
      cellHeight={200}
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
