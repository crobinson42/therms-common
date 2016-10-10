'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(_ref) {
    var confirmText = _ref.confirmText;
    var onConfirm = _ref.onConfirm;

    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.state = {
      confirming: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onConfirm) {
        if (this.state.confirming) {
          this.setState({
            confirming: false
          }, this.props.onConfirm);
        } else {
          this.setState({
            confirming: true
          });
        }
      } else {
        this.props.onClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'button',
        {
          className: this.props.className,
          style: this.props.style,
          onClick: this.handleClick.bind(this)
        },
        this.state.confirming ? this.props.confirmText || 'Are you sure?' : this.props.children
      );
    }
  }]);

  return Button;
}(React.Component);

Button.propTypes = {
  onClick: React__default.PropTypes.func,
  onConfirm: React__default.PropTypes.func,
  confirmText: React__default.PropTypes.string,
  className: React__default.PropTypes.string,
  style: React__default.PropTypes.object
};

Button.defaultProps = {
  className: '',
  style: {}
};

var _export = {
  Button: Button
};

module.exports = _export;