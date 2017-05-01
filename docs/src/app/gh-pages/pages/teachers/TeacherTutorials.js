import React from 'react';
import Title from 'react-title-component';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MarkdownElement from '../../MarkdownElement';
import teachersTutorialsText from './teachers-tutorials.md';

const styles = {
  gridList: {
    margin: 10,
  },
  gridImage: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%',
    cursor: 'pointer',
  },
};

const teachersTutorialsList = [
  // Under development
  // {
  //   title: 'Title',
  //   author: 'App Inventor Project',
  //   img: 'images/tutorials/tutorials.png',
  //   link: '',
  // },
  {
    title: 'SplitMe - Split expenses with friends',
    author: 'Olivier Tassinari',
    img: 'images/showcase/splitme.png',
    link: 'https://splitme.net/',
    source: 'https://github.com/oliviertassinari/SplitMe',
  },
  {
    title: 'Syncano',
    author: 'Syncano',
    img: 'images/showcase/syncano.png',
    link: 'https://syncano.io/',
    source: 'https://github.com/Syncano/syncano-dashboard',
  },
];

const TeachersTutorials = () => (
  <div>
    <Title render={(previousTitle) => `Showcase - ${previousTitle}`} />
    <MarkdownElement text={teachersTutorialsText} />
    <GridList
      cols={3}
      cellHeight={200}
      style={styles.gridList}
    >
      {appList.map((app) => (
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
          <a href={app.link} target="_blank">
            <img src={app.img} style={styles.gridImage} />
          </a>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default TeachersTutorials;
