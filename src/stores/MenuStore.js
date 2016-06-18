var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var menuState = {};

function redirect(session) {
  menuState.session = session || 'home';
}

function toggle() {
  menuState.opened = !menuState.opened;
}

var MenuStore = assign({}, EventEmitter.prototype, {

  getSession() {
    return menuState.session;
  },

  isOpened() {
    return !!menuState.opened;
  },

  addListener(action, callback) {
    this.on(action, callback);
  },

  removeListener: function(action, callback) {
    this.removeListener(action, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case 'MENU_ACTION_REDIRECT':
        redirect(action.session);
        MenuStore.emit('MENU_REDIRECT');
        break;

      case 'MENU_ACTION_TOGGLE':
        toggle();
        MenuStore.emit('MENU_TOGGLE');
        break;

      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = MenuStore;
