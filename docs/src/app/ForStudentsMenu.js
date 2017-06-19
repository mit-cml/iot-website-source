import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import {white} from 'material-ui/styles/colors';

class ForTeachersMenu extends Component {

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
          children={<span><span className='big-only'>For </span>Students<i className="material-icons">arrow_drop_down</i></span>}
          labelPosition="before"
          primary={true}
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
              primaryText="Intro"
              containerElement={<Link to="/students/intro" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="Tutorials"
              containerElement={<Link to="/teachers/tutorials" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="How Tos"
              containerElement={<Link to="/teachers/howtos" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="IoT in Action"
              containerElement={<Link to="/teachers/examples" />}
              onClick={this.handleRequestClose}
            />
          </Menu>
        </Popover>
      </span>
    );
  }
}

export default ForTeachersMenu;
