import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Player = (props) => {

  return (
    !props.player
    ?
    <div>Sorry, but the player was not found</div>
    :
    <div>
      <h1>{props.player.name} (#{props.player.number})</h1>
      <h2>Position: {props.player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

const mapStateToProps = (state, props) => {  
  var player = Number.parseInt(props.match.params.number);
  return {
      player: state.players.filter(p=>p.number===player)[0]
  };
};

const mapDispatchToProps = {   
};

export default connect(mapStateToProps, mapDispatchToProps)(Player)
