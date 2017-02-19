import React from 'react';
import ReactDOM from 'react-dom';

/**
 * A HelloWorld render some text: tap the button to increase the count.
 */
class HelloWorld extends React.Component {
        constructor() {
            super();
            this.name = "some Name";
            this.id = "";
        }

        render() {

            return ( < div id = "" > and the text is... { this.name } < /div>);
            }
        }
        export default HelloWorld;