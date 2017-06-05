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
        lineHeight: '56px',
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
      a: {
        color: '#00728a',
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
        style={styles.root}
        useContent={true}
        contentStyle={styles.content}
        contentType="p"
        className="home-purpose"
      >
        <h3>You can create apps for the Internet of Things with MIT App Inventor!</h3>
        <br /><br />
        MIT App Inventor lets people around the world build mobile apps that can make a difference in their
        families, schools, and communities&mdash;even if they've never programmed before.
        <br /><br />
        MIT App Inventor is changing how the world creates apps and how kids learn about mobile computing.
        Over 400,000 active inventors a month from 195 countries have created more than 22 million
        apps.
        <br /><br />
        MIT App Inventor now brings that same power and simplicity of app creation to the Internet of Things (IoT) and the universe of connected
        devices.&nbsp;&nbsp;
        <a style={{color: '#00728a', 'text-decoration': 'underline'}} href="#LearnMore">Learn more</a>
      </FullWidthSection>
    );
  }


  homeFeatures() {
    const styles = {
      maxWidth: 900,
      padding: 0,
      margin: '0 auto',
      fontWeight: typography.fontWeightLight,
      fontSize: 20,
      lineHeight: '28px',
      paddingTop: 6,
      marginBottom: 6,
      letterSpacing: 0,
      color: typography.textDarkBlack,
    };

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <HomeFeature
          heading="For Teachers"
          route="/teachers/intro"
          img="images/teachers.jpg"
          firstChild={true}
        />
        <HomeFeature
          heading="For Students"
          route="/students/intro"
          img="images/students.jpg"
        />
        <HomeFeature
          heading="For Makers"
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
        paddingTop: 6, //was 19
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
        Developing IoT applications using MIT App Inventor works the same way as developing any other mobile apps with
        App Inventor, but now your apps can interact with objects all around you.
        <br /><br />
        <center>
        <iframe
          width="600"  // was 900x645
          height="430"
          src="https://www.youtube.com/embed/qqaNznnNZ8M?rel=0"
          frameBorder="0"
          allowFullScreen={true}
        />
      </center>
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
