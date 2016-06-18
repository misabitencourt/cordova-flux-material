var AppDispatcher = require('../dispatchers/AppDispatcher');

var MenuActions = {

  /**
   * @param  {string} id
   */
  redirect(session) {
    this.toggleMenu();
    AppDispatcher.handleViewAction({
      actionType: 'MENU_ACTION_REDIRECT',
      session: session
    });
  },

  toggleMenu() {
    AppDispatcher.handleViewAction({
      actionType: 'MENU_ACTION_TOGGLE'
    });
  }

};

module.exports = MenuActions;
