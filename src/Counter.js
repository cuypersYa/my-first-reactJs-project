import React from 'react';
import ReactDOM from 'react-dom';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        console.log('couter.js');
    }

    render() {

        return ( < button onClick = {
                () => { this.setState({ count: this.state.count + 1 }); }
            } >
            Count: { this.state.count } < /button>
        );
    }
}
export default Counter;