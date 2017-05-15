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

class HomePage extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  homePageTitleBanner() {
    const styles = {
      root: {
        backgroundColor: '#00728a',
        overflow: 'hidden',
      },
      svgLogo: {
        marginLeft: window.innerWidth * 0.5 - 130,
        width: 420,
        height: 157,
      },
      tagline: {
        color: '#00728a',
        margin: '16px auto 16px auto',
        textAlign: 'center',
        maxWidth: 900,
      },
      label: {
        color: lightBaseTheme.palette.primary1Color,
      },
      githubStyle: {
        margin: '16px 32px 0px 8px',
      },
      demoStyle: {
        margin: '16px 32px 0px 32px',
      },
      h1: {
        color: darkWhite,
        fontWeight: typography.fontWeightLight,
      },
      h2: {
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 12,
        letterSpacing: 0,
      },
      nowrap: {
        whiteSpace: 'nowrap',
      },
      taglineWhenLarge: {
        marginTop: 12,
      },
      h1WhenLarge: {
        fontSize: 56,
      },
      h2WhenLarge: {
        fontSize: 24,
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12,
      },
    };

    styles.h2 = Object.assign({}, styles.h1, styles.h2);

    if (this.props.width === LARGE) {
      styles.tagline = Object.assign({}, styles.tagline, styles.taglineWhenLarge);
      styles.h1 = Object.assign({}, styles.h1, styles.h1WhenLarge);
      styles.h2 = Object.assign({}, styles.h2, styles.h2WhenLarge);
    }

    return (
      <FullWidthSection style={styles.root}>
        <div style={styles.tagline}>
          <h2 style={styles.h1}>MIT App Inventor - Internet of Things</h2>
        </div>
      </FullWidthSection>
    );
  }

  homePurposeAbout() {
    const styles = {
      root: {
        backgroundColor: darkWhite,
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
        style="{styles.root}; font-weight: bold;"
        useContent={true}
        contentStyle={styles.content}
        contentType="p"
        className="home-purpose"
      >
        <b>Empowering young people through mobile computing to impact the world of everyday objects.</b>

        <p>
          MIT App Inventor is an intuitive, visual programming
          environment that allows everyone – even young learners – to build fully
          functional apps for smartphones and tablets. App Inventor is unique among
          block-based programming environments as it empowers kids to make a
          real-world difference in their communities in addition to intellectual
          and creative empowerment. Over 400,000 active and unique monthly users,
          known as App Inventors, from 195 countries have created almost 22 million
          apps. MIT App Inventor is changing the way the world creates apps and the
          way that kids learn about mobile computing.
        </p>

        <p>
          A visual programming language, MIT App Inventor differs from traditional
          text-based programming environments in that it can be used by anyone who
          can use a drag and drop interface. To build an app App Inventors simply
          place icons representing different functions into a coding window.
          App Inventor users can incorporate functionality like SMS and geolocation
          into their apps without having to understand the technical complexity
          behind them, or write thousands of lines of code.
        </p>
        <p>
          <i>
            “After the first App Inventor coding session, [the students were]
            completely hooked. There isn’t any other application like that.”
          </i>
          <p>
            Tara Chklovski, founder and CEO of Iridescent
          </p>
        </p>
      </FullWidthSection>
    );
  }

  homeFeatures() {
    const styles = {maxWidth: 900};

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <HomeFeature
          heading="Teachers"
          route="/teachers/intro"
          img="images/teachers.jpg"
          firstChild={true}
        />
        <HomeFeature
          heading="Students"
          route="/students/intro"
          img="images/students.jpg"
        />
        <HomeFeature
          heading="Makers"
          route="/makers/intro"
          img="images/makers.jpg"
          lastChild={true}
        />
      </FullWidthSection>
    );
  }

  homePurposeIOT() {
    const styles = {
      root: {
        backgroundColor: darkWhite,
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
        <p>
          <b>Takes computing off of the screen and into the world of
            everyday things</b>
        </p>
        <p>
          Developing IoT applications using App Inventor works in the same way as
          developing any other mobile application with App Inventor, except that
          App Inventor IoT allows you to communicate with physical and digital
          objects in your everyday lives. App Inventor IoT achieves this by
          connecting with popular physical computing platforms such as Arduino and
          Raspberry Pi.
        </p>
        <p>
          Using Arduino allows App Inventor creators to connect all kinds of
          sensors (e.g., temperature, light, or sound) and other inputs (like
          buttons and switches).  App Inventors can then write code for the
          Arduino to trigger other connected outputs (like turning on a light,
          playing a sound, or moving a motor), or send events to other devices
          like our smartphones.
        </p>
        <br />
        <p>
          <b>What is the Internet of Things?</b>
        </p>

        <p>
        Internet of Things (IoT) refers to the connection of everyday objects to
        the Internet and to one another, creating smarter devices and more control
        for the users of them. Many everyday objects are being designed with
        built-in wireless connectivity so they can be monitored, controlled and
        linked over the Internet via a mobile app. IoT is increasingly found in
        our homes through our thermostats, light bulbs and microwaves as well as
        more sophisticated objects like wearable medical devices.
      </p>
      </FullWidthSection>
    );
  }

  // homeContribute() {
  //   const styles = {
  //     root: {
  //       backgroundColor: grey200,
  //       textAlign: 'center',
  //     },
  //     h3: {
  //       maxWidth: 900,
  //       padding: 0,
  //       margin: '0 auto',
  //       fontWeight: typography.fontWeightLight,
  //       fontSize: 20,
  //       lineHeight: '28px',
  //       paddingTop: 10,
  //       marginBottom: 5,
  //       letterSpacing: 0,
  //       color: typography.textDarkBlack,
  //     },
  //     button: {
  //       marginTop: 32,
  //     },
  //   };
  //
  //   return (
  //     <FullWidthSection useContent={true} style={styles.root}>
  //
  //       <h3 style={styles.h3}>
  //         Empower our young people through mobile computing to
  //         impact the world of everyday objects. Please consider supporting this
  //         project.
  //       </h3>
  //
  //       <h3 style={styles.h3}>
  //         Thank you, from the MIT App Inventor team.
  //       </h3>
  //
  //       <RaisedButton
  //         label="Donate"
  //         primary={true}
  //         href="https://github.com/mit-cml"
  //         style={styles.button}
  //       />
  //     </FullWidthSection>
  //   );
  // }

  // handleTouchTapDonate = () => {
  //   this.context.router.push('/components');
  // };

  render() {
    const style = {
      paddingTop: spacing.desktopKeylineIncrement,
    };

    return (
      <div style={style}>
        {this.homePageTitleBanner()}
        {this.homePurposeAbout()}
        {this.homeFeatures()}
        {this.homePurposeIOT()}
      </div>
    );
  }
}

export default withWidth()(HomePage);
