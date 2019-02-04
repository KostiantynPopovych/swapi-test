import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './list-item.scss';

export default ({type, id, name, body, email, navRef, imgSrc}) => {
    const clazz = `list-item list-item-${type}`;
    switch (type) {
        case 'person':
            return (
                <li id={id} className={clazz}>
                    <ReactCSSTransitionGroup
                            transitionName="people"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                            transitionAppear={true}
                            transitionAppearTimeout={500}>
                        <Link to={`/people/${id}`}>
                            <img src={require(`../../assets/img/list-items/${imgSrc}.jpg`)} alt="person"/>
                            <FontAwesomeIcon icon="arrow-right"/>
                            <span className="list-item-person-info">
                                <span className="list-item-person-info-title">
                                    Pretty title to person #{id}
                                </span>
                                <span className="list-item-person-info-description">
                                    Pretty short decripton to person #{id}
                                </span>
                            </span>
                        </Link> 
                    </ReactCSSTransitionGroup>
                </li>
            )
           

        case 'comment':
            return (
                <li className={clazz}>
                    <div className="comment-container">
                        <div className="comment-container-avatar">
                            <img src={require(`../../assets/img/list-items/casual_IMG.jpg`)} alt=""/>
                        </div>
                        <h4 className='comment-container-name'>{name}</h4>
                        <a href={`mailto:${email}`}className='comment-container-email'>{email}</a>
                        <div>
                            <h3 className='comment-container-body'>{body}</h3>
                        </div>
                    </div>
                </li>
            )

        case 'nav': 
            return <li className={clazz}>
                        <Link to={navRef}>{name}</Link> 
                    </li>

        default: 
            return <li></li> 
    }
};