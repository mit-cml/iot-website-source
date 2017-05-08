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
            value="/teachers/toppage"
            href="#/teachers/toppage"
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
          <Divider />
            <Subheader>RESOURCES</Subheader>
          <Divider />

          <ListItem
            primaryText="Extensions"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                primaryText="BluetoothLE"
                value="/components/bluetoothle"
                href="#/components/bluetoothle"
              />,
              <ListItem
                primaryText="Arduino 101"
                primaryTogglesNestedList={true}
                value="/components/arduino101"
                href="#/components/arduino101"
                nestedItems={[
                  <ListItem
                    primaryText="Accelerometer"
                    value="/components/arduinoaccelerometer"
                    href="#/components/arduinoaccelerometer"
                  />,
                  <ListItem
                    primaryText="Button"
                    value="/components/arduinobutton"
                    href="#/components/arduinobutton"
                  />,
                  <ListItem
                    primaryText="Gyroscope"
                    value="/components/arduinogyroscope"
                    href="#/components/arduinogyroscope"
                  />,
                  <ListItem
                    primaryText="Humidity"
                    value="/components/arduinohumidity"
                    href="#/components/arduinohumidity"
                  />,
                  <ListItem
                    primaryText="LED"
                    value="/components/arduinoled"
                    href="#/components/arduinoled"
                  />,
                  <ListItem
                    primaryText="Light Sensor"
                    value="/components/arduinolightsensor"
                    href="#/components/arduinolightsensor"
                  />,
                  <ListItem
                    primaryText="Moisture"
                    value="/components/arduinomoisture"
                    href="#/components/arduinomoisture"
                  />,
                  <ListItem
                    primaryText="Pins"
                    value="/components/arduinopins"
                    href="#/components/arduinopins"
                  />,
                  <ListItem
                    primaryText="Proximity Sensor"
                    value="/components/arduinoproximitysensor"
                    href="#/components/arduinoproximitysensor"
                  />,
                  <ListItem
                    primaryText="PWM Motor"
                    value="/components/arduinopwm"
                    href="#/components/arduinopwm"
                  />,
                  <ListItem
                    primaryText="RGB Lcd"
                    value="/components/arduinorgblcd"
                    href="#/components/arduinorgblcd"
                  />,
                  <ListItem
                    primaryText="Servo"
                    value="/components/arduinoservo"
                    href="#/components/arduinoservo"
                  />,
                  <ListItem
                    primaryText="Sound Recorder"
                    value="/components/arduinosoundrecorder"
                    href="#/components/arduinosoundrecorder"
                  />,
                ]}
              />,
              <ListItem
                primaryText="Micro-bit"
                primaryTogglesNestedList={true}
                value="/components/microbit"
                href="#/components/microbit"
                nestedItems={[
                  <ListItem
                    primaryText="Introduction"
                    value="/components/microbitcomponent"
                    href="#/components/microbitcomponent"
                  />,
                  <ListItem
                    primaryText="Accelerometer"
                    value="/components/microbitaccelerometer"
                    href="#/components/microbitaccelerometer"
                  />,
                  <ListItem
                    primaryText="Button"
                    value="/components/microbitbutton"
                    href="#/components/microbitbutton"
                  />,
                  <ListItem
                    primaryText="Device Information"
                    value="/components/microbitdeviceinformation"
                    href="#/components/microbitdeviceinformation"
                  />,
                  <ListItem
                    primaryText="Dfu Control"
                    value="/components/microbitdfucontrol"
                    href="#/components/microbitdfucontrol"
                  />,
                  <ListItem
                    primaryText="Event"
                    value="/components/microbitevent"
                    href="#/components/microbitevent"
                  />,
                  <ListItem
                    primaryText="Generic Access"
                    value="/components/microbitgenericaccess"
                    href="#/components/microbitgenericaccess"
                  />,
                  <ListItem
                    primaryText="Generic Attribute"
                    value="/components/microbitgenericattribute"
                    href="#/components/microbitgenericattribute"
                  />,
                  <ListItem
                    primaryText="io Pin"
                    value="/components/microbitiopin"
                    href="#/components/microbitiopin"
                  />,
                  <ListItem
                    primaryText="LED"
                    value="/components/microbitled"
                    href="#/components/microbitled"
                  />,
                  <ListItem
                    primaryText="Magnetometer"
                    value="/components/microbitmagnetometer"
                    href="#/components/microbitmagnetometer"
                  />,
                  <ListItem
                    primaryText="Temperature"
                    value="/components/microbitemperature"
                    href="#/components/microbittemperature"
                  />,
                  <ListItem
                    primaryText="UART"
                    value="/components/microbituart"
                    href="#/components/microbituart"
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
