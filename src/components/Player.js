import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Player = (props) => {

  return (
    !props.player
      ?
      <div>Sorry, but the player was not found</div>
      :
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.player.name}</p>
              <p className="subtitle is-6">#{props.player.number}</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <Link to='/roster'>Back</Link>
            <br />
            <h2>Position: {props.player.position}</h2>
            <time>11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = (state, props) => {
  var player = Number.parseInt(props.match.params.number);
  return {
    player: state.players.filter(p => p.number === player)[0]
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Player)
