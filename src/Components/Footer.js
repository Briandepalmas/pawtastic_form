import React, { Component } from 'react'

export class Footer extends Component {
   
    render() {
        return (
            <div>
               <footer id="foot"> 
                    <label for="foot">
                 {/* <input className="inputsize" type="text" placeholder="Pet's Name" onChange={this.handleChange}/> */}
                 <button id="back" type="button" value="Back" onClick={this.handleSubmit}>BACK</button>
                 <button id="next" type="button" value="Next" onClick={this.handleSubmit}>NEXT</button>
            </label>  
               </footer> 
            </div>
        )
    }
}

export default Footer
