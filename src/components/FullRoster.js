import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const FullRoster = (props) => {
  return (
    <div>
      <ul>
        {
          props.players.map(p => (
            <li key={p.number}>
              <div className="columns">
                <div className="column is-pulled-right">
                  <figure className="image is-32x32">
                    <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                </div>
                <div className="column">
                  <Link to={`/roster/${p.number}`}>{p.name}</Link>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    players: state.common.players
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FullRoster)
