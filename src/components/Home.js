import React from 'react'
import { connect } from 'react-redux';
import { addPlayer } from '../actions/index'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.position = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onClick({name: this.name.current.value, number: 7, position: this.position.current.value});    
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Tornadoes Website!</h1>
        <h2>enroll a player!!</h2>
        <form  onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter Name" ref={this.name} />
          </div>
        </div>

        <div className="field">
          <label className="label">Position</label>
          <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="Enter Position" ref={this.position} />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">This position is available</p>
        </div>


        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Add</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    completed: state.completed
  };
}

const mapDispatchToProps = (dispatch, props) => {
  // dispatch(addPlayer({name:"Test", number: 8}));
  return {
    onClick: (p) => dispatch(addPlayer(p)) // {  }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
