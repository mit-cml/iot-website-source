import React, {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import AppNavDrawer from './AppNavDrawer';
import FullWidthSection from './FullWidthSection';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import NavigationClose from 'material-ui/svg-icons/navigation/menu';
import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

class Master extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  state = {
    navDrawerOpen: false,
  };

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(),
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
      footer: {
        backgroundColor: grey900,
        color: darkWhite,
        textAlign: 'center',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: darkWhite,
        maxWidth: 356,
      },
      browserstack: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '25px 15px 0',
        padding: 0,
        color: lightWhite,
        lineHeight: '25px',
        fontSize: 12,
      },
      browserstackLogo: {
        margin: '0 3px',
      },
      iconButton: {
        color: darkWhite,
      },
      iconStyles: {
        marginRight: 24,
      },
    };

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }

  handleTouchTapLeftIconButton = () => {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  };

  handleChangeRequestNavDrawer = (open) => {
    this.setState({
      navDrawerOpen: open,
    });
  };

  handleChangeList = (event, value) => {
    this.context.router.push(value);
    this.setState({
      navDrawerOpen: false,
    });
  };

  handleChangeMuiTheme = (muiTheme) => {
    this.setState({
      muiTheme: muiTheme,
    });
  };

  render() {
    const {
      location,
      children,
    } = this.props;

    let {
      navDrawerOpen,
    } = this.state;

    const {
      prepareStyles,
    } = this.state.muiTheme;

    const router = this.context.router;
    const styles = this.getStyles();
    const title =
      router.isActive('/teachers') ? 'Teachers' :
        router.isActive('/students') ? 'Students' :
          router.isActive('/makers') ? 'Makers' :
            router.isActive('/getstarted') ? 'Get Started' :
              router.isActive('/help') ? 'Help' :
                router.isActive('/devices') ? 'Devices' :
                  router.isActive('/bluetoothle') ? 'BluetoothLE' :
                    router.isActive('/microbit') ? 'Micro Bit' :
                      router.isActive('/arduino101') ? 'Arduino 101' :
                        router.isActive('/faq') ? 'FAQ' :
                          router.isActive('/forum') ? 'Forum' : '';

    let docked = false;
    let showMenuIconButton = true;

    if (this.props.width === LARGE && title !== '') {
      docked = true;
      navDrawerOpen = true;
      showMenuIconButton = false;

      styles.navDrawer = {
        zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
      styles.footer.paddingLeft = 256;
    }

    // noinspection JSAnnotator
    return (
      <div>
        <Title render="Internet of Things" />
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          title={
            <span style={styles.title}>Internet of Things
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FlatButton
              labelStyle={styles.iconButton}
              href="#/teachers/intro"
              label="Teachers"
            />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FlatButton
                labelStyle={styles.iconButton}
                href="#/students/intro"
                label="Students"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FlatButton
                labelStyle={styles.iconButton}
                href="#/makers/intro"
                label="Makers"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FlatButton
                labelStyle={styles.iconButton}
                href="#/getstarted/intro"
                label="Get Started"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FlatButton
                labelStyle={styles.iconButton}
                href="#/help/intro"
                label="Help"
              />
            </span>
          }

          zDepth={1}

          iconElementLeft={
            <IconButton><NavigationClose /></IconButton>
          }

          iconElementRight={
            <a href="http://appinventor.mit.edu" style={prepareStyles(styles.browserstackLogo)}>
              <img src="images/logo-white.png" width="auto" />
            </a>
          }

          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}
        />
        {title !== '' ?
          <div style={prepareStyles(styles.root)}>
            <div style={prepareStyles(styles.content)}>
              {React.cloneElement(children, {
                onChangeMuiTheme: this.handleChangeMuiTheme,
              })}
            </div>
          </div> :
          children
        }
        <AppNavDrawer
          style={styles.navDrawer}
          location={location}
          docked={docked}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
          onChangeList={this.handleChangeList}
          open={navDrawerOpen}
        />
        <FullWidthSection style={styles.footer}>
          <a href="https://creativecommons.org/licenses/by-sa/3.0/">
            <img alt="Creative Commons License" src="images/sa_3.0_88x31.png" />
          </a>
          <br /> This work is licensed under a <a href="http://creativecommons.org/licenses/by-sa/3.0/">
            Creative Commons Attribution-ShareAlike 3.0 Unported License</a>
          <br /> © 2012-2017 <a href="http://web.mit.edu/">Massachusetts Institute of Technology</a>
          <br />
          <a href="http://appinventor.mit.edu/explore/contact.html">Contact Us</a>
        </FullWidthSection>
      </div>
    );
  }
}

export default withWidth()(Master);
