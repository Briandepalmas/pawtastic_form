import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  constructor(props){
    super(props);

    this.state={ value:''}


    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event)  {
this.setState({value: event.target.value})
  }
  handleSubmit(event)  {
alert(`A change happened ${this.state.value}`)
event.preventDefault()
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleChange}>
          <label>
          Name:
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </label>
        </form>
        
      </div>
    )
  }
}

export default App