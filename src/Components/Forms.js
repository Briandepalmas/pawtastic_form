import React, { Component } from 'react'
import  './FormsStyle.css'


export class Forms extends Component {

 constructor(props) {
     super(props);

     this.state = {
         value: ''
     }


     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)
 }

 handleChange(event) {
     this.setState({
         value: event.target.value
     })
 }
 handleSubmit(event) {
     alert(`A change happened ${this.state.value}`)
     event.preventDefault()
 }


    render() {
        return (
  <div className="mainContainer">  
    <div className="name">
        <form onSubmit={this.handleChange}>
            <label for="petname">
                 Name
                 <input className="inputsize" type="text" placeholder="Pet's Name" onChange={this.handleChange}/>
                 {/* <input className="inputsize" type="submit" value="Submit" onClick={this.handleSubmit}/> */}
            </label>
        </form> 
     </div>
     
     {/* ////////  */}
      
      <div className="breed">
      <form onSubmit={this.handleChange}>
          <label for="breed">
               Breed
               <input className="inputsize" type="text" placeholder="Pet's Name" onChange={this.handleChange}/>
               {/* <input className="inputsize" type="submit" value="Submit" onClick={this.handleSubmit}/> */}
          </label>
      </form> 
     </div>

       {/* ////////  */}
      
       <div className="birthday">
      <form onSubmit={this.handleChange}>
          <label for="age">
               Birthday
               <input className="inputsize" type="text" placeholder="Pet's Name" onChange={this.handleChange}/>
               {/* <input className="inputsize" type="submit" value="Submit" onClick={this.handleSubmit}/> */}
          </label>
      </form> 
     </div>

</div>
        )
    }
}

export default Forms
