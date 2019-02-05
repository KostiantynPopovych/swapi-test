import React, { PureComponent } from 'react';

import './loader.scss';

import loader from '../../assets/img/loader.svg';

class Loader extends PureComponent {
    render() {
        return (
            <div className="wrap">
                <img src={ loader } alt="loader"/>
            </div>
        );
    }
}

export default Loader;