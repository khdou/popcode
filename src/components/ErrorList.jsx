var React = require('react');
var ErrorSublist = require('./ErrorSublist');
var classnames = require('classnames');
var get = require('lodash/get');

var ErrorList = React.createClass({
  propTypes: {
    html: React.PropTypes.array.isRequired,
    css: React.PropTypes.array.isRequired,
    javascript: React.PropTypes.array.isRequired,
    onErrorClicked: React.PropTypes.func.isRequired,
    docked: React.PropTypes.bool,
  },

  render: function() {
    var docked = get(this, 'props.docked', false);

    return (
      <div className={classnames('errorList', {'errorList--docked': docked})}>
        <ErrorSublist
          language="html"
          errors={this.props.html}
          onErrorClicked={this.props.onErrorClicked}
        />
        <ErrorSublist
          language="css"
          errors={this.props.css}
          onErrorClicked={this.props.onErrorClicked}
        />
        <ErrorSublist
          language="javascript"
          errors={this.props.javascript}
          onErrorClicked={this.props.onErrorClicked}
        />
      </div>
    );
  },
});

module.exports = ErrorList;
