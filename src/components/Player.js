import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {getPlayer} from '../actions/index'

const Player = (props) => {
  props.getPlayer(parseInt(props.match.params.number, 10));
  if (!props.player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{props.player.name} (#{props.player.number})</h1>
      <h2>Position: {props.player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
      player: state
  };
};

const mapDispatchToProps = { 
  getPlayer
};

export default connect(mapStateToProps, mapDispatchToProps)(Player)
