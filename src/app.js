import React from 'react';
import ReactDOM from 'react-dom';
import Foo from './Foo';

require('./app.css');

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Foo/>, app);