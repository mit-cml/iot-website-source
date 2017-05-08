import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {spacing, typography, zIndex} from 'material-ui/styles';
// import {green400} from 'material-ui/styles/colors';

const SelectableList = makeSelectable(List);

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: '#a5cf47',
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8,
  },
  version: {
    paddingLeft: spacing.desktopGutterLess,
    fontSize: 16,
  },
};

class AppNavDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onChangeList: PropTypes.func.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  state = {
    muiVersions: [],
  };

  componentDidMount() {
    const self = this;
    const url = '/versions.json';
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        self.setState({
          muiVersions: JSON.parse(request.responseText),
          version: JSON.parse(request.responseText)[0],
        });
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  firstNonPreReleaseVersion() {
    let version;
    for (let i = 0; i < this.state.muiVersions.length; i++) {
      version = this.state.muiVersions[i];
      // If the version doesn't contain '-' and isn't 'HEAD'
      if (!/-/.test(version) && version !== 'HEAD') {
        break;
      }
    }
    return version;
  }

  handleVersionChange = (event, index, value) => {
    if (value === this.firstNonPreReleaseVersion()) {
      window.location = 'http://www.material-ui.com/';
    } else {
      window.location = `http://www.material-ui.com/${value}`;
    }
  };

  currentVersion() {
    if (window.location.hostname === 'localhost') return this.state.muiVersions[0];
    if (window.location.pathname === '/') {
      return this.firstNonPreReleaseVersion();
    } else {
      return window.location.pathname.replace(/\//g, '');
    }
  }

  handleRequestChangeLink = (event, value) => {
    window.location = value;
  };

  handleTouchTapHeader = () => {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  };

  render() {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.drawer - 100}}
      >
        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          Internet of Things
        </div>

        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
        <Subheader>GET STARTED</Subheader>
        <Divider />
          <ListItem
            primaryText="Teachers"
            primaryTogglesNestedList={true}
            value="/teachers/intro"
            href="#/teachers/intro"
            nestedItems={[
              <ListItem
                primaryText="Tutorials"
                value="/teachers/tutorials"
                href="#/teachers/tutorials"
              />,
              <ListItem
                primaryText="How-to's"
                value="/teachers/howtos"
                href="#/teachers/howtos"
              />,
              <ListItem
                primaryText="Exemplars"
                value="/teachers/exemplars"
                href="#/teachers/exemplars"
              />,
              <ListItem
                primaryText="Curriculum"
                value="/teachers/curriculum"
                href="#/teachers/curriculum"
              />,
            ]}
          />
          <ListItem
            primaryText="Students"
            primaryTogglesNestedList={true}
            value="/students/intro"
            href="#/students/intro"
          />
          <ListItem
            primaryText="Makers"
            primaryTogglesNestedList={true}
            value="/makers/intro"
            href="#/makers/intro"
          />
          <Divider />
            <Subheader>RESOURCES</Subheader>
          <Divider />

          <ListItem
            primaryText="Documentation"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                primaryText="BluetoothLE"
                value="/documentation/bluetoothle"
                href="#/documentation/bluetoothle"
              />,
              <ListItem
                primaryText="Arduino 101"
                primaryTogglesNestedList={true}
                value="/documentation/arduino101"
                href="#/documentation/arduino101"
                nestedItems={[
                  <ListItem
                    primaryText="Accelerometer"
                    value="/documentation/arduinoaccelerometer"
                    href="#/documentation/arduinoaccelerometer"
                  />,
                  <ListItem
                    primaryText="Button"
                    value="/documentation/arduinobutton"
                    href="#/documentation/arduinobutton"
                  />,
                  <ListItem
                    primaryText="Gyroscope"
                    value="/documentation/arduinogyroscope"
                    href="#/documentation/arduinogyroscope"
                  />,
                  <ListItem
                    primaryText="Humidity"
                    value="/documentation/arduinohumidity"
                    href="#/documentation/arduinohumidity"
                  />,
                  <ListItem
                    primaryText="LED"
                    value="/documentation/arduinoled"
                    href="#/documentation/arduinoled"
                  />,
                  <ListItem
                    primaryText="Light Sensor"
                    value="/documentation/arduinolightsensor"
                    href="#/documentation/arduinolightsensor"
                  />,
                  <ListItem
                    primaryText="Moisture"
                    value="/documentation/arduinomoisture"
                    href="#/documentation/arduinomoisture"
                  />,
                  <ListItem
                    primaryText="Pins"
                    value="/documentation/arduinopins"
                    href="#/documentation/arduinopins"
                  />,
                  <ListItem
                    primaryText="Proximity Sensor"
                    value="/documentation/arduinoproximitysensor"
                    href="#/documentation/arduinoproximitysensor"
                  />,
                  <ListItem
                    primaryText="PWM Motor"
                    value="/documentation/arduinopwm"
                    href="#/documentation/arduinopwm"
                  />,
                  <ListItem
                    primaryText="RGB Lcd"
                    value="/documentation/arduinorgblcd"
                    href="#/documentation/arduinorgblcd"
                  />,
                  <ListItem
                    primaryText="Servo"
                    value="/documentation/arduinoservo"
                    href="#/documentation/arduinoservo"
                  />,
                  <ListItem
                    primaryText="Sound Recorder"
                    value="/documentation/arduinosoundrecorder"
                    href="#/documentation/arduinosoundrecorder"
                  />,
                ]}
              />,
              <ListItem
                primaryText="Micro-bit"
                primaryTogglesNestedList={true}
                value="/documentation/microbit"
                href="#/documentation/microbit"
                nestedItems={[
                  <ListItem
                    primaryText="Introduction"
                    value="/documentation/microbitcomponent"
                    href="#/documentation/microbitcomponent"
                  />,
                  <ListItem
                    primaryText="Accelerometer"
                    value="/documentation/microbitaccelerometer"
                    href="#/documentation/microbitaccelerometer"
                  />,
                  <ListItem
                    primaryText="Button"
                    value="/documentation/microbitbutton"
                    href="#/documentation/microbitbutton"
                  />,
                  <ListItem
                    primaryText="Device Information"
                    value="/documentation/microbitdeviceinformation"
                    href="#/documentation/microbitdeviceinformation"
                  />,
                  <ListItem
                    primaryText="Dfu Control"
                    value="/documentation/microbitdfucontrol"
                    href="#/documentation/microbitdfucontrol"
                  />,
                  <ListItem
                    primaryText="Event"
                    value="/documentation/microbitevent"
                    href="#/documentation/microbitevent"
                  />,
                  <ListItem
                    primaryText="Generic Access"
                    value="/documentation/microbitgenericaccess"
                    href="#/documentation/microbitgenericaccess"
                  />,
                  <ListItem
                    primaryText="Generic Attribute"
                    value="/documentation/microbitgenericattribute"
                    href="#/documentation/microbitgenericattribute"
                  />,
                  <ListItem
                    primaryText="io Pin"
                    value="/documentation/microbitiopin"
                    href="#/documentation/microbitiopin"
                  />,
                  <ListItem
                    primaryText="LED"
                    value="/documentation/microbitled"
                    href="#/documentation/microbitled"
                  />,
                  <ListItem
                    primaryText="Magnetometer"
                    value="/documentation/microbitmagnetometer"
                    href="#/documentation/microbitmagnetometer"
                  />,
                  <ListItem
                    primaryText="Temperature"
                    value="/documentation/microbitemperature"
                    href="#/documentation/microbittemperature"
                  />,
                  <ListItem
                    primaryText="UART"
                    value="/documentation/microbituart"
                    href="#/documentation/microbituart"
                  />,
                ]}
              />,
            ]}
          />
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;
