import React, { Component } from 'react';
import './Clearbtn.css';

class Clearbtn extends Component {

    render() {
        return (
            <div className="clearbtn"
                onClick={() => this.props.handleClear()}
            >
                {this.props.children}
            </div>
        );
    }
}
export default Clearbtn;