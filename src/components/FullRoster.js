import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {addPlayer} from '../actions/index'


const FullRoster = (props) => {  
    return (
    <div>
      <ul>
        {
          props.players.map(p => (
            <li key={p.number}>
              <Link to={`/roster/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state, props) => {  
  return {        
    players: state.players
  };
}

const mapDispatchToProps = (dispatch, props) => { 
  // dispatch(addPlayer({name:"Test", number: 8}));
  return {
    onClick: () => dispatch(addPlayer({name:"Test", number: 6, position: "F"}))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FullRoster)
