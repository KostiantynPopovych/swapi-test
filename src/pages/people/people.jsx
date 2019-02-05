import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './people.scss';

import Person from '../../components/person';
import Loader from '../../components/loader';

import { fetchPeople } from '../../actions/people';

import { getIdFromUrl } from '../../helpers/getId';

const mapStateToProps = ({ people }) => ({
    people,
});

const mapDispatchToProps = {
    dispatchFetchPeople: fetchPeople,
};

class PostsPage extends Component {
    state = {
        value: '',
    }

    static defaultProps = {
        title: 'People page'
    }

    componentDidMount() {
        const { dispatchFetchPeople } = this.props;
        dispatchFetchPeople();
        document.title = this.props.title; 
    }

    handleChange = value => {
        const { dispatchFetchPeople } = this.props;
        dispatchFetchPeople(value);
        this.setState({ value });
    }
    
    render() {
        const { value } = this.state;
        const { people } = this.props;

        return (
            <div className="people-container">
            <div className="input-wrap">
                <input 
                    value={ value }
                    placeholder='Filter'
                    onChange={ e => this.handleChange(e.target.value) }
                    className="input"
                />
            </div>
            {
                people.loading && <Loader />
            }
            {
                !people.loading &&
                    <ul>
                        {
                            people.list.slice(0, 9).map((item, idx) => (
                                <Person 
                                    id={ item.id } 
                                    name={ item.name }
                                    urlId={ getIdFromUrl(item.url) }
                                    birthYear={ item.birth_year }
                                    key={ idx } />
                                ))
                        }
                    </ul>
            }
            </div>
        )
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsPage));