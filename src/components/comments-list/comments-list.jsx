import React, { Component } from 'react';
import { connect } from 'react-redux';

import './comments-list.scss';

import ListItem from '../list-item';

class PostComments extends Component {
  render() {
    const { postComments } = this.props;
    console.log(this.props);

    return (
      <ul className="comments-container">
        {postComments.map(comment => (
          <ListItem
            type="comment"
            name={comment.name}
            body={comment.body}
            email={comment.email}
            key={comment.id}
          />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ comments: { postComments } }) => ({
  postComments
});

export default connect(mapStateToProps)(PostComments);
