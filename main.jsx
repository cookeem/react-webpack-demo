import React from 'react';
import ReactDOM from 'react-dom';

var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('app1')
);


var arr = [
  <h1>Hello world!</h1>,
  <h1>React is awesome</h1>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('app2')
);