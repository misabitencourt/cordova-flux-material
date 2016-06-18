var React = require('react');
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuData from './resources/Menu';
import MenuActions from './actions/MenuActions';
import MenuStore from './stores/MenuStore';

const App = React.createClass({

  getInitialState() {
    return {
      menuOpened: false
    }
  },

  componentDidMount() {
    MenuStore.addListener('MENU_TOGGLE', this._onToggle);
  },

  componentWillUnmount() {
    MenuStore.removeListener('MENU_TOGGLE', this._onToggle);
  },

  _onToggle() {
    this.setState({menuOpened: MenuStore.isOpened()});
  },

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className='app-container'>
          <AppBar
              title="My app"
              iconElementLeft={<IconButton onClick={MenuActions.toggleMenu}><MenuIcon /></IconButton>} />
          <Drawer open={this.state.menuOpened}>
            <MenuItem onClick={MenuActions.toggleMenu}>
              <IconButton><MenuIcon /></IconButton>
            </MenuItem>
            {MenuData.getMenuItems().map((item) => {
               return (<MenuItem key={item.id} onClick={() => {MenuActions.redirect(item.session)}}>
                  {item.name}
                </MenuItem>);
            })}
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
});

module.exports = App;
