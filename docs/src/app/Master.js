import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightWhite, grey900, white} from 'material-ui/styles/colors';
import AppNavDrawer from './AppNavDrawer';
import FullWidthSection from './FullWidthSection';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import NavigationClose from 'material-ui/svg-icons/navigation/menu';
import ForTeachersMenu from './ForTeachersMenu';
import ForStudentsMenu from './ForStudentsMenu';
import ForMakersMenu from './ForMakersMenu';
import DocumentationMenu from './DocumentationMenu';

require('./icon.css');
require('./menu.css');

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
        muiTheme: getMuiTheme({
            palette: {
                primary1Color: '#a5cf47',
                accent1Color: '#00728a',
            }
        }),
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
        color: white,
        textAlign: 'center',
        maxHeight: 200,
        withWidth: 900,
      },
      a: {
        color: white,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: white,
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
        color: white,
        minWidth: 'auto',
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
      router.isActive('/getstarted') ? 'Getting Started' :
        router.isActive('/teachers') ? 'For Teachers' :
          router.isActive('/students') ? 'For Students' :
            router.isActive('/makers') ? 'For Makers' :
              router.isActive('/help') ? 'Help' :
                router.isActive('/devices') ? 'Devices' :
                  router.isActive('/bluetoothle') ? 'BluetoothLE' :
                    router.isActive('/microbit') ? 'Micro Bit' :
                      router.isActive('/arduino101') ? 'Arduino 101' :
                        router.isActive('/legoev3') ? 'Lego' :
                          router.isActive('/linkit') ? 'LinkIt' :
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
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          title={
            <div style={styles.title}><a id="home" href="#"><span className="title big-only">Internet of Things</span><span className="title small-only">IoT</span></a>
              <div className="nav-container"><nav>
              <FlatButton
                style={{minWidth: 'auto'}}
                labelStyle={styles.iconButton}
                href="#/getstarted/intro"
                children={<span>Getting Started</span>}
              />
              <ForTeachersMenu />
              <ForStudentsMenu />
              <ForMakersMenu />
              <DocumentationMenu />
              <FlatButton
                style={{minWidth: 'auto'}}
                labelStyle={styles.iconButton}
                href="#/help/intro"
                children={<span>Help</span>}
              />
              </nav></div>
            </div>
          }
          zDepth={1}
          iconElementLeft={
            <IconButton><NavigationClose /></IconButton>
          }
          iconElementRight={
            <a href="http://appinventor.mit.edu" style={prepareStyles(styles.browserstackLogo)} target="_blank">
              <span className="aim-icon" />
            </a>
          }
          style={
            styles.appBar
          }
          className="app-bar"
          showMenuIconButton={
            showMenuIconButton
          }
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
          <a href="https://creativecommons.org/licenses/by/4.0/">
            <img alt="Creative Commons License" src="images/4.0_88x31.png" /></a>
          <font color="a5cf47">
            <br />This work is licensed under a <a href="http://creativecommons.org/licenses/by/4.0/">
              <font color="a5cf47">Creative Commons Attribution 4.0 International License</font></a>
            <br /> © 2017 <a href="http://web.mit.edu/">
              <font color="a5cf47">Massachusetts Institute of Technology</font></a>
            <br />
            <a href="http://appinventor.mit.edu/explore/contact.html"><font color="a5cf47">Contact Us</font></a>
          </font>
        </FullWidthSection>
      </div>
    );
  }
}

export default withWidth()(Master);
