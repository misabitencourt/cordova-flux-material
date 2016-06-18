var React = require('react');

const Session = React.createClass({

  getInitialState() {
    return {
      current: 'home'
    };
  },

  componentDidMount: function() {
//    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    // TodoStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        
      </div>
    );
  }


});

module.exports = Session;
