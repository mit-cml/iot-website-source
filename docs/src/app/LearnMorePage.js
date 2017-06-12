import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HomeFeature from './HomeFeature';
import FullWidthSection from './FullWidthSection';
// Used for donate section button.
// import RaisedButton from 'material-ui/RaisedButton';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {darkWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

class LearnMorePage extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  LearnMore() {
    const styles = {
      root: {
        backgroundColor: darkWhite,
      },
      floatLeft: {
        float: 'left',
      },
      floatRight: {
        float: 'right',
      },
      content: {
        maxWidth: 900,
        padding: 0,
        margin: '0 auto',
        fontWeight: typography.fontWeightLight,
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 6,
        letterSpacing: 0,
        color: typography.textDarkBlack,
      },
    };

    return (
      <FullWidthSection
        style={styles.root}
        useContent={true}
        contentStyle={styles.content}
        contentType="p"
        className="home-purpose"
      >
        <h3>Bring computing off the screen and into the world of everyday things!</h3>
        <br /><br />
        The Internet of Things (IoT) refers to interfaces between everyday objects and the Internet,
        opening up a universe of new applications, smarter devices, and wider opportunities.
        With MIT App Inventor IoT, you can enter this universe as a creator, not just a consumer, even if you’ve never
        programmed before.
        <br /><br />
        You can develop IoT applications the same way you develop any other MIT App Inventor mobile apps.
        Now you can program devices, sensors, appliances, instruments, robots&mdash; anything that can be connected.
        Not only that, you can incorporate smartphone capabilities into your IoT creations.
        If you build an app that turns a light on and off, you can make the light respond to voice commands.
        If you build a heart monitor, you can store the results on the Web or email them to trainers.
        If you program a mobile robot, you can add geolocation to the robot’s sensing abilities.
        <br /><br />
        App Inventor IoT is designed to operate with an extended collection of interfaces that link to families of
        devices. This first App Inventor IoT release works with the Arduino 101 and the BBC micro:bit, and we will
        be adding more devices soon!
        <br /><br />
        <div>
          <div style={styles.floatLeft}>
            <RaisedButton
              label="Get started!" href="#LearnMore"
              primary="true"
            /></div>
          <div style={styles.floatRight}>
            <RaisedButton
              label="Back to Home"
              href="#"
            /></div>
        </div>
      </FullWidthSection>
    );
  }

  render() {
    const style = {
      paddingTop: spacing.desktopKeylineIncrement,
    };

    return (
      <div style={style}>
        {this.LearnMore()}
      </div>
    );
  }
}

export default withWidth()(LearnMorePage);
