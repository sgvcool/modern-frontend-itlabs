var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  toggleItem: function () {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.TOGGLE_ITEM
    })
  }
};

module.exports = AppActions;
