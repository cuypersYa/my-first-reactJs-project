//console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import HelloWorld from './HelloWorld';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello World!123');
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('mount')
    );
    ReactDOM.render(
        React.createElement(HelloWorld),
        document.getElementById('HelloWorld')
    );
});