import React, { Component } from 'react'
import Forms from './Components/Forms'
import Footer from './Components/Footer'
import './App.css'

export class App extends Component {
  constructor(props){
    super(props);

    this.state={ 
            value:''
    }


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
        <Forms/>
        <Footer/>
      </div>
    )
  }
}

export default App