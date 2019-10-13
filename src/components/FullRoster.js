import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const FullRoster = (props) => {
  return (
    <div>
      <ul>
        {
          props.players.map(p => (
            <li key={p.number}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="player face" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p><Link className="subtitle is-6" to={`/roster/${p.number}`}>{p.name}</Link></p>
                      <p className="subtitle is-6">#{p.number}</p>
                    </div>
                  </div>
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
