import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './people.scss';

import Person from '../../components/person';

import { fetchPeople, fetchPeopleBySearch } from '../../actions/people';

import { getIdFromUrl } from '../../helpers/getId';

const mapStateToProps = ({ people }) => ({
    people,
});

const mapDispatchToProps = {
    dispatchFetchPeople: fetchPeople,
    dispatchFetchPeopleBySearch: fetchPeopleBySearch,
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
        const { dispatchFetchPeopleBySearch } = this.props;
        dispatchFetchPeopleBySearch(value);
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
            </div>
        )
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsPage));