import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {getAll} from '../actions/index'

/*
const FullRoster = (props) => {  
  props.getAll();

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
*/
class FullRoster extends Component {  

  componentDidMount() {
    this.props.getAll();
  }

  componentDidUpdate(prevProps) {
    this.props.getAll();
  }

  dismiss() {
    this.props.dismiss();
}

  render() {

    return (
    <div>
      <ul>
        {
          this.props.players.map(p => (
            <li key={p.number}>
              <Link to={`/roster/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
      }
}


const mapStateToProps = (state, props) => {
  return {
    players: state
  };
}

const mapDispatchToProps = { 
  getAll
}

export default connect(mapStateToProps, mapDispatchToProps)(FullRoster)
