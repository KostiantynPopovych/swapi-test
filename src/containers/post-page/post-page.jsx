import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getFormValues } from 'redux-form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { fetchPost } from '../../store/people/actionCreators';
import { fetchPostComments } from '../../store/comments/actionCreators';
import { saveComment } from '../../store/comments/actionCreators';

import './person-page.scss';

import CommentForm from '../../components/comment-form';
import CommentsList from '../../components/comments-list';

class PostPage extends Component {
  id = Number(this.props.match.params.id);

  static defaultProps = {
    title: 'Person page'
  };

  static propTypes = {
    person: PropTypes.object,
    postComments: PropTypes.arrayOf(PropTypes.object)
  };

  componentDidMount() {
    this.fetchPost(this.id);
    this.fetchPostComments(this.id);
  }

  componentWillMount() {
    document.title = this.props.title;
  }

  saveComment = () => this.props.saveComment(this.props.values);

  fetchPost = id => this.props.fetchPost(id);

  fetchPostComments = id => this.props.fetchPostComments(id);

  render() {
    const { person } = this.props;
    const { body, title } = person;

    return (
      <div className="person-container">
        <ReactCSSTransitionGroup
          transitionName="person"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <div className="person-container-about">
            <img src={require(`../../assets/img/list-items/${this.id}.jpg`)} alt="person" />
            <div className="person-container-texts">
              <p className="person-container-texts-title">{title}</p>
              <p className="person-container-texts-body">{body}</p>
            </div>
          </div>
          <CommentsList />
          <div className="form-container">
            <CommentForm handleSubmit={this.saveComment} />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = ({ people: { person }, comments, ...rest }) => ({
  person,
  values: getFormValues('commentForm')({ person, comments, ...rest })
});

const mapDispatchToProps = {
  fetchPost,
  fetchPostComments,
  saveComment
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostPage)
);
