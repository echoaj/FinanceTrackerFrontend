import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import './LoadIcon.css'

class LoadIcon extends Component {

    render() {
        return (
            <div className="LoadIcon">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
}

export default LoadIcon;