import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { fetchPerson } from '../../actions/person';

import Loader from '../../components/loader';

import './person.scss';

class PostPage extends Component {

  static defaultProps = {
    title: 'Person page'
  };

  componentDidMount() {
    document.title = this.props.title;
    const { dispatchFetchPerson, match } = this.props;
    dispatchFetchPerson(+match.params.id);
  }

  render() {
    const { person, match } = this.props;

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
            {
              person.loading && 
                <Loader />
            }
              
                
            {
              !person.loading && 
                <>
                  <img src={require(`../../assets/img/list-items/${+match.params.id}.jpg`)} alt="person" />
                  <div className="person-container-texts">
                    <p className="person-container-texts-title">{ person.name }</p>
                    <p className="person-container-texts-body">Birth year: { person.birth_year }</p>
                    <p className="person-container-texts-body">Gender: { person.gender }</p>
                    <p className="person-container-texts-body">Eye color: { person.eye_color }</p>
                    <p className="person-container-texts-body">Hair color: { person.hair_color }</p>
                    <p className="person-container-texts-body">Height: { person.height }</p>
                    <p className="person-container-texts-body">Mass: { person.mass }</p>
                    {
                      person.films.length &&
                        <p className="person-container-texts-body">Films: { person.films }</p>
                    }
                    {
                      person.species.length &&
                      <p className="person-container-texts-body">Species: { person.species }</p>
                    }
                    {
                      person.starships.length && 
                        <p className="person-container-texts-body">Starships: { person.starships }</p>
                    }
                    {
                      person.vehicles.length && 
                        <p className="person-container-texts-body">Vehicles: { person.vehicles }</p>
                    }
                  </div>
                </>
            }
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = ({ person }) => ({
  person,
});

const mapDispatchToProps = {
  dispatchFetchPerson: fetchPerson,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));