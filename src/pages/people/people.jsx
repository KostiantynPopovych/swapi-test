import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './people.scss';

import Person from '../../components/person';

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
        list: [],
    }

    static defaultProps = {
        title: 'People page'
    }

    componentDidMount() {
        const { dispatchFetchPeople } = this.props;
        dispatchFetchPeople();
        document.title = this.props.title; 
    }

    componentDidUpdate(prevProps) {
        if (this.props.people.list !== prevProps.people.list) {
            const { list } = this.props.people;
            this.setState({ list });
        };
    }

    handleChange = inputValue => {
        const { people: { list } } = this.props;
        const newList = list.filter(e => e.name.toLowerCase().includes(inputValue.toLowerCase()));
        this.setState({ list: newList, value: inputValue });
    }
    
    render() {
        const { list, value } = this.state;

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
                        list.slice(0,9).map((item, idx) => (
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