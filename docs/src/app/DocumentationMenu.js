import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import {white} from 'material-ui/styles/colors';

class DocumentationMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <span>
        <FlatButton
          style={{color: white, position: 'relative', verticalAlign: 'middle', minWidth: 'auto'}}
          onTouchTap={this.handleTouchTap}
          children={<span><span className="small-only">Docs</span><span className='big-only'>Documentation</span><i className="material-icons">arrow_drop_down</i></span>}
          labelPosition="before"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem
              primaryText="Devices"
              containerElement={<Link to="/devices/devicesintro" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="BluetoothLE"
              containerElement={<Link to="/bluetoothle/bluetoothleintro" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="Arduino 101"
              containerElement={<Link to="/arduino101/arduino101intro" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="BBC micro:bit"
              containerElement={<Link to="/microbit/microbitintro" />}
              onClick={this.handleRequestClose}
            />
          </Menu>
        </Popover>
      </span>
    );
  }
}

export default DocumentationMenu;
