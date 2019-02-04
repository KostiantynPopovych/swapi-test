import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './person.scss';

class Person extends PureComponent {
    render() {
        const randomId = Math.floor(Math.random() * 10);
        const { name, birthYear, urlId } =this.props;

        return (
            <li className="person">
                <ReactCSSTransitionGroup
                        transitionName="people"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        transitionAppear={true}
                        transitionAppearTimeout={500}>
                    <Link to={`/person/${urlId}`}>
                        <img src={require(`../../assets/img/list-items/${randomId}.jpg`)} alt="person" />
                        <FontAwesomeIcon icon="arrow-right"/>
                        <span className="person-info">
                            <span className="person-info-title">
                               { name }
                            </span>
                            <span className="person-info-description">
                                { birthYear }
                            </span>
                        </span>
                    </Link> 
                </ReactCSSTransitionGroup>
            </li>  
        )
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        birthYear: PropTypes.string.isRequired,
        urlId: PropTypes.string.isRequired,
    }
};

export default Person;