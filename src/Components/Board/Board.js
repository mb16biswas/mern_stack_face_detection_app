import React, { Component } from 'react';
import axios from 'axios';
import "./Board.css"

const Card = ({name , email , count }) => (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{count}</td>
      
    </tr>
  )
class Board extends Component {
  constructor() {
    super();

    

    this.state = {
        data : [] 
        
       
      
    }
  }

  componentDidMount() {
      
    let info  
    axios.get("https://face-deploy.herokuapp.com/users/all")
      .then(res => {
          
        //   https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
          info = res.data
          if(info.length !== 0){
            info.sort((a,b)=>{
                return b.count - a.count
               
    
    
    
              })
              if(info.length >= 10){
                  this.setState({data : info.slice(0,11)})
                 
              }
              else{
                this.setState({data : info.slice(0,11)})
    
              }

          }
          
        })
      .catch((err) =>{
          console.log(err)
      })
      
}
  scoreboard() {
    return this.state.data.map(i => {
      return <Card name = {i.username} email = {i.email} count = {i.count} key = {i._id}/>;
    })
  }

 

  render() {
     
    if(this.state.data.length !== 0){
        return (
            <div className = "brd">
                <h1>Score board</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Count</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        { this.scoreboard() }
                    </tbody>
              
                </table>
            </div>
            
            
    
        )

    }
   else{
       return(
        <div>
        <h1>Score board</h1>
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Count</th>
                   
                </tr>
            </thead>
           
      
        </table>
    </div>

       )
   }
        
        

    
  }
}
export default Board 

