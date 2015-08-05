var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppConstant = require('../constants/AppConstants');


var CHANGE_EVENT = 'change';
var hide = false;

var AppStore = assign({}, EventEmitter.prototype, {
  isHide: function () {
    return hide;
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register(function (payload) {

  var action = payload.action;

  switch (action.actionType) {
    case AppConstant.TOGGLE_ITEM:
      hide = !hide;
      console.log('triggered', payload.action);
      AppStore.emitChange();
      break;
  }
  return true;
});

module.exports = AppStore;
