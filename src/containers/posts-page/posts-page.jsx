import React, { Component } from 'react';
import { fetchPosts } from '../../store/people/actionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './people-page.scss';

import ListItem from '../../components/list-item';

class PostsPage extends Component {
   
    static defaultProps = {
        title: 'People page'
    }

    static propTypes = {
        postsList: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount() {
        this.fetchPosts();
    }

    componentWillMount() {
        document.title = this.props.title; 
    }

    fetchPosts = () => this.props.fetchPosts();

    render() {
        const { postsList } = this.props;
        const items = <ul>{
            postsList.slice(0,9).map((item, idx) => {
                return <ListItem 
                            id={item.id} 
                            type='person'
                            imgSrc={idx + 1}
                            key={item.id} />
                })
        }</ul>;
        return (
            <div className="people-container">
                { items }
            </div>
        )
    }
    
}

const mapStateToProps = ({people}) => ({
    postsList: people.postsList,
});

const mapDispatchToProps = {
    fetchPosts
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsPage));