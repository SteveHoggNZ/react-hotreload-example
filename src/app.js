import React from 'react';
import ReactDOM from 'react-dom';
import Foo from './Foo';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Foo/>, app);
