import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {white} from 'material-ui/styles/colors';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {spacing, typography, zIndex} from 'material-ui/styles';
import Divider from 'material-ui/Divider';
const SelectableList = makeSelectable(List);

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: white,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightNormal,
    backgroundColor: '#a5cf47',
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8,
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

  onChangeList = (event, value) => {
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
        <div style={styles.logo} onClick={this.handleTouchTapHeader}>
          <FontIcon className="material-icons">
            <NavigationClose style={{color: white}} /></FontIcon>
          &nbsp;&nbsp;Internet of Things
        </div>

        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
          <ListItem
            primaryText="Home"
            value="/"
            href="#"
          />
          <ListItem
            primaryText="Getting Started"
            value="/getstarted/intro"
            href="#/getstarted/intro"
          />
          <ListItem
            primaryText="Tutorials"
            value="/teachers/tutorials"
            href="#/teachers/tutorials"
          />
          <ListItem
            primaryText="How Tos"
            value="/teachers/howtos"
            href="#/teachers/howtos"
          />
          <ListItem
            primaryText="IoT in Action"
            value="/teachers/examples"
            href="#/teachers/examples"
          />
          <Divider />
          <ListItem
            primaryText="Devices"
            primaryTogglesNestedList={true}
            value="/devices/devicesintro"
            href="#/devices/devicesintro"
          />
          <ListItem
            primaryText="BluetoothLE"
            value="/bluetoothle/bluetoothleintro"
            href="#/bluetoothle/bluetoothleintro"
          />
          <ListItem
            primaryText="Arduino 101"
            primaryTogglesNestedList={true}
            value="/arduino101/arduino101intro"
            href="#/arduino101/arduino101intro"
            nestedItems={[
              <ListItem
                primaryText="Accelerometer"
                value="/arduino101/arduinoaccelerometer"
                href="#/arduino101/arduinoaccelerometer"
              />,
              <ListItem
                primaryText="Button"
                value="/arduino101/arduinobutton"
                href="#/arduino101/arduinobutton"
              />,
              <ListItem
                primaryText="Gyroscope"
                value="/arduino101/arduinogyroscope"
                href="#/arduino101/arduinogyroscope"
              />,
              <ListItem
                primaryText="Humidity"
                value="/arduino101/arduinohumidity"
                href="#/arduino101/arduinohumidity"
              />,
              <ListItem
                primaryText="LED"
                value="/arduino101/arduinoled"
                href="#/arduino101/arduinoled"
              />,
              <ListItem
                primaryText="Light Sensor"
                value="/arduino101/arduinolightsensor"
                href="#/arduino101/arduinolightsensor"
              />,
              <ListItem
                primaryText="Moisture"
                value="/arduino101/arduinomoisture"
                href="#/arduino101/arduinomoisture"
              />,
              <ListItem
                primaryText="Pins"
                value="/arduino101/arduinopins"
                href="#/arduino101/arduinopins"
              />,
              <ListItem
                primaryText="Proximity Sensor"
                value="/arduino101/arduinoproximitysensor"
                href="#/arduino101/arduinoproximitysensor"
              />,
              <ListItem
                primaryText="PWM Motor"
                value="/arduino101/arduinopwm"
                href="#/arduino101/arduinopwm"
              />,
              <ListItem
                primaryText="RGB Lcd"
                value="/arduino101/arduinorgblcd"
                href="#/arduino101/arduinorgblcd"
              />,
              <ListItem
                primaryText="Servo"
                value="/arduino101/arduinoservo"
                href="#/arduino101/arduinoservo"
              />,
              <ListItem
                primaryText="Sound Recorder"
                value="/arduino101/arduinosoundrecorder"
                href="#/arduino101/arduinosoundrecorder"
              />,
            ]}
          />
          <ListItem
            primaryText="BBC micro:bit"
            primaryTogglesNestedList={true}
            value="/microbit/microbitintro"
            href="#/microbit/microbitintro"
            nestedItems={[
              <ListItem
                primaryText="Accelerometer"
                value="/microbit/microbitaccelerometer"
                href="#/microbit/microbitaccelerometer"
              />,
              <ListItem
                primaryText="Button"
                value="/microbit/microbitbutton"
                href="#/microbit/microbitbutton"
              />,
              <ListItem
                primaryText="IO Pin"
                value="/microbit/microbitiopin"
                href="#/microbit/microbitiopin"
              />,
              <ListItem
                primaryText="LED"
                value="/microbit/microbitled"
                href="#/microbit/microbitled"
              />,
              <ListItem
                primaryText="Magnetometer"
                value="/microbit/microbitmagnetometer"
                href="#/microbit/microbitmagnetometer"
              />,
              <ListItem
                primaryText="Temperature"
                value="/microbit/microbittemperature"
                href="#/microbit/microbittemperature"
              />,
              <ListItem
                primaryText="UART"
                value="/microbit/microbituart"
                href="#/microbit/microbituart"
              />,
            ]}
          />
		  <ListItem
            primaryText="LinkIt series boards"
            primaryTogglesNestedList={true}
            value="/linkit/linkitintro"
            href="#/linkit/linkitintro"
            nestedItems={[
              <ListItem
                primaryText="LinkIt 7697"
                value="/linkit/linkit7697"
                href="#/linkit/linkit7697"
              />,
              <ListItem
                primaryText="LinkIt 7688"
                value="/linkit/linkit7688"
                href="#/linkit/linkit7688"
              />,
            ]}
          />
		  <ListItem
            primaryText="LEGO® MINDSTORMS® EV3 robot"
            primaryTogglesNestedList={false}
            value="/legoev3/legoev3intro"
            href="#/legoev3/legoev3intro"
          />
          <Divider />
          <ListItem
            primaryText="Help"
            value="/help/intro"
            href="#/help/intro"
          />
          <ListItem
            primaryText="FAQ"
            value="/faq/faq"
            href="#/faq/faq"
          />
          <ListItem
            primaryText="Forum"
            href="https://groups.google.com/forum/#!forum/mitappinventortest"
          />
          <Divider />
          <ListItem
            primaryText="Contact Us"
            href="http://appinventor.mit.edu/explore/contact.html"
          />
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;
