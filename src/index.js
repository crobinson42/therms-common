import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const props = {
  onConfirm: () => { alert('confirmed!')},
  confirmTest: 'Custom Confirm Text..?',
  onClick: () => {}
}

ReactDOM.render(
  <Button {...props}>My Button</Button>,
  document.getElementById('root')
);
